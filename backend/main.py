from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Dict, Any
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import Column, Integer, Text, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import json
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FlowModel(Base):
    __tablename__ = "flows"
    id = Column(Integer, primary_key=True, index=True)
    nodes = Column(Text)
    edges = Column(Text)

Base.metadata.create_all(bind=engine)

class Flow(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/flows")
def save_flow(flow: Flow, db: Session = Depends(get_db)):
    flow_data = FlowModel(
        nodes=json.dumps(flow.nodes),
        edges=json.dumps(flow.edges)
    )
    db.add(flow_data)
    db.commit()
    db.refresh(flow_data)
    return {"message": "Fluxo salvo com sucesso", "id": flow_data.id}

@app.get("/api/flows/{flow_id}")
def get_flow(flow_id: int, db: Session = Depends(get_db)):
    flow = db.query(FlowModel).filter(FlowModel.id == flow_id).first()
    if not flow:
        raise HTTPException(status_code=404, detail="Fluxo não encontrado")
    return {
        "nodes": json.loads(flow.nodes),
        "edges": json.loads(flow.edges)
    }

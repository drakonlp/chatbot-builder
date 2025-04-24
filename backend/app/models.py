from sqlalchemy import Column, Integer
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class FlowModel(Base):
    __tablename__ = "flows"

    id = Column(Integer, primary_key=True, index=True)
    nodes = Column(JSONB)
    edges = Column(JSONB)

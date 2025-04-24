from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS - ajuste os domínios conforme necessário para produção
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Substitua por domínio seguro em produção
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "API funcionando corretamente 🚀"}

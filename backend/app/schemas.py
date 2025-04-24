from pydantic import BaseModel
from typing import List, Dict, Any

class Flow(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

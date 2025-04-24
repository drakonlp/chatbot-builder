import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import axios from 'axios';

const initialNodes = [];
const initialEdges = [];

let id = 0;
const getId = () => `node_${id++}`;

function FlowEditor() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  const addNewNode = () => {
    const newNode = {
      id: getId(),
      data: { label: `Mensagem ${id}` },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const saveFlow = async () => {
    try {
      const response = await axios.post('https://chatbot-builder-1.onrender.com/api/flows', {
        nodes,
        edges,
      });
      alert(`Fluxo salvo com ID: ${response.data.id}`);
    } catch (err) {
      alert('Erro ao salvar fluxo');
    }
  };

  const loadFlow = async (id) => {
    try {
      const response = await axios.get(`https://chatbot-builder-1.onrender.com/api/flows/${id}`);
      setNodes(response.data.nodes);
      setEdges(response.data.edges);
    } catch (err) {
      alert('Erro ao carregar fluxo');
    }
  };

  return (
    <div style={{ height: '80vh' }}>
      <div style={{ marginBottom: 10 }}>
        <button onClick={addNewNode}>Criar Bloco</button>
        <button onClick={saveFlow}>Salvar</button>
        <button onClick={() => {
          const flowId = prompt('Informe o ID do fluxo:');
          if (flowId) loadFlow(flowId);
        }}>Carregar</button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={setNodes}
        onEdgesChange={setEdges}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default function ChatbotFluxoReact() {
  return (
    <ReactFlowProvider>
      <FlowEditor />
    </ReactFlowProvider>
  );
}

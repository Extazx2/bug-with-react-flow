import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  type OnConnect,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  useReactFlow,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import { Box } from '@mui/material';
import NodeInfo from './NodeInfo';
import { AppNode } from './nodes/types';
import useCanvasStore, { RFState } from './store';

interface SelectorType {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange<Edge>;
}

const selector = (state: RFState): SelectorType => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
});

export default function App() {
  const { nodes, edges, onNodesChange, onEdgesChange, } = useCanvasStore(selector);
  const { setEdges } = useReactFlow();

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
      <Box display={'flex'} flexDirection={"row"} height={"100vh"} width={"100vw"}>
      <Box width={"70vw"}>
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </Box>
      <Box>
        <NodeInfo />
      </Box>
    </Box>
  );
}

import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'start->editable-node', source: 'start', target: 'editable-node', animated: true },
  { id: 'editable-node->c', source: 'editable-node', target: 'c' },
  { id: 'editable-node->d', source: 'editable-node', target: 'd' },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;

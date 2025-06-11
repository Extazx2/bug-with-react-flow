import type { NodeTypes } from '@xyflow/react';

import { AppNode } from './types';
import BaseNodeComponent from './BaseNodeComponent';
import StartNodeComponent from './StartNodeComponent';

export const initialNodes: AppNode[] = [
  {
    id: "start",
    position: { x: 0, y: 0 },
    data: {
        label: "start node",
        pluginId: "START"
    },
    type: "START_NODE",
    draggable: false
  },
  {
    id: 'editable-node',
    type: 'BASE_NODE',
    position: { x: 0, y: 100 },
    data: { label: 'drag me!', pluginId: "BASE" },
  },
  {
    id: 'c',
    type: 'BASE_NODE',
    position: { x: -100, y: 200 },
    data: { label: 'random one!', pluginId: "BASE" },
  },
  {
    id: 'd',
    type: 'BASE_NODE',
    position: { x: 100, y: 200 },
    data: { label: 'another random one!', pluginId: "BASE" },
  }
];

export const nodeTypes = {
  ["BASE_NODE"]: BaseNodeComponent,
  "START_NODE": StartNodeComponent
  // Add any of your custom nodes here!
} satisfies NodeTypes;

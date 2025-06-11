import type { Node } from '@xyflow/react';

export type StartNode = Node<
  {
    // Used to display the name of the node
    label: string;
    // Used to identify the type of node
    pluginId: string;
    // description of the node, used in canvas tooltips
    description?: string;
  },
  "START_NODE"
>

export type BaseNode = Node<
  {
    // Used to display the name of the node
    label: string;
    // Used to identify the type of node
    pluginId: string;
    // description of the node, used in canvas tooltips
    description?: string;
  },
  "BASE_NODE"
>

export type AppNode = StartNode | BaseNode
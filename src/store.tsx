import { applyEdgeChanges, applyNodeChanges, Edge, EdgeChange, NodeChange, OnEdgesChange, OnNodesChange } from "@xyflow/react";
import { createWithEqualityFn } from "zustand/traditional";
import { AppNode } from "./nodes/types";
import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";

export type RFState = {
    nodes: AppNode[];
    edges: Edge[];
    onNodesChange: OnNodesChange<AppNode>;
    onEdgesChange: OnEdgesChange<Edge>;
    updateName: (nodeId: string, name: string) => void;
}

const initialNodesState: AppNode[] = initialNodes;

const useCanvasStore = createWithEqualityFn<RFState>()((set, get) => ({
    nodes: initialNodesState,
    edges: initialEdges,
    onNodesChange: (changes: NodeChange<AppNode>[]) => {
        const appliedChanges = applyNodeChanges(changes, get().nodes);
        set({
            nodes: appliedChanges
        })
    },
    onEdgesChange: (changes: EdgeChange<Edge>[]) => {
        set({
            edges: applyEdgeChanges(changes, get().edges)
        });
    },
    updateName: (nodeId, name) => {
        set({
            nodes: get().nodes.map(node => {
                if (node.id === nodeId) {
                    node.data = { ...node.data, label: name };
                }
                return node;
            })
        });
    }
}));

export default useCanvasStore;
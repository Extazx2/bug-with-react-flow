import { NodeProps, Handle, Position } from "@xyflow/react";
import React, { FC } from "react";
import { type BaseNode } from "./types"

const BaseNodeComponent: FC<NodeProps<BaseNode>> = ({id, data, selected }) => {
    console.log(data);

    return (
        <div className="react-flow__node-default">
            <Handle
                type="target"
                position={Position.Top}
                data-testid={`${data.pluginId}-${id}-target-handle`}
                style={{ height: 12, width: 12 }}
            />
            {data.label && <div>{data.label}</div>}
            {selected ? <div>I am selected</div> : <div>NOT selected</div>}
            <Handle
                type="source"
                position={Position.Bottom}
                data-testid={`${data.pluginId}-${id}-source-handle`}
                style={{ height: 12, width: 12 }}
            />
        </div>
    );
}

export default BaseNodeComponent
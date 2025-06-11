import { NodeProps, Handle, Position } from "@xyflow/react";
import React, { FC } from "react";
import { type StartNode } from "./types"

const StartNodeComponent: FC<NodeProps<StartNode>> = ({id, data, selected }) => {
    console.log(data);

    return (
        <div className="react-flow__node-default">
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

export default StartNodeComponent
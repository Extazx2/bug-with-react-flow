import { Input, Typography } from "@mui/material";
import React, { FC, useCallback, useState } from "react";
import useCanvasStore from "./store";

const NodeInfo: FC = () => {
    const [name, setName] = useState("");
    const updateNodeName = useCanvasStore(s => s.updateName);

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(e.target.value);
        // Handler for canvas changes
        updateNodeName("editable-node", e.target.value);
    },
        [updateNodeName]
    );
    return (
        <>
            <Typography>Type here:</Typography>
            <Input value={name} onChange={handleNameChange} />
        </>
    )
}

export default NodeInfo
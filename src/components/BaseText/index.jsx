import React from 'react';
import { Typography } from "@mui/material";

export default function BaseText({ heading, text }) {
    return (
        <>        
            {
                heading ?
                <Typography className="!font-medium !mt-30 !text-lg">
                    { heading }
                </Typography> :
                null
            }
            <Typography className="!font-normal !text-base">
                { text }
            </Typography>
        </>
    )
}
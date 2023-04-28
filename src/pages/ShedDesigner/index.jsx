import React from "react";
import { Box } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";

export default function ShedDesigner() {
    return (
        <Box className='px-20 desktop:px-100 mt-0 py-54'>
            <HeadingAndButton heading="3D Shed Designer"/>
            <Box className='!my-35 text-center w-full'>
                <iframe 
                    src="https://shedview.lelandsbarns.com/"
                    title="Iframe Example"
                    className="w-full h-850"
                />
            </Box>
        </Box>
    )
}
import React from "react";
import { Box, Typography } from "@mui/material";
import SidebarList from "../SidebarList/inbex";
import SidebarRadios from "../SidebarRadios/inbex";
import SidebarSlider from "../SidebarSlider/inbex";

export default function Sidebar() {
    return (
        <Box className='w-full max-w-400 p-50'>
            <Typography variant='body1' component='div' className='!font-medium text-black !mb-30 !text-2xl cursor-pointer'>
                Find your dream {' '}
                <Typography component='span' className='inline-block text-red !text-2xl'>
                    shed 
                </Typography> 
                {' '} right here
            </Typography>

            <SidebarList />
            <SidebarSlider />
            <SidebarRadios />            
        </Box>
    )
}
import React from 'react';
import { Box, Button, Typography } from "@mui/material";

export default function HeadingAndButton({ onlyButton, onlyHeading, heading, buttonText = "Back To All Products" }) {
    if (onlyHeading) return (
        <Box className="flex justify-between">
            <Typography variant='body1' component='div' className='!font-medium text-red !text-[32px] text-left'>
                { heading }
            </Typography>
        </Box>
    )

    if (onlyButton) return (
        <Box className="flex justify-end">
            <Button className='!bg-red !text-white !px-40 !py-15 !text-base !normal-case !rounded-8'>
                { buttonText }
            </Button>
        </Box>
    )

    return (
        <Box className="flex justify-between">
            <Typography variant='body1' component='div' className='!font-medium text-red !text-[32px] text-left'>
                { heading }
            </Typography>
            <Box className="flex justify-end">
                <Button className='!bg-red !text-white !px-40 !py-15 !text-base !normal-case !rounded-8'>
                    { buttonText }
                </Button>
            </Box>
        </Box>
    )
}
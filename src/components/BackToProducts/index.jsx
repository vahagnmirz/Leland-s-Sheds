import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function BackToProducts() {
    const navigate = useNavigate();
    const clickHandler = () => navigate(-1);

    return (
        <Box className='flex flex-wrap justify-between px-30 depx-100 gap-40 mb-60'>
            <Box>   
                <Typography variant='body1' component='p' className='!text-base text-black !font-medium !mb-10'>
                    Shed line products are not designed and built for residential purposes.
                </Typography>
                <Typography variant='body1' component='p' className='!text-base text-black !font-medium capitalize'>
                    These are not built to residential framing codes. Each state has unique regulations on what constitutes legal housing, we are not building these as a form of legal housing.
                </Typography>
            </Box>
            <Box>
                <Button className='!bg-red !text-white !px-40 !py-15 !text-base' onClick={clickHandler}>
                    Back To All Products
                </Button>
            </Box>
        </Box>
    )
}
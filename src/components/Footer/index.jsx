import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box className="bg-footer p-25">
            <Typography variant='body1' component='div' className='!font-medium text-white text-xs text-center'>
                © Copyright 2023 | Leland's Industries LLC
            </Typography>
        </Box>
    )
}
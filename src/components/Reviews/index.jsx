import React from 'react';
import { Box, Typography } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function Reviews({ items = [] }) {
    return (
        <Box className='py-30 px-30 depx-100'>
            <Typography variant='body1' component='h1' className='!text-4xl text-red !font-medium !mb-30'>
                Want to design your shed online? 
            </Typography>
            <Box className='flex flex-wrap large_desktop:flex-nowrap justify-between items-center gap-30'>
                {
                    items.map((each, idx) => (
                        <Box key={idx} className='flex gap-10 rounded-8 shadow-reviewCard p-15 !text-7xl'>
                            <FormatQuoteIcon className='text-black opacity-30 rotate-180 mt-_10' fontSize='inherit'/>
                            <Box>
                                <Typography variant='body1' component='h1' className='!text-sm text-black !font-medium !mb-10'>
                                    { each }
                                </Typography>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}
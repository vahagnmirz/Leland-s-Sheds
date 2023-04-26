import React from 'react';
import { Box, Typography } from "@mui/material";

export default function SectionBars({ items = [] }) {
    return (
        <Box className='py-30 px3 depx-100'>
            <Typography variant='body1' component='h1' className='!text-4xl text-red !font-medium !mb-30'>
                The Lofted Barn Side Entry Shed is a perfect solution for these needs
            </Typography>
            <Box className='flex flex-wrap items-center gap-20 cursor-pointer'>
                {
                    items.map((each, idx) => (
                        <Box key={idx} className='bg-lightblue rounded-50 py-8 px-20'>
                            <Typography variant='body1' component='h1' className='!text-sm text-grey !font-bold'>
                                { each }
                            </Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}
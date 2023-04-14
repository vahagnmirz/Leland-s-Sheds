import React from 'react';
import Card from '../Card';
import { Box, Typography } from '@mui/material';

export default function CardContainerSimilars({ heading, items = [], sectionBars = [] }) {
    return (
        <Box className='rounded-4 m-30 mb-120'>
            <Typography variant='body1' component='div' className={`!font-semibold text-red !mb-30 !text-2xl cursor-pointer`}>
                { heading }
            </Typography>
            <Box className='flex  items-center flex-wrap gap-40'>
                {
                    items.map(({
                        imageUrl,
                        title,
                        description,
                    }, idx) => (
                        <Card 
                            key={idx}
                            imageUrl={imageUrl}
                            title={title}
                            description={description}
                            sectionBars={sectionBars}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}
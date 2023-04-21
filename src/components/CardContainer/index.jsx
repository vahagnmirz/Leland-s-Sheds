import React from 'react';
import Card from '../Card';
import { Box, Typography } from '@mui/material';

export default function CardContainer({ 
    heading, 
    isRedHeading = false, 
    isPriceVisible = false, 
    isSimilar = false,
    isSlim = false,
    items = [], 
    sectionBars = []
}) {
    return (
        <Box className={`rounded-4 m-30 mb-120 ${isSlim ? "px-100" : ""}`}>
            <Typography variant='body1' component='div' className={`!font-semibold ${ isRedHeading ? "text-red" : "text-black" } !mb-30 !text-2xl cursor-pointer`}>
                { heading }
            </Typography>
            <Box className='flex  items-center flex-wrap gap-40'>
                {
                    items.map(({
                        id,
                        imageUrl,
                        title,
                        price,
                        description,
                    }) => (
                        <Card 
                            key={id}
                            id={id}
                            imageUrl={imageUrl}
                            title={title}
                            price={isPriceVisible && price}
                            description={description}
                            sectionBars={sectionBars}
                            isSimilar={isSimilar}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}
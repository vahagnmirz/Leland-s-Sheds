import React, { useContext } from 'react';
import Card from '../Card';
import { Box, Typography } from '@mui/material';
import { CategoriesContext, PriceContext } from '../../App';

export default function CardContainer({ 
    heading, 
    isRedHeading = false, 
    isPriceVisible = false, 
    isSimilar = false,
    isSlim = false,
    items = [], 
    sectionBars = []
}) {
    const { price } = useContext(PriceContext);
    const { category } = useContext(CategoriesContext);
    const filteredItems = category ?
        items.filter(each => each.price>=price && each.categories.includes(category)) :
        items.filter(each => each.price>=price);

    return (
        <Box className={`rounded-4 m-30 desktop:mb-120 laptop:mb-20 ${isSlim ? "desktop:px-100" : ""}`}>
            <Typography variant='body1' component='div' className={`!font-semibold ${ isRedHeading ? "text-red" : "text-black" } !mb-30 !text-2xl cursor-pointer`}>
                { heading }
            </Typography>
            <Box className='flex  items-center flex-wrap gap-40'>
                {
                    filteredItems.length>0 ?
                    filteredItems.map(({
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
                    )) :
                    <Typography variant='body1' component='div' className={`!font-semibold ${ isRedHeading ? "text-red" : "text-grey" } !mb-30 !text-base cursor-pointer`}>
                        No items found with this price
                    </Typography>
                }
            </Box>
        </Box>
    )
}
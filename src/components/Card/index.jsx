import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MenuList } from '../../App';

export default function Card({ 
    id,
    imageUrl,
    title,
    description,
    price,
    sectionBars,
    isSimilar
}) {
    const formatter = new Intl.NumberFormat('en-gb');

    return (
        <Box className='rounded-4 max-w-450 shadow-card border-1 border-card p-20'>
            <img 
                src={imageUrl}
                alt='Logo'
                width={350}
                height={250}
                className='block mx-auto !w-card-img !h-card-img'
            />
            <Typography variant='body1' component='div' className='!font-semibold text-black !mt-10 !text-lg text-center'>
                { title }
            </Typography>
            {
                price ?
                <Typography variant='body1' component='div' className='!font-medium text-red !text-xs text-center'>
                    Starting at ${formatter.format(price)}
                </Typography> :
                null
            }
            <Typography variant='body1' component='div' className='!font-normal text-black !text-sm text-center px3'>
                { description }
            </Typography>

            <Box className='mt-10 flex justify-center gap-20 items-center'>
                <Link to={isSimilar ? `` : `${id}`}>
                    <Button
                        className='!bg-white flex justify-center gap-20 items-center !leading-20'
                        sx={{
                            borderRadius: '8px',
                            padding: '8px 35px',
                            color: '#E72125',
                            border: '2px solid #E72125',
                            textTransform: 'initial',
                            fontFamily: 'inherit',
                            fontWeight: 600,
                            fontSize: 16,
                        }}
                    >
                        Learn More
                    </Button>
                </Link>
                <Link to={MenuList.shedDesigner}>
                    <Button
                        className='!bg-red flex justify-center gap-20 items-center !leading-20'
                        sx={{
                            borderRadius: '8px',
                            padding: '8px 35px',
                            color: 'white',
                            border: '2px solid #E72125',
                            textTransform: 'initial',
                            fontFamily: 'inherit',
                            fontWeight: 600,
                            fontSize: 16,
                        }}
                    >
                        Design Onine
                    </Button>
                </Link>
            </Box>
            {
                sectionBars.length>0 ?
                <Box className='flex items-center justify-center flex-wrap gap-20 cursor-pointer mt-20'>
                    {
                        sectionBars.map((each, idx) => (
                            <Box key={idx} className='bg-lightblue rounded-50 py-8 px-20'>
                                <Typography variant='body1' component='h1' className='!text-xs text-grey !font-bold'>
                                    { each }
                                </Typography>
                            </Box>
                        ))
                    }
                </Box> :
                null
            }
        </Box>
    )
}
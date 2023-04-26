import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MenuList } from '../../App';

export default function LayoutHeader() {
    return (
        <>
            <Box className="bg-red flex flex-wrap justify-between items-center px-40 py-10">
                <Box>
                    <Typography variant='body1' component='div' className='!font-semibold text-white !text-2xl cursor-pointer !mr-20'>
                        Leland's Sheds
                    </Typography>
                </Box>
                <Box className="flex flex-wrap desktop:flex-row flex-col justify-between items-center content-center gap-20">
                    <Typography variant='body1' component='div' className='!font-medium text-white !text-sm cursor-pointer'>
                        Can't find what you're looking for? 
                    </Typography>
                    <Box className="flex justify-between items-center content-center gap-20">
                        <Link to={MenuList.contact}>
                            <Button
                                className='!bg-white py-3 px-40 flex justify-center gap-20 items-center !leading-4.5'
                                sx={{
                                    borderRadius: '8px',
                                    color: '#E72125',
                                    border: '2px solid #E72125',
                                    textTransform: 'initial',
                                    fontFamily: 'inherit',
                                    fontWeight: 600,
                                    fontSize: 16,
                                }}
                            >
                                Contact Us
                            </Button>
                        </Link>
                        <Link to={MenuList.contact}>
                            <Button
                                className='!bg-white py-3 px-40 flex justify-center gap-20 items-center !leading-4.5'
                                sx={{
                                    borderRadius: '8px',
                                    color: '#E72125',
                                    border: '2px solid #E72125',
                                    textTransform: 'initial',
                                    fontFamily: 'inherit',
                                    fontWeight: 600,
                                    fontSize: 16,
                                }}
                            >
                                Call Now
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
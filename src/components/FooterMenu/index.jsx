import React from 'react';
import { Box, Typography } from '@mui/material';

export default function FooterMenu() {
    return (
        <Box className="flex justify-around gap-20 mb-10">
            <Box>
                <img 
                    src="/assets/Images/footer-menu-logo.png"
                    alt="logo"
                    width={244}
                    height={220}
                />
            </Box>

            <Box className="gap-20 mb-15">
                <Typography variant='body1' component='div' className='text-left !font-bold text-black !text-lg !mb-20 !mt-5 cursor-pointer'>
                    Get Started
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Home
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    About Us
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Shed Gallery
                </Typography>
            </Box>

            <Box className="gap-20 mb-15">
                <Typography variant='body1' component='div' className='text-left !font-bold text-black !text-lg !mb-20 !mt-5 cursor-pointer'>
                    Products
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Defender Series Sheds
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Value Series Sheds
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Backyard Series Sheds
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Shed Options & Upgrades
                </Typography>
            </Box>

            <Box className="gap-20 mb-15">
                <Typography variant='body1' component='div' className='text-left !font-bold text-black !text-lg !mb-20 !mt-5 cursor-pointer'>
                    Informative
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    FAQs
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Rent To Own
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Warranty
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Delivery
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Privacy Policy
                </Typography>
            </Box>

            <Box className="gap-20 mb-10">
                <Typography variant='body1' component='div' className='text-left !font-bold text-black !text-lg !mb-20 !mt-5 cursor-pointer'>
                    Contact
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Contact Us
                </Typography>
                <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                    Service Request
                </Typography>
            </Box>
            
        </Box>
    )
}
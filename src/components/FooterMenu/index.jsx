import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MenuList } from '../../App';

export default function FooterMenu() {
    return (
        <Box className="flex flex-wrap desktop:flex-nowrap justify-around gap-20 mb-10">
            <Box>
                <img 
                    src="/assets/Images/footer-menu-logo.png"
                    alt="logo"
                    width={244}
                    height={220}
                />
            </Box>

            <Box className="flex flex-wrap desktop:flex-nowrap justify-around gap-20 mb-10 px-10">
                <Box className="gap-20 mb-15">
                    <Typography variant='body1' component='div' className='text-left !font-bold text-black !text-lg !mb-20 !mt-5 cursor-pointer'>
                        Get Started
                    </Typography>
                    <Link to={MenuList.defenderShedsUrl}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Home
                        </Typography>
                    </Link>
                    <Link to={MenuList.about}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            About Us
                        </Typography>
                    </Link>
                    <Link to={MenuList.gallery}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Shed Gallery
                        </Typography>
                    </Link>
                </Box>

                <Box className="gap-20 mb-15">
                    <Typography variant='body1' component='div' className='text-left !font-bold text-black !text-lg !mb-20 !mt-5 cursor-pointer'>
                        Products
                    </Typography>
                    <Link to={MenuList.defenderShedsUrl}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Defender Series Sheds
                        </Typography>
                    </Link>
                    <Link to={MenuList.diamondShedsUrl}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Diamond Series Sheds
                        </Typography>
                    </Link>
                    <Link to={MenuList.valueShedsUrl}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Value Series Sheds
                        </Typography>
                    </Link>
                    <Link to={MenuList.backyardShedsUrl}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Backyard Series Sheds
                        </Typography>
                    </Link>
                    <Link to={MenuList.shedOptions}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Shed Options & Upgrades
                        </Typography>
                    </Link>
                </Box>

                <Box className="gap-20 mb-15">
                    <Typography variant='body1' component='div' className='text-left !font-bold text-black !text-lg !mb-20 !mt-5 cursor-pointer'>
                        Informative
                    </Typography>
                    <Link to={MenuList.faq}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            FAQs
                        </Typography>
                    </Link>
                    <Link to={MenuList.rent}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Rent To Own
                        </Typography>
                    </Link>
                    <Link to={MenuList.warranty}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Warranty
                        </Typography>
                    </Link>
                    <Link to={MenuList.delivery}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Delivery
                        </Typography>
                    </Link>
                    <Link to={MenuList.privacy}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Privacy Policy
                        </Typography>
                    </Link>
                </Box>

                <Box className="gap-20 mb-10">
                    <Typography variant='body1' component='div' className='text-left !font-bold text-black !text-lg !mb-20 !mt-5 cursor-pointer'>
                        Contact
                    </Typography>
                    <Link to={MenuList.contact}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Contact Us
                        </Typography>
                    </Link>
                    <Link to={MenuList.serviceRequest}>
                        <Typography variant='body1' component='div' className='hover:opacity-80 text-left font-normal text-black !text-sm !mb-10 cursor-pointer'>
                            Service Request
                        </Typography>
                    </Link>
                </Box>
            </Box>            
        </Box>
    )
}
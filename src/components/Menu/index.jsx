import React from 'react';
import { Close } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

export default function Menu({ closeHandler }) {
    return (
        <Box className="bg-white shadow-menu rounded-4 w-menu absolute right-30 px-30 z-10">
            <Box className="text-right">
                <Close className='text-menuClose mr-_10 !text-4xl cursor-pointer' onClick={closeHandler} />                
            </Box>
            <Box className="flex justify-start gap-20 mb-15">
                <Box>
                    <img 
                        src="/assets/Icons/get-started-icon.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </Box>
                <Box>
                    <Typography variant='body1' component='div' className='text-left !font-bold text-black text-lg !mb-10 !mt-5 cursor-pointer'>
                        Get Started
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Home
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        About Us
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Shed Gallery
                    </Typography>
                </Box>
            </Box>
            <Box className="flex justify-start gap-20 mb-15">
                <Box>
                    <img 
                        src="/assets/Icons/products-icon.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </Box>
                <Box>
                    <Typography variant='body1' component='div' className='text-left !font-bold text-black text-lg !mb-10 !mt-5 cursor-pointer'>
                        Products
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Defender Series Sheds
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Value Series Sheds
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Backyard Series Sheds
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Shed Options & Upgrades
                    </Typography>
                </Box>
            </Box>
            <Box className="flex justify-start gap-20 mb-15">
                <Box>
                    <img 
                        src="/assets/Icons/informative-icon.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </Box>
                <Box>
                    <Typography variant='body1' component='div' className='text-left !font-bold text-black text-lg !mb-10 !mt-5 cursor-pointer'>
                        Informative
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        FAQs
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Rent To Own
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Warranty
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Delivery
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Privacy Policy
                    </Typography>
                </Box>
            </Box>
            <Box className="flex justify-start gap-20 mb-10">
                <Box>
                    <img 
                        src="/assets/Icons/contact-icon.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                </Box>
                <Box>
                    <Typography variant='body1' component='div' className='text-left !font-bold text-black text-lg !mb-10 !mt-5 cursor-pointer'>
                        Contact
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Contact Us
                    </Typography>
                    <Typography variant='body1' component='div' className='text-left font-normal text-black text-base !mb-10 cursor-pointer'>
                        Service Request
                    </Typography>
                </Box>
            </Box>
            <Button 
                className='!bg-red flex justify-center gap-10 items-center'
                sx={{
                    borderRadius: '8px',
                    marginBottom: '20px',
                    padding: '8px 30px',
                    color: 'white',
                    textTransform: 'initial',
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    fontSize: 16,
                }}
            >
                Design Online
                <img 
                    src="/assets/Icons/menu-button-icon.svg"
                    alt="logo"
                    width={26}
                    height={22}
                />
            </Button>
        </Box>
    )
}
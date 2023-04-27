import React from "react";
import { Box, Typography } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";
import HubspotForm from 'react-hubspot-form';

export default function Contact() {
    return (
        <Box className='px-30 desktop:px-100 mt-0 py-54'>
            <HeadingAndButton heading="Contact Us"/>
            <Box className='!mt-35 !w-full flex flex-col justify-between relative'>
                <img
                    src={'./assets/Images/Contact Page image.jpg'}
                    alt='Logo'
                    className='absolute top-0 left-0 bottom-0 rounded-4 z-_2 w-full h-full'
                />
                <Box>
                    <Typography variant='body1' component='div' className='!font-medium text-white capitalize !text-3xl !py-90 !pl-70'>
                        Let us know how to reach you
                    </Typography>
                </Box>
                <Box className='!mt-0 gap-80 bg-white text-center'>
                    <Typography variant='body1' component='div' className='text-center !font-normal text-gray-2 !text-base !mb-10 !pt-20 !pb-30'>
                        Our friendly expert consultants look forward to helping you with any shed or building needs.
                    </Typography>
                    <HubspotForm 
                        region="na1"
                        portalId="4386756"
                        formId="a93f6de8-263b-4040-a776-65dbae5affaf"
                    />
                    <Typography variant='body1' component='div' className='text-center !font-normal text-black !text-xs !mb-40 !mt-35'>
                        By clicking submit, I’m agreeing to submitting my contact information in order for a sales person to contact me in regards to the products I’m interested in.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
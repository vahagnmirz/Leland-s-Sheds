import React from "react";
import { Box, Typography } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";
import HubspotForm from 'react-hubspot-form';

export default function ShedDesigner3D() {
    return (
        <Box className='px-30 desktop:px-100 my-40 py-54'>
            <HeadingAndButton heading="3D Shed Designer"/>
            <Box className='flex flex-wrap mt-40 gap-40 items-center justify-between shadow-card p-30 border-1 border-card'>
                <Box className=''>
                    <img
                        src={'./assets/Images/shed-designer-3d.png'}
                        alt='Logo'
                        width={700}
                        height={630}
                        className='inline-block drop-shadow-rentImg rounded-4 !w-full !h-full'
                    />
                </Box>
                <Box className='max-w-450'>
                    <Typography variant='body1' component='div' className='text-center !font-medium text-gray-2 !text-base !mt-15'>
                        Customize your space in 3D with our online design tool!
                    </Typography>
                    <Typography variant='body1' component='div' className='text-center !font-medium text-black !text-base !mb-10'>
                        Enter your info and start creating your dream shed now!
                    </Typography>
                    <HubspotForm 
                        region="na1"
                        portalId="4386756"
                        formId="2128f544-b7c5-41ff-a580-b77b71a5c494"
                    />
                    <Typography variant='body1' component='div' className='text-center !font-normal text-black !text-xs !mb-10 !mt-100'>
                        By clicking submit, I’m agreeing to submitting my contact information in order for a sales person to contact me in regards to the products I’m interested in.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
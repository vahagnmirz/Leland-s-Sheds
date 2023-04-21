import React from "react";
import { Box, Typography } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";

export default function ServiceRequest() {
    return (
        <Box className='px-130 mt-40 py-54'>
            <HeadingAndButton heading="Service Request"/>
            <Box className='flex mt-40 gap-80 items-center justify-between'>
                <Box className='w-670 h-370'>
                    <img
                        src={'./assets/Images/service request.jpg'}
                        alt='Logo'
                        width={670}
                        height={370}
                        className='inline-block drop-shadow-rentImg rounded-4 !w-full !h-full'
                    />
                </Box>
                <Box className='max-w-550'>
                    <Typography variant='body1' component='div' className='text-center !font-semibold text-black !text-3xl !mb-10 !mt-35'>
                        Let us know how to help you
                    </Typography>
                    <Typography variant='body1' component='div' className='text-center !font-normal text-black !text-base !mb-10 !mt-15'>
                        Have you purchased Leland’s Barn or Shed and have a question regarding your purchase or need to place a service order request?
                    </Typography>
                    <Box className="bg-tooltip mt-30  w-full h-300 flex justify-center items-center">
                        <Typography className="text-center px-5 !font-medium !text-base">
                            <input 
                                type="text" 
                                placeholder="Enter Hubspot Code"
                                className="!p-0 !border-none bg-tooltip placeholder:text-black !text-center !font-medium !text-base hover:border-none hover:outline-none" />
                        </Typography>
                    </Box>
                    <Typography variant='body1' component='div' className='text-center !font-normal text-black !text-xs !mb-10 !mt-35'>
                        By clicking submit, I’m agreeing to submitting my contact information in order for a sales person to contact me in regards to the products I’m interested in.
                    </Typography>
                </Box>
                
            </Box>
        </Box>
    )
}
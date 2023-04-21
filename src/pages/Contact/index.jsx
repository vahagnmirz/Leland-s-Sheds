import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";

export default function Contact() {
    return (
        <Box className='px-130 mt-0 py-54'>
            <HeadingAndButton heading="Contact Us"/>
            <Box className='!mt-35 flex flex-col justify-between relative'>
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
                    <Box className="bg-tooltip mt-20 py-135 px-270 !mx-auto inline-flex justify-center items-center">
                        <Typography variant='body1' component='div' className="block !text-center !font-medium !text-base">
                            <input 
                                type="text" 
                                placeholder="Enter Hubspot Code"
                                className="!p-0 !border-none bg-tooltip placeholder:text-black !text-center !font-medium !text-base hover:border-none hover:outline-none"/>
                        </Typography>
                    </Box>
                    <Typography variant='body1' component='div' className='text-center !font-normal text-black !text-xs !mb-40 !mt-35'>
                        By clicking submit, I’m agreeing to submitting my contact information in order for a sales person to contact me in regards to the products I’m interested in.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
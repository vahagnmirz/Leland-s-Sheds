import React from 'react';
import { Close } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

export default function CanWeHelp({ closeHandler }) {
    return (
        <Box className="bg-white shadow-menu rounded-4 w-can-we-help fixed bottom-20 left-half translate-x-half_ z-2 px-20 pt-20">
            <Box className="text-right">
                <Close className='text-menuClose !text-4xl cursor-pointer' onClick={closeHandler} />
            </Box>
            <Box className="mb-20">
                <Box className="mb-10">
                    <img 
                        src="/assets/Icons/contact-icon.svg"
                        alt="logo"
                        className="mx-auto"
                        width={50}
                        height={50}
                    />
                </Box>
                <Box>
                    <Typography variant='body1' component='div' className='text-center !font-bold text-black !text-3xl !my-25 cursor-pointer'>
                        Can we help? 
                    </Typography>
                    <Typography variant='body1' component='div' className='text-center font-normal text-black text-base !mb-30 cursor-pointer'>
                        Our trained sales personnel are online and available to chat.
                    </Typography>
                    <Box className='mt-10 flex justify-center gap-50 items-center'>
                        <Button
                            className='!bg-white flex justify-center gap-20 items-center'
                            onClick={closeHandler}
                            sx={{
                                borderRadius: '8px',
                                padding: '8px 30px',
                                color: '#E72125',
                                border: '2px solid #E72125',
                                textTransform: 'initial',
                                fontFamily: 'inherit',
                                fontWeight: 700,
                                fontSize: 16,
                            }}
                        >
                            Close Chat
                            <img 
                                src="/assets/Icons/close-chat-icon.svg"
                                alt="logo"
                                width={20}
                                height={22}
                            />
                        </Button>
                        <Button
                            className='!bg-red flex justify-center gap-20 items-center'
                            sx={{
                                borderRadius: '8px',
                                padding: '8px 30px',
                                color: 'white',
                                border: '2px solid #E72125',
                                textTransform: 'initial',
                                fontFamily: 'inherit',
                                fontWeight: 700,
                                fontSize: 16,
                            }}
                        >
                            Start Chat
                            <img 
                                src="/assets/Icons/start-chat-icon.svg"
                                alt="logo"
                                width={22}
                                height={22}
                            />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
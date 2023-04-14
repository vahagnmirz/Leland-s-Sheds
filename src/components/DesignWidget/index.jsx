import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

export default function DesignWigdet() {
    return (
        <Box
            sx={{
                backgroundImage: 'url(assets/Images/design-online-widget.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                padding: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '30px',
                margin: '30px 100px',
            }}
        >
            <Box>
                <Typography variant='body1' component='p' className='!text-4xl text-white !font-bold !mb-10'>
                    Want to design your shed online? 
                </Typography>
                <Typography variant='body1' component='p' className='!text-2xl text-white !font-medium capitalize'>
                    check out our 3D shed configurator for more options.
                </Typography>
            </Box>
            <Box>
                <Button
                    className='!bg-white flex justify-center gap-20 items-center'
                    endIcon={<TrendingFlatIcon color="inherit" className='!text-3xl' />}
                    sx={{
                        borderRadius: '8px',
                        padding: '15px 40px',
                        color: '#E72125',
                        border: '2px solid #E72125',
                        textTransform: 'initial',
                        fontFamily: 'inherit',
                        fontWeight: 600,
                        fontSize: 24,
                    }}
                >
                    Design Online
                </Button>
            </Box>
        </Box>
    )
}
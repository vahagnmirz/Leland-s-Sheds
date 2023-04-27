import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { MenuList } from '../../App';
import { Link } from 'react-router-dom';

export default function DesignWigdet() {
    return (
        <Box
            sx={{   
                backgroundImage: 'url("/assets/Images/design-online-widget.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                padding: '50px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '30px',
            }}
            className="desktop:mx-100 mx-30 my-30 "
        >
            <Box>
                <Typography variant='body1' component='p' className='!text-4xl text-white !font-bold !mb-10'>
                    Want to design your shed online? 
                </Typography>
                <Typography variant='body1' component='p' className='!text-2xl text-white !font-medium capitalize'>
                    check out our 3D shed configurator for more options.
                </Typography>
            </Box>
            <Link to={MenuList.shedDesigner3d}>
                <Button
                    className='!bg-white flex justify-center gap-20 items-center !px-30 !py-10 !leading-25'
                    endIcon={<TrendingFlatIcon color="inherit" className='!text-3xl' />}
                    sx={{
                        borderRadius: '8px',
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
            </Link>
        </Box>
    )
}
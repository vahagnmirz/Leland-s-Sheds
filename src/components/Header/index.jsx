import React, { useState } from 'react';
import { Search, Menu as MenuIcon } from '@mui/icons-material';
import { Box } from '@mui/material';
import Menu from '../Menu';

export default function Header() {
    const [openContextMenu, setOpenContextMenu] = useState(false);

    const openMenuHandler = () => setOpenContextMenu(true);
    const closeMenuHandler = () => setOpenContextMenu(false);

    return (
        <>
            <Box className="flex justify-between items-center px-50">
                <Box>
                    <img 
                        src="/assets/Images/logo-red.png"
                        alt="logo"
                        width={130}
                        height={130}
                    />
                </Box>
                <Box>
                    <Search className='text-red mr-10 !text-4xl cursor-pointer' />
                    <MenuIcon className='text-red !text-4xl cursor-pointer' onClick={openMenuHandler} />
                </Box>
            </Box>
            {
                openContextMenu ?
                <Menu closeHandler={closeMenuHandler} /> :
                null
            }
        </>
    )
}
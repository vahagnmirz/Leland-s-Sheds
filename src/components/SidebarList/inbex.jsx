import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Link, useLocation } from "react-router-dom";
import { MenuList } from "../../App";

export default function SidebarList() {
    const { pathname } = useLocation();

    return (
        <>
            <Box>
                {
                    <Link to={MenuList.defenderShedsUrl}>
                        <Typography 
                            variant='body1' 
                            component='div' 
                            className={`flex justify-between items-center gap-20 py-5 !font-medium !text-base cursor-pointer px-25
                                ${
                                    (pathname.includes(MenuList.defenderShedsUrl)) ?
                                    'bg-red rounded-34 text-white' :
                                    ''
                                }
                            `}
                        >
                            { MenuList.defenderSheds }
                            <TrendingFlatIcon color={(pathname.includes(MenuList.defenderShedsUrl)) ? "inherit" : "error"} />
                        </Typography> 
                    </Link>
                }
                <List
                    sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        color: '#716D6D',
                        marginBottom: '10px'
                    }}
                >
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            Up to 10 Year Warranty
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            8” Hinges
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            2x6 Floor Base
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            Exterior Design Options
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            And more!!!
                        </Typography>
                    </ListItem>
                </List>
            </Box>

            <Box>
                {
                    <Link to={MenuList.diamondShedsUrl}>
                        <Typography 
                            variant='body1' 
                            component='div' 
                            className={`flex justify-between items-center gap-20 py-5 !font-medium !text-base cursor-pointer px-25
                                ${
                                    (pathname.includes(MenuList.diamondShedsUrl)) ?
                                    'bg-red rounded-34 text-white' :
                                    ''
                                }
                            `}
                        >
                            { MenuList.diamondSheds }
                            <TrendingFlatIcon color={(pathname.includes(MenuList.diamondShedsUrl)) ? "inherit" : "error"} />
                        </Typography> 
                    </Link>
                }
                <List
                    sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        color: '#716D6D',
                        marginBottom: '10px'
                    }}
                >
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            Up to 10 Year Warranty
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            Finished Interior with Trim
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            2x6 Floor Base
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                        Insulated Walls & Ceiling
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            And more!!!
                        </Typography>
                    </ListItem>
                </List>
            </Box>

            <Box>
                {
                    <Link to={MenuList.valueShedsUrl}>
                        <Typography 
                            variant='body1' 
                            component='div' 
                            className={`flex justify-between items-center gap-20 py-5 !font-medium !text-base cursor-pointer px-25
                                ${
                                    (pathname.includes(MenuList.valueShedsUrl)) ?
                                    'bg-red rounded-34 text-white' :
                                    ''
                                }
                            `}
                        >
                            { MenuList.valueSheds }
                            <TrendingFlatIcon color={(pathname.includes(MenuList.valueShedsUrl)) ? "inherit" : "error"} />
                        </Typography>
                    </Link> 
                }
                <List
                    sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        color: '#716D6D',
                        marginBottom: '10px'
                    }}
                >
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            Up to 3 Year Warranty
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            5” Hinges
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            3/4” Playwood Floor
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            2x4 Floor Base
                        </Typography>
                    </ListItem>
                </List>
            </Box>

            <Box>
                {
                    <Link to={MenuList.backyardShedsUrl}>
                        <Typography 
                            variant='body1' 
                            component='div' 
                            className={`flex justify-between items-center gap-20 py-5 !font-medium !text-base cursor-pointer px-25
                                ${
                                    (pathname.includes(MenuList.backyardShedsUrl)) ?
                                    'bg-red rounded-34 text-white' :
                                    ''
                                }
                            `}
                        >
                            { MenuList.backyardSheds }
                            <TrendingFlatIcon color={(pathname.includes(MenuList.backyardShedsUrl)) ? "inherit" : "error"} />
                        </Typography> 
                    </Link>
                }
                <List
                    sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0,
                        color: '#716D6D',
                        marginBottom: '10px'
                    }}
                >
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            Up to 5 Year Warranty
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            5” Hinges
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            3/4” Playwood Floor
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                        <Typography variant='body1' component='span' className='!text-xs'>
                            Pressure Treated Decking
                        </Typography>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}
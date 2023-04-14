import React, { useState } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const MenuList = {
    defenderSheds: 'Defender Series sheds',
    diamondSheds: 'Diamond Series sheds',
    valueSheds: 'Value Series sheds',
    backyardSheds: 'Backyard Series sheds',
}

export default function SidebarList() {
    const [activeList, setActiveList] = useState(MenuList.valueSheds);

    const activeSectionChangeHandler = (listName) => () => setActiveList(listName);

    return (
        <>
            <Box>
                {
                    <Typography 
                        variant='body1' 
                        component='div' 
                        onClick={(activeSectionChangeHandler(MenuList.defenderSheds))}
                        className={`flex justify-between items-center gap-20 py-5 !font-medium !text-base cursor-pointer px-25
                            ${
                                (activeList===MenuList.defenderSheds) ?
                                'bg-red rounded-34 text-white' :
                                ''
                            }
                        `}
                    >
                        { MenuList.defenderSheds }
                        <TrendingFlatIcon color={(activeList===MenuList.defenderSheds) ? "inherit" : "error"} />
                    </Typography> 
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
                    <Typography 
                        variant='body1' 
                        component='div' 
                        onClick={(activeSectionChangeHandler(MenuList.diamondSheds))}
                        className={`flex justify-between items-center gap-20 py-5 !font-medium !text-base cursor-pointer px-25
                            ${
                                (activeList===MenuList.diamondSheds) ?
                                'bg-red rounded-34 text-white' :
                                ''
                            }
                        `}
                    >
                        { MenuList.diamondSheds }
                        <TrendingFlatIcon color={(activeList===MenuList.diamondSheds) ? "inherit" : "error"} />
                    </Typography> 
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
                    <Typography 
                        variant='body1' 
                        component='div' 
                        onClick={(activeSectionChangeHandler(MenuList.valueSheds))}
                        className={`flex justify-between items-center gap-20 py-5 !font-medium !text-base cursor-pointer px-25
                            ${
                                (activeList===MenuList.valueSheds) ?
                                'bg-red rounded-34 text-white' :
                                ''
                            }
                        `}
                    >
                        { MenuList.valueSheds }
                        <TrendingFlatIcon color={(activeList===MenuList.valueSheds) ? "inherit" : "error"} />
                    </Typography> 
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
                    <Typography 
                        variant='body1' 
                        component='div' 
                        onClick={(activeSectionChangeHandler(MenuList.backyardSheds))}
                        className={`flex justify-between items-center gap-20 py-5 !font-medium !text-base cursor-pointer px-25
                            ${
                                (activeList===MenuList.backyardSheds) ?
                                'bg-red rounded-34 text-white' :
                                ''
                            }
                        `}
                    >
                        { MenuList.backyardSheds }
                        <TrendingFlatIcon color={(activeList===MenuList.backyardSheds) ? "inherit" : "error"} />
                    </Typography> 
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
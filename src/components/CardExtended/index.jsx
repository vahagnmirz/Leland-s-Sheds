import React from 'react';
import { Box, Breadcrumbs, Button, List, ListItem, Typography } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

export default function CardExtended({ 
    breadcrumbHeading,
    breadcrumbHeadingUrl,
    imageUrl,
    title,
    subImages,
}) {
    return (
        <Box className="px-100 mt-30">
            <Breadcrumbs 
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                <Link
                    to={breadcrumbHeadingUrl}
                    underline="hover"
                    color="inherit"
                >
                    { breadcrumbHeading }
                </Link>
                <Typography className="text-red">{ title }</Typography>
            </Breadcrumbs>

            <Box className='flex justify-center items-center gap-50 rounded-4 shadow-card border-card p-20'>
                <Box>
                    <img 
                        src={imageUrl}
                        alt='Logo'
                        width={560}
                        height={400}
                        className='block mx-auto'
                    />
                </Box>

                <Box className='max-w-30'>
                    <Typography variant='body1' component='div' className='!font-medium text-black !text-2xl text-center'>
                        { title }
                    </Typography>
                    <Typography variant='body1' component='div' className='!font-normal text-black !text-sm text-center px-10 !my-20'>
                        Item available to purchase online through a sales person or contact your local dealer for any in Stock items
                    </Typography>
                    <Typography variant='body1' component='div' className='!font-normal text-description !text-sm px-20'>
                        Our newest design features a modern contemporary style and feel that is perfect for a home office or mother-in-law suite. The Chalet shed provides a sleek and sophisticated space no matter what your use may be. The possibilities are endless with this ageless design. Product is shown with an optional upgrade of a dormer light.
                    </Typography>

                    <Box className='mt-20 text-center'>
                        <Button
                            className='!bg-red flex justify-center gap-10 items-center'
                            endIcon={<PhoneIphoneIcon className='!text-3xl' />}
                            sx={{
                                borderRadius: '8px',
                                padding: '8px 35px',
                                color: 'white',
                                border: '2px solid #E72125',
                                textTransform: 'initial',
                                fontFamily: 'inherit',
                                fontWeight: 600,
                                fontSize: 16,
                            }}
                        >
                            Text for Pricing
                        </Button>
                    </Box>
                </Box>
            </Box>
        
            <Box className='flex justify-between gap-50 rounded-4 p-20 pr-0 mt-50'>
                <Box>
                    <Typography className="text-red capitalize !text-2xl">your Chalet Shed will be built with these elements</Typography>
                    <Box className='flex text-left gap-10'>
                        <List
                            sx={{
                                listStyleType: 'disc',
                                listStylePosition: 'inside',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                                marginBottom: '10px'
                            }}
                        >
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    2x6 Headers on Doors & Windows
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    4x6 pressure treated runners
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    Moisture barrier under floor
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    1x4 Trim
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    (1) 9 lite door
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    2x6 roof trusses
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    5/50 Year Warranty LP Smart Panel Siding
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    3/4 BC plywood floor
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    Hurricane Clips
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    Standard walls 7'9 in. (inside)
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    7/12 Pitch Roof
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    29 Gauge Metal Roof
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!text-xs'>
                                    Haley 100% Acrylic Latex Wooden Structures Paint
                                </Typography>
                            </ListItem>
                        </List>

                        <List
                            sx={{
                                listStyleType: 'disc',
                                listStylePosition: 'inside',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
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
                </Box>
                <Box>
                    <Box>
                        <img 
                            src={subImages?.[0]?.imageUrl}
                            alt='Logo'
                            className='w-auto block mx-auto max-w-500'
                        />
                    </Box>
                    <Box className='flex justify-between mt-10 gap-10'>
                        {
                            subImages?.slice(1).map(({ imageUrl }, idx) => (
                                <img 
                                    key={idx}
                                    src={imageUrl}
                                    alt='Logo'
                                    width={150}
                                    height={120}
                                    className='inline-block'
                                />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
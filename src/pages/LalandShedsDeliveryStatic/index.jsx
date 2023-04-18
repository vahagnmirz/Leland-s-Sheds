import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HeadingAndButton from "../../components/HeadingAndButton";

export default function LalandShedsDeliveryStatic() {
    return (
        <>
            <Box className="flex justify-between px-100 py-54 gap-100">
                <Box className="">
                    <HeadingAndButton heading="Leland's Sheds Delivery" onlyHeading />
                    <Box className="!mt-30">
                        <Typography className="!font-normal !text-base">
                        Leland's is proud to offer Free Delivery up to a 50-mile radius from any of our 30+ Sales Centers in Texas, New Mexico, and Colorado.
                        </Typography>
                        <Typography className="!font-medium !mt-30 !text-lg">
                        PREPARING FOR YOUR NEW SHED DELIVERY:
                        </Typography>
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
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    In order to prepare for delivery, please have the desired location of your new Leland's product clear of debris and obstructions of any kind. 
                                    You may also want to mow the location to keep your unit from setting on tall grass. 
                                    Since your new shed or outdoor living structure will be delivered fully assembled, clear access to the site is crucial for quick and simple delivery. 
                                    This helps to ensure a pleasant delivery experience for you.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    You are responsible for determining ground conditions. If the ground is soft or wet, delivery is not advised.
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography className="!font-normal !text-base !mt-30 !mb-30">
                        We reserve the right to reschedule a delivery if the ground conditions are not adequate for a safe and non-destructive delivery.
                        </Typography>
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
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    You are responsible to identify and locate any underground water or sewer lines that could be damaged. 
                                    Customer bears all responsibility for damage to yard, driveway, etc.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    You are responsible to know and obtain (where necessary) all permits and meet any HOA requirements. 
                                    The professional drivers we contract perform many deliveries every day and your cooperation with these
                                    steps will help to ensure you have a pleasant delivery experience.
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography className="!font-medium !mt-30 !text-lg">
                            SETUP INFO & REQUIREMENTS
                        </Typography>
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
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    The Delivery driver needs the ability to access your location with a fully assembled unit. 
                                    We require an additional 4' of width clearance and 4' of height clearance for a smooth delivery process.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    Setup includes setting the building on your level ground and leveling the unit with pressure-treated wood blocks and shims provided by driver.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    Leland's recommends leveling with Customer provided cement blocks, up to 12” from the ground. (Additional options available at cost to customer.)
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    We do not set your buildings on any type of platforms or piers raised above the ground. A clear, level area is all we require for setup.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-normal'>
                                    Leland's recommends a level gravel or concrete pad for a 14' and 16' wide sheds to reduce the possibility of settling in the future.
                                    (Blocking and settling are not covered under <Link className="underline" href="#">warranty</Link>. See Warranty page for more details.)
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Box>
                    <HeadingAndButton onlyButton />
                    <Box className="bg-tooltip p-62 mt-30">
                        <Box className="text-center !font-medium !text-[12px]">Insert YouTube video</Box>
                        <Typography className="text-center !mt-15 !font-medium !text-[12px]">
                            {`<iframe width="425" height="239" src="https://www.youtube.com/embed/ojWoCnY_GzE" 
                                title="Shed Delivery of a Basic Shed with the Mule - Lelands Barns and Sheds" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                                </iframe>`}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
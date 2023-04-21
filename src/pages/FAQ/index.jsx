import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";

export default function FAQ() {
    return (
        <>
            <Box className="flex justify-between px-100 py-54 gap-60">
                <Box className="max-w-45">
                    <HeadingAndButton heading="FAQs about Leland's sheds" onlyHeading />
                    <Box className="!mt-35 !mb-30 rounded-4 shadow-card p-20">
                        <Typography className="capitalize !font-medium !text-xl text-red">
                            What sets Leland’s apart from the competition?
                        </Typography>
                        <Typography className="!font-medium !mt-10 !text-base">
                            A quick elevator pitch would go something like this; “Leland’s stands apart from competition because we deliver with the service of “small” with the solid warranty of “large”. Leland’s is local.
                        </Typography>
                        <Typography className="!font-medium !mt-30 !text-base">
                            Most other big name brands in the shed industry are out of state corporate companies who hire local contractors, who have no care for quality, no care for customer service, and who have no intention to be here for the long haul. In fact we see them from time to time, set up dealerships for a couple of months and suddenly they are gone. Leland’s has chosen rather to build it’s brand in a solid way, one town at a time.
                        </Typography>
                        <Typography className="!font-medium !mt-30 !text-base">
                            Leland’s is building slowly, steadily, with the intent of long term presence. Big enough to handle whatever your storage needs may be but not too big to care.
                        </Typography>
                    </Box>
                    
                    <Box className="!my-30 rounded-4 shadow-card p-20">
                        <Typography className="capitalize !font-medium !text-xl text-red">
                            does leland’s offer free delivery
                        </Typography>
                        <Typography className="!font-medium !mt-10 !text-base">
                            Leland’s is proud to offer Free Delivery up to a 50-mile radius from any of our 30+ Sales Centers in Texas!
                        </Typography>
                        <Typography className="!font-medium !mt-30 !text-base">
                            Standard Free Delivery Includes:
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
                                <Typography variant='body1' component='span' className='!font-medium'>
                                    Ability to access location with fully assembled unit. We recommend an additional 4’ of width clearance and 4’ of height clearance for the smoothest delivery process.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-medium'>
                                    Setting the building on your level ground, or one of three options for blocking and leveling.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', marginLeft: '20px' }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-medium'>
                                    Level unit with pressure treated wood blocks, FREE to customer.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', marginLeft: '20px' }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-medium'>
                                    Level unit with customer provided concrete blocks up to 12″ high from ground, FREE to customer. Each layer of blocks above 12″ is $100 fee per layer.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', marginLeft: '20px' }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-medium'>
                                    Level unit with driver provided concrete blocks, $5 per block paid to driver at time of setup.
                                </Typography>
                            </ListItem>                            
                        </List>
                        <Typography className="!font-medium !mt-30 !text-base">
                            In order to prepare for delivery, please have the desired location of your new Leland’s product clear of debris and obstructions of any kind. You may also want to mow the location to keep your unit from setting on tall grass. Since your new shed or outdoor living structure will be delivered fully assembled, clear access to the site is crucial for quick and simple delivery. This helps to ensure a pleasant delivery experience for you.
                        </Typography>
                        <Typography className="!font-medium !mt-30 !text-base">
                            Additional Items to consider:
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
                                <Typography variant='body1' component='span' className='!font-medium'>
                                    We do not deliver buildings on any type of platforms or piers raised above the ground. A clear, level area is all we require for delivery. We are not responsible for determining ground conditions. If the ground is soft or wet, delivery is not advised. We reserve the right to reschedule a delivery if the ground conditions are not adequate for a safe and non-destructive delivery.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-medium'>
                                    You are responsible to identify and locate any underground water or sewer lines that could be damaged. Customer bears all responsibility for damage to yard, driveway, etc.
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ display: 'list-item', lineHeight: '10px', padding: '0 auto', margin: 0 }} className='!py-0'>
                                <Typography variant='body1' component='span' className='!font-medium'>
                                    You are responsible to know and obtain (where necessary) all permits and meet any HOA requirements. The professional drivers we contract perform many deliveries every day and your cooperation with these steps will help to ensure you have a pleasant delivery experience.
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Box>

                <Box className="max-w-45">
                    <HeadingAndButton onlyButton />
                    <Box className="!my-30 rounded-4 shadow-card p-20">
                        <Typography className="capitalize !font-medium !text-xl text-red">
                            What is LP smartSide Paneling?
                        </Typography>
                        <Typography className="!font-medium !mt-10 !text-base">
                            It’s NOT particle board, it’s NOT wafer board, it’s NOT chipboard. It’s simply a better choice for your outdoor building! LP SmartSide products deliver all the warmth and beauty of traditional wood, plus the durability and workability of engineered wood. Unlike traditional wood, LP SmartSide Trim & Siding products resist cupping and warping.
                        </Typography>
                        <Typography className="!font-medium !mt-10 !text-base">
                            All LP SmartSide products are treated with the proprietary SmartGuard process to resist fungal decay and termites in harsh environments. Tested in Hilo, Hawaii, LP SmartSide products continue to resist structural damage, even after years of exposure to thriving termite colonies and excessive moisture!
                        </Typography>
                        <Typography className="!font-medium !mt-10 !text-base">
                            So lets just go over a quick check list to better understand the value of LP SmartPanel.
                        </Typography>
                        <Typography className="!font-medium !text-base">
                            1. Industry-Leading Warranty.
                        </Typography>
                        <Typography className="!font-medium !text-base">
                            2. Resists Fungal Rot and Decay.
                        </Typography>
                        <Typography className="!font-medium !text-base">
                            3. Resists Termites.
                        </Typography>
                        <Typography className="!font-medium !text-base">
                            4. Resists Delamination.
                        </Typography>
                        <Typography className="!font-medium !text-base">
                            5. Resists Splitting and Cracking.
                        </Typography>
                        <Typography className="!font-medium !text-base">
                            6. Resists Warping.
                        </Typography>
                        <Typography className="!font-medium !text-base">
                            7. Rich Cedar Grain Texture.
                        </Typography>
                    </Box>

                    <Box className="!my-30 rounded-4 shadow-card p-20">
                        <Typography className="capitalize !font-medium !text-xl text-red">
                            do i need a permit?
                        </Typography>
                        <Typography className="!font-medium !mt-10 !text-base">
                            Most times yes and most counties require the home owner to get their own permit. Leland’s will gladly provide customer with the building plans that the permitting office may require in order to issue a building permit. Each permit office has different requirements and we will do our best to assist you.
                        </Typography>
                    </Box>

                    <Box className="!my-30 rounded-4 shadow-card p-20">
                        <Typography className="capitalize !font-medium !text-xl text-red">
                            how long does it take to get a shed?
                        </Typography>
                        <Typography className="!font-medium !mt-10 !text-base">
                            This may vary depending on the time of the year but on average 3-5 week lead time is to be expected.
                        </Typography>
                    </Box>

                    <Box className="!my-30 rounded-4 shadow-card p-20">
                        <Typography className="capitalize !font-medium !text-xl text-red">
                            does leland’s provide site prep and concrete work?
                        </Typography>
                        <Typography className="!font-medium !mt-10 !text-base">
                            Lelands does not provide site prep and concrete work for sheds or carports.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
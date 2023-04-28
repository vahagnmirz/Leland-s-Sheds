import React from "react";
import { Box, Typography } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";

const IconsList = [
    {
        id: 1,
        imageUrl: 'assets/Images/God Matters.png',
        heading: 'God Matters',
        description: 'Leland’s believes in operating a business that honors God as the leader of the company and makes a difference in kingdom communities through service and surrendering to God’s will.'
    },
    {
        id: 2,
        imageUrl: 'assets/Images/Learning Enviornment.png',
        heading: 'Learning Environment',
        description: 'At Leland’s we relentlessly practice continual improvement in all areas of business with employees and clients and believe in operating in a learning environment to be resourceful and share best practices.',
    },
    {
        id: 3,
        imageUrl: 'assets/Images/Own it.png',
        heading: 'Own It',
        description: 'Make the most of each day by being fully engaged and take ownership and be willing to do whatever it takes to see a task through to completion the right way.',
    },
    {
        id: 4,
        imageUrl: 'assets/Images/People Matter.png',
        heading: 'People Matter',
        description: 'We believe in providing leadership and motivation for all team members to empower them to achieve their dreams and invest in relationships with our clients and remember to always do the right thing.',
    },
    {
        id: 5,
        imageUrl: 'assets/Images/Radical Candor.png',
        heading: 'Radical Candor',
        description: 'Provide a culture of respect that fosters healthy, open and honest communication with everyone and remembers that we are a family and should always speak straight and listen generously.',
    },
];

export default function About() {
    return (
        <Box className='px-30 desktop:px-100 py-54'>
            <HeadingAndButton heading="About Us"/>
            <Typography variant='body1' component='div' className='text-left !font-medium text-black !text-2xl !mb-10 !mt-35'>
                From the owners
            </Typography>
            <Typography variant='body1' component='div' className='text-left text-black !font-normal !text-lg !mt-10'>
                “We began this company over 25 years ago and have been building high quality products from the best materials, and providing outstanding customer service. 
            </Typography>
            <Typography variant='body1' component='div' className='text-left text-black !font-normal !text-lg !mt-10'>
                We give credit to God as the leader of our company for providing wisdom and giving us a passion to serve others. The company was founded on biblical principles and it still guides us today. At Leland’s, EVERY employee gives a portion of their salary, and Leland’s happily matches, to give to Foundation 22:22, which supports Shining Light Children’s orphanage in Mexico and Cook’s Children Hospital. We have years of experience crafting exceptional products. Our love for what we do is poured into each building we make and backed by the best warranties.”
            </Typography>
            <Typography variant='body1' component='div' className='text-left text-black !font-normal !text-lg !mt-10'>
                -From the Owner, Leland Ulrich
            </Typography>
            <Box>
                <Typography variant='body1' component='div' className='text-left !font-medium text-black !text-2xl !mb-10 !mt-35'>
                    Our Core Values
                </Typography>
                <Box className='flex gap-50 !my-30 !flex-wrap'>
                    {
                        IconsList.map(({ id, imageUrl, heading, description }) =>
                        (
                            <Box key={id}>
                                <img
                                    src={imageUrl}
                                    alt='Logo'
                                    width={65}
                                    height={55}
                                    className='block drop-shadow-rentImg rounded-4 mx-auto'
                                />
                                <Typography variant='body1' component='div' className='text-center !font-medium text-black !text-lg !mt-20'>
                                    { heading }
                                </Typography>
                                <Typography variant='body1' component='div' className='text-left text-black text-sm !mt-10'>
                                    { description }
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Typography variant='body1' component='div' className='text-left !font-medium text-black !text-2xl !mb-10 !mt-35'>
                Leland’s Sheds Cares Program
            </Typography>
            <Typography variant='body1' component='div' className='text-left text-black !font-normal !text-lg !mt-10'>
                Each year we have a Leland's Care Shed Giveaway to bless someone that is in need of a shed. We are open to candidate suggestions then we as a team pray over these and follow God's leading on who to bless with a shed. We have had some rich experiences through this annual tradition and look forward to many more!Here's a few of the people that God has allowed us to meet and be inspired by listening to their stories.
            </Typography>
            <Box className='flex gap-20 my-10 !flex-wrap'>
                <img
                    src={'/assets/Images/Family 1.jpg'}
                    alt='Logo'
                    width={400}
                    height={250}
                    className='block drop-shadow-rentImg rounded-4 w-400 h-250'
                />
                <img
                    src={'/assets/Images/Family 2.jpg'}
                    alt='Logo'
                    width={400}
                    height={250}
                    className='block drop-shadow-rentImg rounded-4 w-400 h-250'
                />
            </Box>
        </Box>
    )
}
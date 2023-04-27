import React from "react";
import { Box } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";

const GalleryList = [
    {
        id: 1,
        imageUrl: 'assets/Images/Gallery/2-2.png',
    },
    {
        id: 2,
        imageUrl: 'assets/Images/Gallery/3-2.png',
    },
    {
        id: 3,
        imageUrl: 'assets/Images/Gallery/brown-garage-shed.jpg',
    },
    {
        id: 4,
        imageUrl: 'assets/Images/Gallery/cabinette-in-blue.jpg',
    },
    {
        id: 5,
        imageUrl: 'assets/Images/Gallery/cabinette-in-white.jpg',
    },
    {
        id: 6,
        imageUrl: 'assets/Images/Gallery/garden-shed.jpg',
    },
    {
        id: 7,
        imageUrl: 'assets/Images/Gallery/garden-shed-in-brown.jpg',
    },
    {
        id: 8,
        imageUrl: 'assets/Images/Gallery/garden-shed-in-red.jpg',
    },
    {
        id: 9,
        imageUrl: 'assets/Images/Gallery/grey-lofted-barn-side-entry.jpg',
    },
    {
        id: 10,
        imageUrl: 'assets/Images/Gallery/image-2.jpeg',
    },
    {
        id: 11,
        imageUrl: 'assets/Images/Gallery/lofted-barn-garage.jpg',
    },
    {
        id: 12,
        imageUrl: 'assets/Images/Gallery/lofted-barn-garages.jpg',
    },
    {
        id: 13,
        imageUrl: 'assets/Images/Gallery/playhouses.jpg',
    },
    {
        id: 14,
        imageUrl: 'assets/Images/Gallery/utility-shed-in-beige.jpg',
    },
    {
        id: 15,
        imageUrl: 'assets/Images/Gallery/utility-shed-in-white.jpg',
    },
];

export default function Gallery() {
    return (
        <Box className='px-30 depx-100 py-54'>
            <HeadingAndButton heading="Shed Gallery" />
            <Box className='flex flex-wrap gap-20 !my-30'>
                {
                    GalleryList.map(({ id, imageUrl }) =>
                    (
                        <Box key={id}>
                            <img
                                src={imageUrl}
                                alt='Logo'
                                width={400}
                                height={200}
                                className='block drop-shadow-rentImg rounded-4 w-400 h-200'
                            />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}
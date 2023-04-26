import React from "react";
import { Box, Typography } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";

const DoorPaintColors = [
    {
        id: 1,
        imageUrl: 'assets/Door-colors/Belmont-Blue.jpg',
    },
    {
        id: 2,
        imageUrl: 'assets/Door-colors/Black.jpg',
    },
    {
        id: 3,
        imageUrl: 'assets/Door-colors/Bora-Bora.jpg',
    },
    {
        id: 4,
        imageUrl: 'assets/Door-colors/Buckskin.jpg',
    },
    {
        id: 5,
        imageUrl: 'assets/Door-colors/Cape-Cod.jpg',
    },
    {
        id: 6,
        imageUrl: 'assets/Door-colors/Chestnut.jpg',
    },
    {
        id: 7,
        imageUrl: 'assets/Door-colors/White.jpg',
    },
    {
        id: 8,
        imageUrl: 'assets/Door-colors/Tan.jpg',
    },
    {
        id: 9,
        imageUrl: 'assets/Door-colors/Clay.jpg',
    },
    {
        id: 10,
        imageUrl: 'assets/Door-colors/Daisy.jpg',
    },
    {
        id: 11,
        imageUrl: 'assets/Door-colors/Dark-Brown.jpg',
    },
    {
        id: 12,
        imageUrl: 'assets/Door-colors/Dark-Gray.jpg',
    },
    {
        id: 13,
        imageUrl: 'assets/Door-colors/Shale.jpg',
    },
    {
        id: 14,
        imageUrl: 'assets/Door-colors/Reihl-Green.jpg',
    },
    {
        id: 15,
        imageUrl: 'assets/Door-colors/Leola-Almond.jpg',
    },
    {
        id: 16,
        imageUrl: 'assets/Door-colors/Light-Gray.jpg',
    },
    {
        id: 17,
        imageUrl: 'assets/Door-colors/Martin-Cream.jpg',
    },
    {
        id: 18,
        imageUrl: 'assets/Door-colors/Minuet.jpg',
    },
    {
        id: 19,
        imageUrl: 'assets/Door-colors/Mountain-Red.jpg',
    },
    {
        id: 20,
        imageUrl: 'assets/Door-colors/Red-Delicious.jpg',
    },
    {
        id: 21,
        imageUrl: 'assets/Door-colors/Navajo-White.jpg',
    },
    {
        id: 22,
        imageUrl: 'assets/Door-colors/Navy-Blue.jpg',
    },
    {
        id: 23,
        imageUrl: 'assets/Door-colors/Pequea-Green.jpg',
    },
    {
        id: 24,
        imageUrl: 'assets/Door-colors/Pinnacle-Red.jpg',
    },
];

const DoorStainColors = [
    {
        id: 1,
        imageUrl: 'assets/Door-colors/Nature-Walk-Stain.jpg',
    },
    {
        id: 2,
        imageUrl: 'assets/Door-colors/Honey-Gold-Stain.jpg',
    },
    {
        id: 3,
        imageUrl: 'assets/Door-colors/Chestnut-Stain.jpg',
    },
    {
        id: 4,
        imageUrl: 'assets/Door-colors/Driftwood-Stain.jpg',
    },
];

const MetalRoofColors = [
    {
        id: 1,
        imageUrl: 'assets/Roof-colors/Barn-Red.jpg',
    },
    {
        id: 2,
        imageUrl: 'assets/Roof-colors/Black-Metal.jpg',
    },
    {
        id: 3,
        imageUrl: 'assets/Roof-colors/Bright-Red.jpg',
    },
    {
        id: 4,
        imageUrl: 'assets/Roof-colors/Bronze-Metal.jpg',
    },
    {
        id: 5,
        imageUrl: 'assets/Roof-colors/Brown-Metal.jpg',
    },
    {
        id: 6,
        imageUrl: 'assets/Roof-colors/Burgundy-Metal.jpg',
    },
    {
        id: 7,
        imageUrl: 'assets/Roof-colors/Clay-Metal.jpg',
    },
    {
        id: 8,
        imageUrl: 'assets/Roof-colors/Copper-Metallic.jpg',
    },
    {
        id: 9,
        imageUrl: 'assets/Roof-colors/County-Charcoal.jpg',
    },
    {
        id: 10,
        imageUrl: 'assets/Roof-colors/Forest-Green.jpg',
    },
    {
        id: 11,
        imageUrl: 'assets/Roof-colors/Gallery-Blue.jpg',
    },
    {
        id: 12,
        imageUrl: 'assets/Roof-colors/Galvalume.jpg',
    },
    {
        id: 13,
        imageUrl: 'assets/Roof-colors/Hawaiian-Blue.jpg',
    },
    {
        id: 14,
        imageUrl: 'assets/Roof-colors/Ivory-Metal.jpg',
    },
    {
        id: 15,
        imageUrl: 'assets/Roof-colors/Light-Gray.jpg',
    },
    {
        id: 16,
        imageUrl: 'assets/Roof-colors/Polar-White-Metal.jpg',
    },
    {
        id: 17,
        imageUrl: 'assets/Roof-colors/Sierra-Tan.jpg',
    },
];

const ShingleRoofColors = [
    {
        id: 1,
        imageUrl: 'assets/Roof-colors/Black-shingles.jpg',
    },
    {
        id: 2,
        imageUrl: 'assets/Roof-colors/Brown-Shingles.jpg',
    },
    {
        id: 3,
        imageUrl: 'assets/Roof-colors/Gray-Shingles.jpg',
    },
    {
        id: 4,
        imageUrl: 'assets/Roof-colors/Tan-Shingles.jpg',
    },
];

const WorkshopImageList = [
    {
        id: 1,
        imageUrl: 'assets/Images/work-bench-and-pegboard.png',
    },
    {
        id: 2,
        imageUrl: 'assets/Images/corner-tool-caddy.png',
    },
    {
        id: 3,
        imageUrl: 'assets/Images/2-deep-shelves.png',
    },
];

const StandardImageList = [
    {
        id: 1,
        imageUrl: 'assets/Images/100-amp-panel.jpg',
    },
    {
        id: 2,
        imageUrl: 'assets/Images/electrical-pkg.jpg',
    },
    {
        id: 3,
        imageUrl: 'assets/Images/electrical-pkg-3.jpg',
    },
    {
        id: 4,
        imageUrl: 'assets/Images/electrical-pkg-2.jpg',
    },
];

const AdditionalImageList = [
    {
        id: 1,
        imageUrl: 'assets/Images/standard-trim-no-shutter.png',
        description: 'Standard Trim / No Shutters',
    },
    {
        id: 2,
        imageUrl: 'assets/Images/star-shutters.png',
        description: 'Star Shutters',
    },
    {
        id: 3,
        imageUrl: 'assets/Images/Z-shutters.png',
        description: 'Z Shutters',
    },
    {
        id: 4,
        imageUrl: 'assets/Images/board-and-batton.png',
        description: 'Board & Batten Siding and Trim',
    },
    {
        id: 5,
        imageUrl: 'assets/Images/Standard-siding-and-trim.png',
        description: 'Standard Siding and Trim',
    },
];

const DoorsAndWindowsImageList = [
    {
        id: 1,
        imageUrl: 'assets/Images/vinyl-9-lite-door.png',
        description: 'Vinyl 9 lite door',
    },
    {
        id: 2,
        imageUrl: 'assets/Images/Transom-Door-small.jpg',
        description: '6’x6’ or 7’x6’ Transom Door',
    },
    {
        id: 3,
        imageUrl: 'assets/Images/Double-Barn-Doors-small.jpg',
        description: '6’x6’ or 7’x6’ Double Door',
    },
    {
        id: 4,
        imageUrl: 'assets/Images/roll-up-door-temp.png',
        description: 'Roll Up Door',
    },
    {
        id: 5,
        imageUrl: 'assets/Images/2x3-non-insulated.png',
        description: '2’x3’ Non-Insulated Window',
    },
    {
        id: 6,
        imageUrl: 'assets/Images/Low-E-vinyl-window.png',
        description: '3’x4’ or 3’x5’ Low E Vinyl Window',
    },
];

const RampsImageList = [
    {
        id: 1,
        imageUrl: 'assets/Images/48-ramp.jpg',
        description: '',
    },
    {
        id: 2,
        imageUrl: 'assets/Images/48-ramp-01.jpg',
        description: '',
    },
    {
        id: 3,
        imageUrl: 'assets/Images/48-ramp-02.jpg',
        description: '',
    },
    {
        id: 4,
        imageUrl: 'assets/Images/3_4-LP-smart-floor.jpg',
        description: '3/4” LP Smart Floor',
    },
    {
        id: 5,
        imageUrl: 'assets/Images/trex-decking.jpg',
        description: 'Trex Decking',
    },
];

export default function ShedOptions() {
    return (
        <Box className='px3 depx-100 py-54'>
            <Box className="flex flex-wrap justify-between gap-60">
                <Box>
                    <HeadingAndButton heading="Shed Options & Upgrades" onlyHeading />
                    <Typography className="!font-medium text-gray !text-base">
                        Actual product color may vary from the images shown.
                    </Typography>
                </Box>
                <Box>
                    <HeadingAndButton heading="Shed Options & Upgrades" onlyButton />
                </Box>
            </Box>
            <Box className="flex gap-40 mt-50">
                <Box className='w-half'>
                    <Typography className="w-full text-left !font-medium text-black !text-2xl">
                        Siding, Trim, & Door Paint Colors*
                    </Typography>
                    <Box className='flex flex-wrap gap-10'>
                        {
                            DoorPaintColors.map(({ id, imageUrl }) =>
                            (
                                <img 
                                    key={id}    
                                    src={imageUrl}
                                    alt='Logo'
                                    width={100}
                                    height={100}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                            ))
                        }
                    </Box>
                </Box>

                <Box className='w-half'>
                    <Typography className="w-full text-left !font-medium text-black !text-2xl">
                        Metal Roof Colors
                    </Typography>
                    <Box className='flex flex-wrap gap-10'>
                        {
                            MetalRoofColors.map(({ id, imageUrl }) =>
                            (
                                <img 
                                    key={id}
                                    src={imageUrl}
                                    alt='Logo'
                                    width={100}
                                    height={100}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            <Box className="flex gap-40 mt-50">
                <Box className='w-half'>
                    <Typography className="w-full text-left !font-medium text-black !text-2xl">
                        Siding, Trim, & Door Paint Colors*
                    </Typography>
                    <Box className='flex flex-wrap gap-10'>
                        {
                            DoorStainColors.map(({ id, imageUrl }) =>
                            (
                                <img 
                                    key={id}
                                    src={imageUrl}
                                    alt='Logo'
                                    width={100}
                                    height={100}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                            ))
                        }
                    </Box>
                    <Typography className="w-full text-left !mt-10 !font-medium text-black !text-base">
                        *3rd color option available at an additional charge. Clear coat sealer for cedar posts is also available.
                    </Typography>
                </Box>

                <Box className='w-half'>
                    <Typography className="w-full text-left !font-medium text-black !text-2xl">
                        Shingle Roof Colors
                    </Typography>
                    <Box className='flex flex-wrap gap-10'>
                        {
                            ShingleRoofColors.map(({ id, imageUrl }) =>
                            (
                                <img 
                                    key={id}
                                    src={imageUrl}
                                    alt='Logo'
                                    width={100}
                                    height={100}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            <Box className="flex gap-40 mt-50">
                <Box className='w-half'>
                    <Typography className="w-full text-left !mt-10 !font-medium text-black !text-2xl">
                        Workshop Package
                    </Typography>
                    <Typography className="w-full text-left !mt-10 !font-medium text-gray-1 !text-base">
                        Includes: Full side of 2’ deep work bench with peg board over(2) 1’ deep shelves and tool caddy on opposite side
                    </Typography>
                    <Typography className="w-full text-left !mt-10 !font-medium text-black !text-2xl">
                        Storage Package
                    </Typography>
                    <Typography className="w-full text-left !mt-10 !font-medium text-gray-1 !text-base">
                        Includes: (2) 2’-deep shelves on both sides
                    </Typography>
                </Box>
                <Box className='w-half'>
                    <Box className='flex flex-wrap gap-10'>
                        {
                            WorkshopImageList.map(({ id, imageUrl }) =>
                            (
                                <img 
                                    key={id}
                                    src={imageUrl}
                                    alt='Logo'
                                    width={180}
                                    height={160}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            <Box className="flex gap-40 mt-50">
                <Box className='w-half'>
                    <Typography className="w-full text-left !mt-10 !font-medium text-black !text-2xl">
                        Standard Electrical Package
                    </Typography>
                    <Typography className="w-full text-left !mt-10 !font-medium text-gray-1 !text-base">
                        Includes: 100 amp, 14 gauge wire, 4 plugs, 2 lights, 1 switch
                    </Typography>
                    <Typography className="w-full text-left !mt-10 !font-medium text-black !text-2xl">
                        Heavy Duty Electrical Package
                    </Typography>
                    <Typography className="w-full text-left !mt-10 !font-medium text-gray-1 !text-base">
                        Includes: 200 amp, 12 gauge wire, 4 plugs, 2 lights, 1 switch (220 plug options available)
                    </Typography>
                </Box>
                <Box className='w-half'>
                    <Box className='flex flex-wrap gap-10'>
                        {
                            StandardImageList.map(({ id, imageUrl }) =>
                            (
                                <img 
                                    key={id}
                                    src={imageUrl}
                                    alt='Logo'
                                    width={135}
                                    height={135}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
            <Box className="mt-50">
                <Typography className="w-full text-left !mt-10 !font-medium text-black !text-2xl">
                    Additional Options & Upgrades
                </Typography>
                <Typography className="w-full text-left !my-10 !font-medium text-black !text-xl">
                    Shutters and Trim
                </Typography>
                <Box className='flex flex-wrap gap-70'>
                    {
                        AdditionalImageList.map(({ id, imageUrl, description }) =>
                        (
                            <Box key={id} className='max-w-190'>
                                <img                                     
                                    src={imageUrl}
                                    alt='Logo'
                                    width={190}
                                    height={190}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                                <Typography className="text-center !mt-15 !font-medium text-black !text-base">
                                    { description }
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Box className="mt-50">
                <Typography className="w-full text-left !my-10 !font-medium text-black !text-xl">
                    Doors and Windows
                </Typography>
                <Box className='flex flex-wrap gap-20'>
                    {
                        DoorsAndWindowsImageList.map(({ id, imageUrl, description }) =>
                        (
                            <Box key={id} className='max-w-190'>
                                <img                                     
                                    src={imageUrl}
                                    alt='Logo'
                                    width={190}
                                    height={190}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                                <Typography className="text-center !mt-15 !font-medium text-black !text-base">
                                    { description }
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
            <Box className="mt-50">
                <Typography className="w-full text-left !mt-10 !font-medium text-black !text-xl">
                    Ramps and Flooring
                </Typography>
                <Typography className="w-full text-left !leading-4 !mt-10 !font-medium text-black !text-base">
                    48” Heavy Duty Ramp: weight rating 1349 lbs72” 
                </Typography>
                <Typography className="w-full text-left !leading-4 !font-medium text-black !text-base">
                    Standard Ramp: weight rating 680 lbs
                </Typography>
                <Typography className="w-full text-left !leading-4 !mb-10 !font-medium text-black !text-base">
                    All barn doors and garage doors come ramp ready.
                </Typography>
                <Box className='flex flex-wrap gap-70'>
                    {
                        RampsImageList.map(({ id, imageUrl, description }) =>
                        (
                            <Box key={id} className='max-w-190'>
                                <img                                     
                                    src={imageUrl}
                                    alt='Logo'
                                    width={190}
                                    height={190}
                                    className='inline-block drop-shadow-rentImg rounded-4'
                                />
                                <Typography className="text-center !mt-15 !font-medium text-black !text-base">
                                    { description }
                                </Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
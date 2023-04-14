import React from "react";
import Sidebar from "../../Sidebar";
import { Box } from "@mui/material";
import LayoutHeader from "../../LayoutHeader";
import FooterMenu from "../../FooterMenu";
import Footer from "../../Footer";
import CardContainer from "../../CardContainer";
import CardContainerSimilars from "../../CardContainer";
import CardExtended from "../../CardExtended";
import DesignWigdet from "../../DesignWidget";
import Reviews from "../../Reviews";
import SectionBars from "../../SectionBars";
import BackToProducts from "../../BackToProducts";

const DefenderShedItems = [
    {
        imageUrl: 'assets/Images/Chalet Shed.jpg',
        title: 'Chalet Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841',
        subImages: [
            { imageUrl: 'assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        imageUrl: 'assets/Images/Cabinette Shed.jpg',
        title: 'Cabinette Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Garden Shed.jpg',
        title: 'Garden Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Cottage Shed.jpg',
        title: 'Cottage Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Lofted Barn Shed.jpg',
        title: 'Lofted Barn Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Garage Shed.jpg',
        title: 'Garage Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Utility Shed.jpg',
        title: 'Utility Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Studio Shed.jpg',
        title: 'Studio Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Lofted Barn Shed Side Entry.jpg',
        title: 'Lofted Barn Shed Side Entry',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
]

const DiamondShedItems = [
    {
        imageUrl: 'assets/Images/Diamond Chalet Shed.jpg',
        title: 'Diamond Chalet Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Cabinette Shed.jpg',
        title: 'Diamond Cabinette Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
]

const ValueShedItems = [
    {
        imageUrl: 'assets/Images/Basic Shed.jpg',
        title: 'Basic Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Metal Shed.jpg',
        title: 'Metal Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
]

const BackyardShedItems = [
    {
        imageUrl: 'assets/Images/Hideout Playhouse.jpg',
        title: 'Hideout Playhouse',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
    {
        imageUrl: 'assets/Images/Victorian Playhouse.jpg',
        title: 'Victorian Playhouse',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841'
    },
]

const ReviewItems = [
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
];

const SectionBarItems = [
    "Protection",
    // "Recreational  Space",
    "Work Space",
    "Storage Space",
];

export default function DefaultLayout({  }) {
    return (
        <Box className='flex'>
            <Sidebar />
            <Box className='grow flex flex-col justify-between'>
                <LayoutHeader />
                <CardExtended 
                    imageUrl={DefenderShedItems[0].imageUrl}
                    title={DefenderShedItems[0].title}
                    subImages={DefenderShedItems[0].subImages}
                />
                <DesignWigdet />
                <Reviews items={ReviewItems} />
                <SectionBars items={SectionBarItems} />
                {/* <CardContainerSimilars 
                    heading="Defender Series Sheds" 
                    items={DefenderShedItems} 
                    sectionBars={SectionBarItems} 
                /> */}
                <BackToProducts />
                {/* <CardContainer heading="Defender Series Sheds" items={DefenderShedItems} />
                <CardContainer heading="Diamond Series Sheds" items={DiamondShedItems} />
                <CardContainer heading="Value Series Sheds" items={ValueShedItems} />
                <CardContainer heading="Backyard Series Sheds" items={BackyardShedItems} /> */}
                <Box className='grow flex flex-col justify-end'>
                    <FooterMenu />
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
}
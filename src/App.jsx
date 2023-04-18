import React from 'react';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

export const MenuList = {
    gallery: '/gallery',
    defenderSheds: 'Defender Series sheds',
    defenderShedsUrl: '/defender',
    diamondSheds: 'Diamond Series sheds',
    diamondShedsUrl: '/diamond',
    valueSheds: 'Value Series sheds',
    valueShedsUrl: '/value',
    backyardSheds: 'Backyard Series sheds',
    backyardShedsUrl: '/backyard',
    faq: '/faq',
    rent: '/rent',
    warranty: '/warranty',
    delivery: '/delivery',
    privacy: '/privacy',
}

export const DefenderShedItems = [
    {
        id: 1,
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
        id: 2,
        imageUrl: 'assets/Images/Cabinette Shed.jpg',
        title: 'Cabinette Shed',
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
        id: 3,
        imageUrl: 'assets/Images/Garden Shed.jpg',
        title: 'Garden Shed',
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
        id: 4,
        imageUrl: 'assets/Images/Cottage Shed.jpg',
        title: 'Cottage Shed',
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
        id: 5,
        imageUrl: 'assets/Images/Lofted Barn Shed.jpg',
        title: 'Lofted Barn Shed',
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
        id: 6,
        imageUrl: 'assets/Images/Garage Shed.jpg',
        title: 'Garage Shed',
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
        id: 7,
        imageUrl: 'assets/Images/Utility Shed.jpg',
        title: 'Utility Shed',
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
        id: 8,
        imageUrl: 'assets/Images/Studio Shed.jpg',
        title: 'Studio Shed',
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
        id: 9,
        imageUrl: 'assets/Images/Lofted Barn Shed Side Entry.jpg',
        title: 'Lofted Barn Shed Side Entry',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841',
        subImages: [
            { imageUrl: 'assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 4.jpg' },
        ]
    },
]

export const DiamondShedItems = [
    {
        id: 1,
        imageUrl: 'assets/Images/Diamond Chalet Shed.jpg',
        title: 'Diamond Chalet Shed',
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
        id: 2,
        imageUrl: 'assets/Images/Cabinette Shed.jpg',
        title: 'Diamond Cabinette Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841',
        subImages: [
            { imageUrl: 'assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 4.jpg' },
        ]
    },
]

export const ValueShedItems = [
    {
        id: 1,
        imageUrl: 'assets/Images/Basic Shed.jpg',
        title: 'Basic Shed',
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
        id: 2,
        imageUrl: 'assets/Images/Metal Shed.jpg',
        title: 'Metal Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841',
        subImages: [
            { imageUrl: 'assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 4.jpg' },
        ]
    },
]

export const BackyardShedItems = [
    {
        id: 1,
        imageUrl: 'assets/Images/Hideout Playhouse.jpg',
        title: 'Hideout Playhouse',
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
        id: 2,
        imageUrl: 'assets/Images/Victorian Playhouse.jpg',
        title: 'Victorian Playhouse',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: '6,841',
        subImages: [
            { imageUrl: 'assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: 'assets/Images/Chalet Shed 4.jpg' },
        ]
    },
]

export const ReviewItems = [
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
];

export const SectionBarItems = [
    "Protection",
    "Work Space",
    "Storage Space",
];

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App

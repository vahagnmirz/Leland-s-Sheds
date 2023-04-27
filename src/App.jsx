import React, { useState, createContext } from 'react';
import Main from './pages/Main';
import { BrowserRouter } from 'react-router-dom';

export const MenuList = {
    defenderSheds: 'Defender Series sheds',
    defenderShedsUrl: '/defender',
    diamondSheds: 'Diamond Series sheds',
    diamondShedsUrl: '/diamond',
    valueSheds: 'Value Series sheds',
    valueShedsUrl: '/value',
    backyardSheds: 'Backyard Series sheds',
    backyardShedsUrl: '/backyard',
    contact: '/contact',
    about: '/about',
    gallery: '/gallery',
    serviceRequest: '/service-request',
    shedOptions: '/shed-options',
    shedDesigner: '/shed-designer',
    shedDesigner3d: '/shed-designer-3d',
    faq: '/faq',
    rent: '/rent',
    warranty: '/warranty',
    delivery: '/delivery',
    privacy: '/privacy',
}

export const CategoriesTags = {
    protection: "Protection",
    workSpace: "Work Space",
    liveSpace: "Living Space",
    storageSpace: "Storage Space",
    recreationalSpace: "Recreational Space",
}

export const DefenderShedItems = [
    {
        id: 1,
        categories: [CategoriesTags.liveSpace, CategoriesTags.workSpace, CategoriesTags.storageSpace],
        imageUrl: '/assets/Images/Chalet Shed.jpg',
        title: 'Chalet Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 6841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 2,
        categories: [CategoriesTags.workSpace, CategoriesTags.liveSpace, CategoriesTags.recreationalSpace],
        imageUrl: '/assets/Images/Cabinette Shed.jpg',
        title: 'Cabinette Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 7841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 3,
        categories: [CategoriesTags.recreationalSpace, CategoriesTags.protection, CategoriesTags.storageSpace],
        imageUrl: '/assets/Images/Garden Shed.jpg',
        title: 'Garden Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 8841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 4,
        categories: [CategoriesTags.workSpace, CategoriesTags.protection, CategoriesTags.storageSpace],
        imageUrl: '/assets/Images/Cottage Shed.jpg',
        title: 'Cottage Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 9841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 5,
        categories: [CategoriesTags.workSpace, CategoriesTags.storageSpace, CategoriesTags.recreationalSpace],
        imageUrl: '/assets/Images/Lofted Barn Shed.jpg',
        title: 'Lofted Barn Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 5841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 6,
        categories: [CategoriesTags.liveSpace, CategoriesTags.storageSpace, CategoriesTags.recreationalSpace],
        imageUrl: '/assets/Images/Garage Shed.jpg',
        title: 'Garage Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 4841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 7,
        categories: [CategoriesTags.liveSpace, CategoriesTags.storageSpace, CategoriesTags.workSpace],
        imageUrl: '/assets/Images/Utility Shed.jpg',
        title: 'Utility Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 10841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 8,
        categories: [CategoriesTags.liveSpace, CategoriesTags.protection, CategoriesTags.recreationalSpace],
        imageUrl: '/assets/Images/Studio Shed.jpg',
        title: 'Studio Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 6841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 9,
        categories: [CategoriesTags.storageSpace, CategoriesTags.protection, CategoriesTags.workSpace],
        imageUrl: '/assets/Images/Lofted Barn Shed Side Entry.jpg',
        title: 'Lofted Barn Shed Side Entry',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 7841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
]

export const DiamondShedItems = [
    {
        id: 1,
        categories: [CategoriesTags.protection, CategoriesTags.workSpace, CategoriesTags.recreationalSpace],
        imageUrl: '/assets/Images/Diamond Chalet Shed.jpg',
        title: 'Diamond Chalet Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 7841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 2,
        categories: [CategoriesTags.liveSpace, CategoriesTags.workSpace, CategoriesTags.storageSpace],
        imageUrl: '/assets/Images/Cabinette Shed.jpg',
        title: 'Diamond Cabinette Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 8841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
]

export const ValueShedItems = [
    {
        id: 1,
        categories: [CategoriesTags.liveSpace, CategoriesTags.protection, CategoriesTags.storageSpace],
        imageUrl: '/assets/Images/Basic Shed.jpg',
        title: 'Basic Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 11841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 2,
        categories: [CategoriesTags.liveSpace, CategoriesTags.workSpace, CategoriesTags.recreationalSpace],
        imageUrl: '/assets/Images/Metal Shed.jpg',
        title: 'Metal Shed',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 12841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
]

export const BackyardShedItems = [
    {
        id: 1,
        categories: [CategoriesTags.storageSpace, CategoriesTags.liveSpace, CategoriesTags.workSpace],
        imageUrl: '/assets/Images/Hideout Playhouse.jpg',
        title: 'Hideout Playhouse',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 3841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
    {
        id: 2,
        categories: [CategoriesTags.liveSpace, CategoriesTags.protection, CategoriesTags.workSpace],
        imageUrl: '/assets/Images/Victorian Playhouse.jpg',
        title: 'Victorian Playhouse',
        description: 'Our newest design features a modern contemporary style and feel.',
        price: 5841,
        subImages: [
            { imageUrl: '/assets/Images/Chalet Shed 1.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 2.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 3.jpg' },
            { imageUrl: '/assets/Images/Chalet Shed 4.jpg' },
        ]
    },
]

export const ReviewItems = [
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
    "They were very professional where we came in looking for a building for our storage. Upon delivery the driver was very knowledgeable place in the shed in the quick location and leveling it and squaring away awesome job.",
];

export const PriceContext = createContext(null);
export const CategoriesContext = createContext(null);

const InitialPrice = 6500;
const InitialCategory = '';

function App() {
    const [price, setPrice] = useState(InitialPrice);
    const [category, setCategory] = useState(InitialCategory);

    return (
        <React.StrictMode>
            <BrowserRouter>
                <PriceContext.Provider value={{
                    price,
                    priceChangeHandler: (newValue) => setPrice(newValue),
                    priceResetHandler: () => setPrice(InitialPrice)
                }}>
                    <CategoriesContext.Provider value={{
                        category,
                        categoryChangeHandler: (newValue) => setCategory(newValue),
                        categoryResetHandler: () => setCategory(InitialCategory)
                    }}>
                        <Main />
                    </CategoriesContext.Provider>
                </PriceContext.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App

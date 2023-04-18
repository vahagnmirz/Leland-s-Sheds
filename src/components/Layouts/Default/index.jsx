import React from "react";
import Sidebar from "../../Sidebar";
import { Box } from "@mui/material";
import LayoutHeader from "../../LayoutHeader";
import FooterMenu from "../../FooterMenu";
import Footer from "../../Footer";
import ShedsLayout from "../Sheds";
import { MenuList } from "../../../App";
import { Navigate, Route, Routes } from "react-router-dom";
import CardDescription from "../CardDescription";
import LalandShedsDeliveryStatic from "../../../pages/LalandShedsDeliveryStatic";
import PrivacyPolicyStatic from "../../../pages/PrivacyPolicyStatic";
import LalandShedsWarrantyStatic from "../../../pages/LalandShedsWarrantyStatic"
import FAQ from "../../../pages/FAQ";
import RentToOwn from "../../../pages/RentToOwn";

export default function DefaultLayout({  }) {
    return (
        <>
            <Box className='flex min-h-layout'>
                <Sidebar />
                <Box className='grow flex flex-col justify-between'>
                    <LayoutHeader />

                    <Routes>
                        <Route
                            exact
                            path={MenuList.gallery} 
                            element={ <ShedsLayout isGallery /> } 
                        />
                        <Route
                            exact
                            path={MenuList.defenderShedsUrl} 
                            element={ <ShedsLayout heading={MenuList.defenderSheds} /> } 
                        />
                        <Route path={MenuList.defenderShedsUrl + '/' + ':id'} element={ <CardDescription /> } />
                        <Route 
                            exact 
                            path={MenuList.diamondShedsUrl} 
                            element={ <ShedsLayout heading={MenuList.diamondSheds} /> } 
                        />
                        <Route path={MenuList.diamondShedsUrl + '/' + ':_id'} element={ <CardDescription /> } />
                        <Route 
                            exact 
                            path={MenuList.valueShedsUrl} 
                            element={ <ShedsLayout heading={MenuList.valueSheds} /> } 
                        />
                        <Route path={MenuList.valueShedsUrl + '/' + ':_id'} element={ <CardDescription /> } />
                        <Route 
                            exact 
                            path={MenuList.backyardShedsUrl} 
                            element={ <ShedsLayout heading={MenuList.backyardSheds} /> } 
                        />
                        <Route path={MenuList.backyardShedsUrl + '/' + ':_id'} element={ <CardDescription /> } />
                        <Route exact path={MenuList.faq} element={ <FAQ /> } />
                        <Route exact path={MenuList.rent} element={ <RentToOwn /> } />
                        <Route exact path={MenuList.warranty} element={ <LalandShedsWarrantyStatic /> } />
                        <Route exact path={MenuList.delivery} element={ <LalandShedsDeliveryStatic /> } />
                        <Route exact path={MenuList.privacy} element={ <PrivacyPolicyStatic /> } />

                        <Route path="*" element={ <Navigate to={MenuList.defenderShedsUrl} /> } />
                    </Routes>

                    <Box className='grow flex flex-col justify-end'>
                        <FooterMenu />
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
} 
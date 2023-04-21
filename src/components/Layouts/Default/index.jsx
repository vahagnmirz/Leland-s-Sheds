import React from "react";
import Sidebar from "../../Sidebar";
import { Box } from "@mui/material";
import LayoutHeader from "../../LayoutHeader";
import FooterMenu from "../../FooterMenu";
import Footer from "../../Footer";
import ShedsLayout from "../Sheds";
import { DefenderShedItems, DiamondShedItems, ValueShedItems, BackyardShedItems, MenuList } from "../../../App";
import { Navigate, Route, Routes } from "react-router-dom";
import CardDescription from "../CardDescription";
import LalandShedsDeliveryStatic from "../../../pages/LalandShedsDeliveryStatic";
import PrivacyPolicyStatic from "../../../pages/PrivacyPolicyStatic";
import LalandShedsWarrantyStatic from "../../../pages/LalandShedsWarrantyStatic"
import FAQ from "../../../pages/FAQ";
import RentToOwn from "../../../pages/RentToOwn";
import ShedOptions from "../../../pages/ShedOptions";
import Gallery from "../../../pages/Gallery";
import About from "../../../pages/About";
import ServiceRequest from "../../../pages/ServiceRequest";
import Contact from "../../../pages/Contact";
import ShedDesigner from "../../../pages/ShedDesigner";
import ShedDesigner3D from "../../../pages/ShedDesigner3D";

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
                            path={MenuList.defenderShedsUrl} 
                            element={ <ShedsLayout heading={MenuList.defenderSheds} /> } 
                        />
                        <Route 
                            path={MenuList.defenderShedsUrl + '/' + ':_id'} 
                            element={ 
                                <CardDescription 
                                    heading={MenuList.defenderSheds}
                                    headingUrl={MenuList.defenderShedsUrl}
                                    items={DefenderShedItems} 
                                /> 
                            } 
                        />
                        <Route 
                            exact 
                            path={MenuList.diamondShedsUrl} 
                            element={ <ShedsLayout heading={MenuList.diamondSheds} /> } 
                        />
                        <Route 
                            path={MenuList.diamondShedsUrl + '/' + ':_id'} 
                            element={ 
                                <CardDescription 
                                    heading={MenuList.diamondSheds}
                                    headingUrl={MenuList.diamondShedsUrl}
                                    items={DiamondShedItems} 
                                /> 
                            } 
                        />
                        <Route 
                            exact 
                            path={MenuList.valueShedsUrl} 
                            element={ <ShedsLayout heading={MenuList.valueSheds} /> } 
                        />
                        <Route 
                            path={MenuList.valueShedsUrl + '/' + ':_id'} 
                            element={ 
                                <CardDescription 
                                    heading={MenuList.valueSheds}
                                    headingUrl={MenuList.valueShedsUrl}
                                    items={ValueShedItems} 
                                /> 
                            } 
                        />
                        <Route 
                            exact 
                            path={MenuList.backyardShedsUrl} 
                            element={ <ShedsLayout heading={MenuList.backyardSheds} /> } 
                        />
                        <Route 
                            path={MenuList.backyardShedsUrl + '/' + ':_id'} 
                            element={ 
                                <CardDescription 
                                    heading={MenuList.backyardSheds}
                                    headingUrl={MenuList.backyardShedsUrl}
                                    items={BackyardShedItems} 
                                /> 
                            } 
                        />
                        
                        <Route exact path={MenuList.shedDesigner3d} element={ <ShedDesigner3D /> } />
                        <Route exact path={MenuList.shedDesigner} element={ <ShedDesigner /> } />
                        <Route exact path={MenuList.contact} element={ <Contact /> } />
                        <Route exact path={MenuList.serviceRequest} element={ <ServiceRequest /> } />
                        <Route exact path={MenuList.about} element={ <About /> } />
                        <Route exact path={MenuList.gallery} element={ <Gallery /> } />
                        <Route exact path={MenuList.shedOptions} element={ <ShedOptions /> } />
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
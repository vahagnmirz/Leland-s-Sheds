import React from "react";
import { Box } from "@mui/material";
import HeadingAndButton from "../../components/HeadingAndButton";
import BaseText from "../../components/BaseText"

export default function LalandShedsWarrantyStatic() {
    return (
        <>
            <Box className="justify-between px-20 desktop:px-100 py-50">
                <HeadingAndButton heading="Leland's Sheds Warranty" />
                <Box className='mb-30 mt-40'>
                    <BaseText text="Valid on all items in Defender Series (10 year), Value Series (3 year), Outdoor Living Series (5 year). This warranty does not cover finished out cabins." />
                </Box>
                <Box className='mb-30'>
                    <BaseText text="All service orders are subject to a $50 service fee paid at the time of scheduling service order. Leland’s Industries, LLC warrants to the original purchaser that your Leland’s Industries, LLC product is free from defects in material or workmanship upon delivery, and will repair or replace any components that do not provide reasonable service under normal use, for a period of ten (10) years for Defender Series, five (5) years for Outdoor Living Series, and three (3) years for Value Series, from the date of purchase." />
                </Box>
                <BaseText text="Correction by repair or replacement of materials or workmanship in your Leland’s Industries LLC product, which our examination shall disclose to our satisfaction to be defective, shall constitute fulfillment of all liabilities of Leland’s Industries LLC under this warranty. Leland’s Industries LLC shall not be liable for any installation or re-installation costs or for the natural characteristic of some wood to split, warp, or twist. This warranty shall not apply to any Leland's Industries LLC product or any part thereof which has been damaged by fire, flood, water, earthquake, earth movement, hail, wind, adverse weather conditions, vandalism, theft, act of God, accident or other event, or a casualty which is customarily covered by homeowners’ insurance. The warranty does not cover damage caused by abuse, misuse, alteration, neglect, or improper maintenance. This warranty does not cover blocking, settling, or issues arising from settling." />
            </Box>
        </>
    )
}
import React from "react";
import CardContainerSimilars from "../../CardContainer";
import CardExtended from "../../CardExtended";
import DesignWigdet from "../../DesignWidget";
import Reviews from "../../Reviews";
import SectionBars from "../../SectionBars";
import BackToProducts from "../../BackToProducts";
import { BackyardShedItems, DefenderShedItems, ReviewItems, SectionBarItems } from "../../../App";
import { MenuList } from "../../../App";

export default function CardDescription({  }) {
    return (
        <>
            <CardExtended
                imageUrl={DefenderShedItems[0].imageUrl}
                title={DefenderShedItems[0].title}
                subImages={DefenderShedItems[0].subImages}
            />
            <DesignWigdet />
            <Reviews items={ReviewItems} />
            <SectionBars items={SectionBarItems} />
            <CardContainerSimilars 
                isRedHeading
                heading={MenuList.defenderSheds}
                items={BackyardShedItems} 
                sectionBars={SectionBarItems} 
            />
            <BackToProducts />
        </>
    )
}
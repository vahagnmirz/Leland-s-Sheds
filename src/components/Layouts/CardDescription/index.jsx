import React from "react";
import CardContainerSimilars from "../../CardContainer";
import CardExtended from "../../CardExtended";
import DesignWigdet from "../../DesignWidget";
import Reviews from "../../Reviews";
import SectionBars from "../../SectionBars";
import BackToProducts from "../../BackToProducts";
import { BackyardShedItems, ReviewItems } from "../../../App";
import { MenuList } from "../../../App";
import { useParams } from "react-router-dom";

export default function CardDescription({ items, heading, headingUrl }) {
    const { _id } = useParams();
    const elem = items.find(each => each.id==_id);

    return (
        <>
            <CardExtended
                breadcrumbHeading={heading}
                breadcrumbHeadingUrl={headingUrl}
                imageUrl={elem?.imageUrl}
                title={elem?.title}
                subImages={elem?.subImages}
            />
            <DesignWigdet />
            <Reviews items={ReviewItems} />
            <SectionBars items={elem.categories} />
            <CardContainerSimilars 
                isRedHeading
                isSimilar
                heading={MenuList.defenderSheds}
                items={BackyardShedItems} 
                sectionBars={elem.categories}
            />
            <BackToProducts />
        </>
    )
}
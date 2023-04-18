import React from "react"; 
import CardContainer from "../../CardContainer"; 
import { MenuList } from "../../../App";
import { 
    DefenderShedItems, 
    DiamondShedItems, 
    ValueShedItems, 
    BackyardShedItems,
} from "../../../App";

export default function ShedsLayout({ isGallery, heading = MenuList.defenderSheds }) {
    if (isGallery) return (
        <>
            <CardContainer heading={MenuList.defenderSheds} items={DefenderShedItems} isPriceVisible />
            <CardContainer heading={MenuList.diamondSheds} items={DiamondShedItems} isPriceVisible />
            <CardContainer heading={MenuList.valueSheds} items={ValueShedItems} isPriceVisible />
            <CardContainer heading={MenuList.backyardSheds} items={BackyardShedItems} isPriceVisible />
        </>
    )

    const items = (heading === MenuList.defenderSheds) ?
        DefenderShedItems :
        (heading === MenuList.diamondSheds) ?
        DiamondShedItems :
        (heading === MenuList.valueSheds) ?
        ValueShedItems :
        BackyardShedItems;

    return (
        <CardContainer heading={heading} items={items} isPriceVisible />
    )
}
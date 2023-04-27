import React, { useContext } from "react";
import { CategoriesContext, PriceContext } from "../../App";
import { Button } from "@mui/material";

export default function ResetFiltersButton() {
    const { categoryResetHandler } = useContext(CategoriesContext);
    const { priceResetHandler } = useContext(PriceContext);
    
    const resetClickHandler = () => {
        categoryResetHandler();
        priceResetHandler();
    }

    return (
        <Button className="!text-black float-right cursor-pointer" onClick={resetClickHandler}>Reset filters</Button>
    )
}
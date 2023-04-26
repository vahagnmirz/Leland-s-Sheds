import React, { useContext } from "react";
import { Box, Slider, Tooltip, Typography } from "@mui/material";
import { PriceContext } from "../../App";

export default function SidebarSlider() {
    const { price, priceChangeHandler } = useContext(PriceContext);

    const changeHandler = (evt, newValue) => priceChangeHandler(newValue);

    const ValueLabelComponent = ({ children, value }) => (
        <Tooltip 
            arrow
            enterTouchDelay={0}
            placement="top" 
            title={"$" + value} 
            classes={{
                tooltip: '!bg-tooltip !text-black !mb-10 !px-15',
                arrow: '!text-tooltip',
            }}
        >
            { children }
        </Tooltip>
    );

    return (
        <Box>
            <Typography variant='body1' component='div' className='!mb-30 !font-medium !text-base cursor-pointer'>
                Starting Price
            </Typography>
            <Slider
                size="small"
                value={price}
                min={1000}
                onChange={changeHandler}
                max={13000}
                step={100}
                aria-label="Small"
                valueLabelDisplay="auto"
                slots={{
                    valueLabel: ValueLabelComponent,
                }}
                sx={{
                    color: 'red',
                    '& .MuiSlider-thumb': {
                        display: 'inline-block',
                        borderRadius: 0,
                        transform: 'rotate(45deg) translateX(-10px)'
                    },
                }}
            />
        </Box>
    )
}
import React, { useContext } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { CategoriesContext, CategoriesTags } from "../../App";

export default function SidebarRadios() {
    const { category, categoryChangeHandler } = useContext(CategoriesContext);

    const handleChange = (evt) => categoryChangeHandler(evt.target.value);

    return (
        <Box>
            <Typography variant='body1' component='div' className='!mt-30 !mb-10 !font-medium !text-base cursor-pointer'>
                Filter by Needs
            </Typography>
            <FormControl
                sx={{
                    "&": {
                    color: 'red !important',
                    fontSize: '10px !important',
                    }  
                }}
                className="!text-xs">
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={category}
                    onChange={handleChange}
                >
                    <FormControlLabel 
                        value={CategoriesTags.protection}
                        control={
                            <Radio classes={{ root: '!py-3', checked: '!text-sidebarList' }} />
                        } 
                        label="Protection from weather" 
                        classes={{label: '!text-sm !font-medium text-sidebarList'}}
                    />
                    <FormControlLabel 
                        value={CategoriesTags.storageSpace}
                        control={
                            <Radio classes={{ root: '!py-3', checked: '!text-sidebarList' }} />
                        } 
                        label="Items safely stored" 
                        classes={{label: '!text-sm !font-medium text-sidebarList'}}
                    />
                    <FormControlLabel 
                        value={CategoriesTags.liveSpace}
                        control={
                            <Radio classes={{ root: '!py-3', checked: '!text-sidebarList' }} />
                        } 
                        label="Living Spaces" 
                        classes={{label: '!text-sm !font-medium text-sidebarList'}}
                    />
                    <FormControlLabel 
                        value={CategoriesTags.workSpace}
                        control={
                            <Radio classes={{ root: '!py-3', checked: '!text-sidebarList' }} />
                        } 
                        label="Space to Work In" 
                        classes={{label: '!text-sm !font-medium text-sidebarList'}}
                    />
                    <FormControlLabel 
                        value={CategoriesTags.recreationalSpace}
                        control={
                            <Radio classes={{ root: '!py-3', checked: '!text-sidebarList' }} />
                        } 
                        label="Space for recreation" 
                        classes={{label: '!text-sm !font-medium text-sidebarList'}}
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}
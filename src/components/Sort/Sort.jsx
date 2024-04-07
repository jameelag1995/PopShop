import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Sort({ categories, setData, data }) {
    const [category, setCategory] = useState("");

    const handleChange = (event) => {
       
        setData(data.filter((item) => item.category === event.target.value));
    };
    return (
        <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">
                Sort By Category
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="All Categories"
                onChange={handleChange}
            >
                {categories.map((categ, index) => (
                    <MenuItem key={index} value={categ}>
                        {categ}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

import React from 'react';
import { IconButton, Paper, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "../assets/Searchbar.css";

const Searchbar = () => {
    return (
        <div className="searchbar-box">
            <Paper component="form" className="searchbar">
                <InputBase
                    className="searchbar-input"
                    placeholder="Search Here"
                    inputProps={{ 'aria-label': '' }}
                />
                <IconButton type="button" className="searchbar-icon" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
}

export default Searchbar;

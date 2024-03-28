import React from 'react';
import { IconButton, Paper, InputBase, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ isVisible, navbarHeight }) => {
    return (
        <div style={{ display: isVisible ? 'flex' : 'none', justifyContent: 'center', position: 'absolute', top: navbarHeight, left: 0, right: 0, background: '#000000', backdropFilter: "blur(1.125rem)", }}>
            <Paper
                component="form"
                sx={{
                    p: '.125rem .25rem',
                    display: 'flex',
                    alignItems: 'center',
                    width: "100%",
                    height: "2.5rem",
                    background: 'transparent',
                    boxShadow: '.125rem .25rem .625rem #00000023',
                    border: '.125rem double #F5F5F5',
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1, color: '#ffffff' }}
                    placeholder="Search Here"
                    inputProps={{ 'aria-label': '' }}
                />
                <IconButton type="button" sx={{ p: '.625rem', color: '#F5F5F5' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

const SearchbarL = () => {
    return (
        <div>
            <Paper
                component="form"
                sx={{
                    p: '.125rem .25rem',
                    display: 'flex',
                    alignItems: 'center',
                    width: { sm: '22rem', md: "20.75rem", lg: "28.125rem" },
                    height: { sm: '2.5rem', md: "3rem" },
                    background: 'transparent',
                    boxShadow: '.125rem .25rem .625rem #00000023',
                    border: '.125rem double #F5F5F5',
                    borderRadius: '1.25rem',
                }}
            >
                <IconButton type="button" sx={{ p: '.625rem', color: '#F5F5F5' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, color: '#ffffff' }}
                    placeholder="Search Here"
                    inputProps={{ 'aria-label': '' }}
                />
            </Paper>
        </div>
    )
}


export { Searchbar, SearchbarL }
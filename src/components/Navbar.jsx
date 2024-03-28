import React, { useState, useEffect, useRef } from 'react';
import Logo from "/logo.svg";
import { Stack, Box, IconButton, Link as MuiLink, Paper, InputBase, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Menu from './Menu';
import { Searchbar, SearchbarL } from './Searchbar';

const Navbar = () => {

    //for responsive navbar
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 991);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 991);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    //for navbar animation while scroll
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    //for navbar height to be passed as props
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef(null);

    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.clientHeight);
        }
    }, [navbarRef]);


    //searchicon functionality for mobile
    const [searchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    //for navbar height
    const height = window.innerWidth < 600 ? '4rem' : '6.25rem';

    //menu bar elements
    const LinkItems = [
        { text: "Home", href: "/" },
        { text: "What We Do", href: "/" },
        { text: "Contact Us", href: "/", isContact: true },
    ];
    return (
        <div
            ref={navbarRef}
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: "blur(1.125rem)",
                backgroundColor: isScrolled ? '#00000077' : 'transparent',
                transition: 'background-color 0.3s ease , position .2s ease-in-out',
                zIndex: '1000',
                position: isScrolled ? 'fixed' : 'relative',
                top: '0',
                height: { xs: '1rem', md: '1.5rem' },
            }}>
            <Box
                sx={{
                    width: { xs: "90%", sm: '92%', md: '85%', lg: "80%" },
                    padding: { xs: ".375rem .375rem", sm: '.625rem 0rem' },
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <img style={{ width: "6.25rem", height: height }} src={Logo} alt='Company logo' />
                </Stack>
                <Stack
                    sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: { xs: '.5rem', sm: '1.5rem' }
                    }}>
                    <Stack>
                        <Stack sx={{ display: { xs: "flex", sm: 'none' }, flexDirection: 'column', alignItems: 'end' }}>
                            <IconButton onClick={toggleSearch} sx={{ fontSize: "2rem", color: 'whitesmoke' }}>
                                <SearchIcon />
                            </IconButton>
                            <Searchbar isVisible={searchVisible} navbarHeight={`${navbarHeight}px`} />
                        </Stack>
                        <Stack sx={{ display: { xs: "none", sm: 'flex' } }}>
                            <SearchbarL />
                        </Stack>
                    </Stack>
                    <Stack>
                        {isSmallScreen ? (<Menu navbarHeight={navbarHeight} />) : (
                            <Stack
                                gap={4}
                                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                            >
                                {LinkItems.map((item, index) => (
                                    <MuiLink
                                        key={index}
                                        href={item.href}
                                        sx={{
                                            cursor: 'pointer',
                                            color: '#F5F5F5',
                                            border: item.isContact ? ".125rem solid #00FFFF" : "none",
                                            borderRadius: '1.5rem',
                                            padding: item.isContact ? '.375rem 1.875rem' : "none",
                                            fontWeight: item.isContact ? "bolder" : "500",
                                            boxShadow: item.isContact ? '0 .125rem 1rem .25rem #00FFFF, inset 0 0 .75rem .125rem #00FFFF' : "none",
                                            fontSize: '1.125rem',
                                        }}
                                    >
                                        {item.text}
                                    </MuiLink>
                                ))}
                            </Stack>)}
                    </Stack>
                </Stack >
            </Box >
        </div>
    )
}

export default Navbar
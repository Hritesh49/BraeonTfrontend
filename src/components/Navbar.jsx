import React, { useState, useEffect, useRef } from 'react';
import { IconButton, Drawer } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import NotesIcon from '@mui/icons-material/Notes';
import Searchbar from './Searchbar';
import "../assets/Navbar.css";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY >= 150);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const LinkItems = [
        { text: "What We Do", href: "/" },
        { text: "Who We Are", href: "/" },
        { text: "Industries", href: "/" },
        { text: "Resources", href: "/" },
        { text: "Contact Us", href: "/", isContact: true },
    ];

    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''} ${show ? 'active' : 'hidden'}`}>
            <div className="navbar-wrapper">
                <div className="navbar-box">
                    <div className="navbar-logo">
                        <img src="/logo.svg" alt='Company logo' className="navbar-logo-img" />
                    </div>
                    <div className='navbar-right'>
                        <div className="navbar-content">
                            <div style={{ position: "relative" }}>
                                <div className="search-all">
                                    <IconButton onClick={() => setShowSearchBar(!showSearchBar)} className="navbar-icon">
                                        <SearchIcon className="navbar-icon" />
                                    </IconButton>
                                </div>
                            </div>
                            <div className="links-desktop">
                                {LinkItems.map((item, index) => (
                                    <a key={index} href={item.href} className={`navbar-link ${item.isContact ? 'contact-link' : ''}`}>
                                        {item.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <IconButton className="menu-icon" onClick={() => setDrawerOpen(true)}>
                            <NotesIcon className='navbar-icon' />
                        </IconButton>
                    </div>
                </div>
                <div className={`searchbar-container ${showSearchBar ? 'show' : ''}`}>
                    <Searchbar />
                </div>
            </div>
            <Drawer anchor="bottom" open={drawerOpen} onClose={() => setDrawerOpen(false)} className="navbar-drawer">
                <div className="drawer-header">
                    <IconButton onClick={() => setDrawerOpen(false)}>
                        <CloseIcon className='navbar-icon' />
                    </IconButton>
                </div>
                <div className="drawer-content">
                    {LinkItems.map((item, index) => (
                        <a key={index} href={item.href} className={`navbar-link ${item.isContact ? 'contact-link' : ''}`}>
                            {item.text}
                        </a>
                    ))}
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;

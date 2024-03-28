import React, { useState } from 'react';
import { Stack, Box, IconButton, Link as MuiLink, keyframes } from "@mui/material";
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({ navbarHeight }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    const LinkItems = [
        { text: "Home", href: "/" },
        { text: "What We Do", href: "/" },
        { text: "Contact Us", href: "/", isContact: true },
    ];

    const Slide = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
    `;

    return (
        <>
            <Stack>
                <IconButton
                    sx={{
                        zIndex: '9',
                        color: '#F5F5F5',
                    }}
                    onClick={handleMenu}>
                    {isOpen ? <CloseIcon sx={{ fontSize: "2.5rem", }} /> : <SegmentIcon sx={{ fontSize: "2.5rem", }} />}
                </IconButton>
                {isOpen && (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: `calc(100vh - ${navbarHeight}px)`,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'fixed',
                            right: '0',
                            left: '0',
                            top: navbarHeight,
                            background: '#080808 url(/bg.webp)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: 'right',
                            backgroundPositionY: 'center',
                            backgroundSize: 'cover',
                            animation: `${Slide} .5s cubic-bezier(.3, 0, .3, 1) forwards`
                        }}
                    >
                        {LinkItems.map((item, index) => (
                            <MuiLink
                                key={index}
                                href={item.href}
                                sx={{
                                    color: '#F5F5F5',
                                    border: item.isContact ? ".1875rem solid #00FFFF" : "none",
                                    borderRadius: '1.5rem',
                                    padding: '.25rem 1.5rem',
                                    fontWeight: item.isContact ? "bolder" : "500",
                                    textDecoration: 'none'
                                }}
                            >
                                {item.text}
                            </MuiLink>
                        ))}
                    </Box>
                )
                }
            </Stack >
        </>
    )
}

export default Menu
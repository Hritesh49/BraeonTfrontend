import React from 'react';
import { Stack, Typography, Divider } from "@mui/material";


const Testimonial = () => {

    const reviews = [
        { author: 'Timely Delivery', text: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
        { author: 'Timely Delivery', text: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
        { author: 'Timely Delivery', text: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
        { author: 'Timely Delivery', text: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
        { author: 'Timely Delivery', text: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
        { author: 'Timely Delivery', text: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
        { author: 'Timely Delivery', text: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
        { author: 'Timely Delivery', text: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
    ];

    const createDiv = (author, text) => (
        <Stack
            sx={{
                width: '350px',
                height: "150px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                border: '2px solid #00ffff',
                background: "rgba(45,45,45,0.5)",
                backdropFilter: "blur(18px)",
                padding: '24px 20px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(#00ffff,transparent,transparent)',
                    filter: 'blur(150px)'
                }}
            ></div>
            <Stack
                sx={{
                    width: '100%',
                    height: 'auto',
                    alignItems: 'end',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyItems: 'center',
                    zIndex: '1'
                }}
            >
                {text.map((line, index) => (
                    <Typography variant='body1' sx={{ fontWeight: 'lighter', fontSize: '0.9rem', }} key={index}>{line}</Typography>
                ))}
                <Typography variant='h6' sx={{ fontWeight: 'normal', fontSize: '20px', }}>{author}</Typography>
            </Stack>
        </Stack>
    );

    return (
        <div style={{ width: "100%", display: 'flex', justifyContent: "center", alignItems: 'center',flexDirection:'column',padding: '50px 0px 80px' }}>
            <Stack gap={4} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bolder', color: 'white', fontSize: { xs: "1.875rem", md: '45px' }, }}>Testimonials</Typography>
                <Divider sx={{ width: 100, height: 2, backgroundColor: '#00ffff' }} orientation="horizontal" />
            </Stack>
            <Stack
                sx={{
                    width: { xs: "90%", sm: '92%', md: '85%', lg: "80%" },
                    height: "auto",
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: '1.5625rem', sm: '24px' },
                    flexWrap: 'wrap',
                    paddingTop:'60px'
                }}>
                {reviews.map(field => createDiv(field.author, field.text))}
            </Stack>
        </div>
    );
};

export default Testimonial;

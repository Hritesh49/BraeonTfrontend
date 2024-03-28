import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import { Stack, Box, Typography, Divider } from "@mui/material";
import Delivery from "/delivery.svg";
import Customer from "/customer.svg";
import Innovation from "/innovation.svg";

function Service() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const fields = [
        { title: 'Timely Delivery', pic: Delivery, content: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
        { title: 'Customer Success', pic: Customer, content: ['"Transparency, Trust, and best solutions lead to Customer Success.  "'], },
        { title: 'Innovation', pic: Innovation, content: ['"We are a team of certified professionals and Innovative solutions are our main strength."'], },
    ];

    const createDiv = (pic, title, content) => (
        <Box
            sx={{
                display: 'flex !important',
                width: '70vw !important',
                height: "400px",
                justifyContent: 'end',
                alignItems: 'center',
                flexDirection: 'row',
                position: "relative",
            }}
        >
            <img
                style={{ maxWidth: '350px', height: '350px', filter: "drop-shadow(1px 4px 10px #00FFFF)", position: 'absolute', left: '0', zIndex: '9' }}
                src={pic}
            />
            <Stack
                sx={{
                    width: '85%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "end",
                    border: '2px solid #00ffff',
                    background: "rgba(45,45,45,0.5)",
                    backdropFilter: "blur(18px)",
                    padding: '80px 60px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderTopRightRadius: '50px',
                    borderBottomLeftRadius: '50px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
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
                    }}
                >
                    <Typography variant='h3' sx={{ fontWeight: 'bolder', fontSize: '40px', textAlign: 'end', width: '80%', zIndex: '1' }}>{title}</Typography>
                    {content.map((line, index) => (
                        <Typography variant='body1' sx={{ fontWeight: 'bold', fontSize: '1.125rem', textAlign: 'end', lineBreak: 'strict', width: '80%', zIndex: '1' }} key={index}>{line}</Typography>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );

    return (
        <div style={{ color: "white", maxWidth: "80%", padding: "100px 0px 50px", textAlign: "center", }}>
            <Stack gap={4} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bolder', color: 'white', fontSize: { xs: "1.875rem", md: '45px' }, }}>Work Ethics</Typography>
                <Divider sx={{ width: 100, height: 2, backgroundColor: '#00ffff' }} orientation="horizontal" />
            </Stack>
            <Slider {...settings}>
                {fields.map(field => createDiv(field.pic, field.title, field.content))}
            </Slider>
        </div>
    )
}

export default Service
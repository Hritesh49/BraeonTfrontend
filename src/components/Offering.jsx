import { Stack, Box, Typography, Divider } from '@mui/material';
import React from 'react';
import Service from "/now.svg";
import Web from "/web.svg";
import Mobile from "/mobile.svg";

function Offering() {

    const Offerings = [
        { title: 'ServiceNow Support', pic: Service, content: ['We offer end-to-end services for ServiceNow ranging from consultancy to implementations.'] },
        { title: 'Web Development', pic: Web, content: ['We provide the best services for web designing and development. We use the latest cutting-edge technologies with creative concepts to match your requirements.'] },
        { title: 'Mobility Development', pic: Mobile, content: ['As the number of mobile users is growing, we are creating mobile apps to tap the increasing demand for mobile solutions. We have a team of creative talent for Mobile development'] }
    ];

    const createBox = (pic, title, content, index) => (
        <Box
            sx={{
                display: 'flex',
                maxWidth: '350px',
                height: { xs: '500px', md: '400px' },
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: "rgba(45,45,45,0.5)",
                borderRadius: '.5rem',
                padding: '0.525rem',
                position: 'relative',
                backdropFilter: "blur(18px)",
                boxShadow: '0px 0px 18px 16px #00000042',
                overflow: "hidden",
                transition: "transform .5s ease ",
                '&:hover': {
                    boxShadow: "0px 0px 18px 4px #00ffff",
                    transform: "scale(1.05)",
                }
            }}
        >
            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: "0.5rem",
                    flex: '1',
                    zIndex: '9',
                    background: '#ffffff22',
                }}
            >
                <img style={{ maxWidth: '40%', height: 'auto',filter:"drop-shadow(0px 0px 4px #ffffff)" }} src={pic} />
            </Stack>
            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: '.125rem', sm: '.375rem' },
                    textAlign: 'center',
                    zIndex: '9',
                    background: 'transparent',
                    padding: '1rem',
                    height: "9.375rem",
                }}>

                <Typography variant="h4" sx={{ fontWeight: 'bolder', color: 'white', fontSize: { xs: "1.875rem", md: '1.25rem' }, fontFamily: 'Poppins, sans-serif' }}>{title}</Typography>
                {content.map((line, index) => (
                    <Typography variant='body1' sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.15rem", md: '.9rem' }, fontFamily: 'Poppins, sans-serif' }} key={index}>{line}</Typography>
                ))}
            </Stack>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(#00ffff,transparent,transparent,transparent)',
                    filter: 'blur(150px)',
                }}
            ></div>
        </Box >
    );

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack
                sx={{
                    width: { xs: "90%", sm: '92%', md: '85%', lg: "80%" },
                    height: "auto",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: '.75rem', sm: '1.5rem' },
                    padding: '100px 0px',
                    textAlign: 'center'
                }}
            >
                <Typography variant='h3' sx={{ fontWeight: 'bolder', color: 'white', fontSize: { xs: "1.875rem", md: '45px' }, }}>Our Offerings</Typography>
                <Divider sx={{ width: 100, height: 2, backgroundColor: '#00ffff' }} orientation="horizontal" />
                <Typography variant='body1' sx={{ fontWeight: 'lighter', color: 'white', fontSize: { xs: "1.15rem", md: '1rem' }, padding: "0px 0px 32px" }}>With 100% coverage in all ServiceNow workflows, we know workflow better than anyone else.</Typography>
                <Stack sx={{
                    width: "100%",
                    height: "auto",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: '.75rem', sm: '1.5rem' },
                    flexWrap: 'wrap',
                }} >
                    {Offerings.map((field, index) => (
                        <div key={index}>
                            {createBox(field.pic, field.title, field.content)}
                        </div>
                    ))}
                </Stack>
            </Stack>
        </div>
    );
}

export default Offering;

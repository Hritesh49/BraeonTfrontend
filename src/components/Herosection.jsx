import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography } from "@mui/material";
import Visual from "/Visual.svg";

function Herosection() {
    const [flexDirection, setFlexDirection] = useState(window.innerWidth < 767 ? 'column-reverse' : 'row');

    useEffect(() => {
        const handleResize = () => {
            setFlexDirection(window.innerWidth < 767 ? 'column-reverse' : 'row');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: "url('/Hero-BG.svg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Box
                sx={{
                    width: { xs: "90%", sm: '92%', md: '85%', lg: "80%" },
                    height: { xs: "auto", sm: '85vh' },
                    display: 'flex',
                    flexDirection: flexDirection,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: '1.5625rem', sm: '0rem' }
                }}
            >
                <Stack
                    gap={1}
                    sx={{ display: 'flex', flex: { xs: '1', md: '2' }, filter: "drop-shadow(.125rem .125rem 6.25rem #00FFFF)" }}
                >
                    <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: "1.25rem", md: '1.5rem' }, fontWeight: 'lighter', textAlign: 'start', width: '100%' }}>
                        OUR FOCUS IS
                    </Typography>
                    <Typography variant='h1' sx={{ fontSize: { xs: '1.5rem', sm: "2rem", md: '3rem' }, fontWeight: 'bolder', textAlign: 'start', textShadow: '.0625rem -0.0625rem 1.5rem #ffffff53', color: '#00FFFF', width: '100%' }}>
                        CUSTOMER GROWTH
                    </Typography>
                    <Typography variant='h5' sx={{ fontSize: { xs: '1rem', sm: "1.25rem", md: '1.5rem' }, fontWeight: 'lighter', textAlign: 'start', width: '100%' }}>
                        BY LEVERAGING OUR
                    </Typography>
                    <Typography variant='h3' sx={{ fontSize: { xs: '1.375rem', sm: "1.7rem", md: '2.5rem' }, fontWeight: 'bold', textAlign: 'start', width: '100%' }}>
                        TECHNICAL EXPERTISE
                    </Typography>
                </Stack>
                <Stack sx={{ display: "flex", flex: '1', justifyContent: 'center', alignItems: 'flex-end', }}>
                    <img style={{ maxWidth: '100%', height: 'auto', filter: "drop-shadow(.125rem .625rem 1.125rem #00FFFF)" }} src={Visual} />
                </Stack>
            </Box>
        </div>
    )
}

export default Herosection;

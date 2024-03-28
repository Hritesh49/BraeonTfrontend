import { Stack } from '@mui/material'
import React, { useState } from 'react';
import Lottie from "lottie-react";
import Visual from "../assets/Animation.json";

function ContactUs() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log('Form submitted:', { name, email, message });
        // You can also add logic to send form data to your backend here
    };

    return (
        <div style={{ width: "100%", display: 'flex', justifyContent: "center", alignItems: 'center', padding: '50px 0px 80px' }}>
            <Stack
                gap={10}
                sx={{
                    width: { xs: "90%", sm: '92%', md: '85%', lg: "80%" },
                    height: "auto",
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Stack sx={{ flex: "1", display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <Lottie style={{ width: "100%", filter: "drop-shadow(0px 0px 18px #00ffff)" }} animationData={Visual} />
                </Stack>
                <Stack gap={4} sx={{ flex: "1", display: 'flex', justifyContent: 'center', alignItems: 'flex-start',height:'inherit', }}>
                    <h2>Send us a message</h2>
                    <form style={{gap:"24px",display:"flex",flexDirection:'column',justifyContent:"center",alignItems:'center'}} onSubmit={handleSubmit}>
                        <div>
                            <label>Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>Message:</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Stack>
            </Stack>
        </div>
    )
}

export default ContactUs
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from "/logo.svg";
import { Stack, Typography, Divider } from "@mui/material";
import "../assets/Footer.css";

function Footer() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#000' }}>
      <Stack
        sx={{
          color: '#fff',
          padding: '3.125rem 0',
          display: 'flex',
          flexDirection: { xs: "column", sm: 'row'},
          justifyContent: 'center',
          alignItems: { xs: "flex-start", sm: 'center'},
          width: { xs: "90%", sm: '92%', md: '85%', lg: "80%" },
          gap: { xs: "1rem", sm: '1rem', md: '5rem' }
        }}>
        <Stack
          gap={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '2',
          }}>
          <img
            style={{
              maxWidth: "9.375rem",
              height: 'auto'
            }}
            src={Logo}
          />
          <Typography variant='body1' sx={{ fontSize: '.875rem' }}>Braeon Technocrats is an Enterprise Service Management company which develops, delivers and automates processes. We provide Enterprise Services and Solutions to improve business processes and service delivery including outsourcing, integration, consulting, infrastructure services and maintenance.</Typography>
          <ul style={{ listStyle: 'none', padding: 0, gap: '.625rem', display: "flex", flexDirection: 'row', }}>
            <li style={{ display: 'inline', fontSize: '1.5rem' }}><a href="#"><FaLinkedin className='Icon' /></a></li>
            <li style={{ display: 'inline', fontSize: '1.5rem' }}><a href="#"><FaFacebook className='Icon' /></a></li>
            <li style={{ display: 'inline', fontSize: '1.5rem' }}><a href="#"><FaTwitter className='Icon' /></a></li>
            <li style={{ display: 'inline', fontSize: '1.5rem' }}><a href="#"><FaInstagram className='Icon' /></a></li>
          </ul>
        </Stack>
        <Stack sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" className='link'>Home</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" className='link'>Offerings</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" className='link'>Blogs</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" className='link'>Testimonials</a></li>
          </ul>
        </Stack>
        <Stack sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Services</h3>
          <ul style={{ padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" className='link'>Consulting</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" className='link'>Automation</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" className='link'>Implementation</a></li>
            <li style={{ marginBottom: '0.5rem' }}><a href="#" className='link'>Managed Service</a></li>
          </ul>
        </Stack>
        <Stack sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contact Us</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><FaPhone className='Icon' /> +1 (123) 456-7890</li>
            <li style={{ marginBottom: '0.5rem' }}><FaEnvelope className='Icon' /> info@example.com</li>
            <li style={{ marginBottom: '0.5rem' }}><FaMapMarkerAlt className='Icon' /> 123 Street Name, City, Country</li>
          </ul>
        </Stack>
      </Stack>
      <Divider sx={{ width: { xs: "90%", sm: '92%', md: '85%', lg: "80%" }, backgroundColor: '#626262' }} />
      <Stack
        sx={{
          color: '#fff',
          width: { xs: "90%", sm: '92%', md: '85%', lg: "80%" },
          display: 'flex',
          flexDirection: { xs: "column", sm: 'row'},
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0rem'
        }}
      >
        <Typography variant='body1' sx={{ fontSize: '.875rem', flex: "1" }}> © 2024 Braeon-TechnoCrats. All rights reserved.</Typography>
        <Stack gap={1} sx={{ display: 'flex', flexDirection: 'row', flex: '1', alignItems: 'center', justifyContent: 'end' }}>
          <a href="#" className='link'><Typography variant='body1' sx={{ fontSize: '.875rem', fontWeight: "lighter" }}>Privacy Policy</Typography></a>
          <Divider sx={{ height: 20, m: 0.5, backgroundColor: '#626262' }} orientation="vertical" />
          <a href="#" className='link'><Typography variant='body1' sx={{ fontSize: '.875rem', fontWeight: "lighter" }}>Terms and Conditions</Typography></a>
          <Divider sx={{ height: 20, m: 0.5, backgroundColor: '#626262' }} orientation="vertical" />
          <a href="#" className='link'><Typography variant='body1' sx={{ fontSize: '.875rem', fontWeight: "lighter" }}>Cookie Policy</Typography></a>
        </Stack>
      </Stack>
    </div>
  )
}

export default Footer
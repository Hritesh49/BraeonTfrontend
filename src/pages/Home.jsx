import React from 'react';
import Herosection from '../components/Herosection';
// import About from '../components/About';
import Offering from '../components/Offering';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Services from '../components/Services';

const Home = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      <Herosection />
      {/* <About /> */}
      <Testimonials />
      <Services />
      <Offering />
      <ContactUs />
    </div>
  )
}

export default Home
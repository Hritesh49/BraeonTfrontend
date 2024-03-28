import React from 'react';
import Herosection from '../components/Herosection';
// import About from '../components/About';
import Offering from '../components/Offering';
import Testimonial from '../components/Testimonial';
import Service from '../components/Service';
import ContactUs from '../components/ContactUs';

const Home = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
      <Herosection />
      {/* <About /> */}
      <Service />
      <Offering />
      <Testimonial />
      <ContactUs />
    </div>
  )
}

export default Home
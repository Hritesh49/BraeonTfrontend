import { Divider } from '@mui/material';
import React, { useRef } from 'react';
import '../assets/Offering.css';

function Offering() {

    const Offerings = [
        { title: 'ServiceNow Support', pic: "/now.svg", content: ['We offer end-to-end services for ServiceNow ranging from consultancy to implementations.'] },
        { title: 'Web Development', pic: "/web.svg", content: ['We provide the best services for web designing and development. We use the latest cutting-edge technologies with creative concepts to match your requirements.'] },
        { title: 'Mobility Development', pic: "/mobile.svg", content: ['As the number of mobile users is growing, we are creating mobile apps to tap the increasing demand for mobile solutions. We have a team of creative talent for Mobile development'] }
    ];



    const createBox = (pic, title, content, index) => (
        <div className='OffersBox' key={index}>
            <div className='OffersVisualdiv'>
                <img src={pic} />
            </div>
            <div className='OffersTextdiv'>
                <h4>{title}</h4>
                {content.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );

    return (
        <div className='OfferingmainBack'>
            <div className='OfferingmainSection'>
                <div className='OfferingmainSectionHeader'>
                    <h5>Our Offerings</h5>
                    <Divider sx={{ width: 100, height: 2, backgroundColor: '#00ffff' }} orientation="horizontal" />
                    <h3>With 100% coverage in all ServiceNow workflows, we know workflow better than anyone else.</h3>
                </div>
                <div className='OfferingmainBox'>
                    {Offerings.map((field, index) => (
                        <div key={index}>
                            {createBox(field.pic, field.title, field.content)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offering;

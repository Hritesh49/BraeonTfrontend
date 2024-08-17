import React from 'react';
import { Divider } from "@mui/material";
import "../assets/Service.css";

function Services() {

  const Service = [
    { title: 'Timely Delivery', visual: "/delivery.svg", content: ['"Fast is always better. With planning and volunteerism of our team ensure timely delivery."'], },
    { title: 'Customer Success', visual: "/customer.svg", content: ['"Transparency, Trust and best solutions lead to customer success."'], },
    { title: 'Innovation', visual: "/innovation.svg", content: ['"We are a team of certified professionals and innovative solutons are our main strength."'], },
  ];

  const createDiv = (visual, title, content, index) => (
    <div className='ServiceBox' key={title}>
      <div className="ServiceBoxVisualdiv">
        <img className='visualBox' src={visual} />
      </div>
      <div className="ServiceBoxTextdiv">
        <h4>{title}</h4>
        {content.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );

  return (
    <div className='ServicemainBack'>
      <div className="ServicemainHeader">
        <h5>Work Ethics</h5>
        <Divider sx={{ width: 60, height: 2, backgroundColor: '#00ffff' }} orientation="horizontal" />
        <h3>Gain an edge with Braeontech</h3>
      </div>
      <div className='ServicemainBox'>
        {Service.map((service, index) => (
          <div className='ServiceSection' key={index}>
            {createDiv(service.visual, service.title, service.content)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
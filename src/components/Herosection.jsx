import React, { useState, useEffect } from 'react';
import '../assets/HeroSection.css';

function Herosection() {
    return (
        <div className='HeromainBack'>
            <div className='HeromainBackCircle'></div>
            <div className='HeromainBackGlossy'>
                <div className='HeromainSection'>
                    <div className='HeromainTextsection'>
                        <h5>
                            OUR FOCUS IS
                        </h5>
                        <h1>
                            CUSTOMER GROWTH
                        </h1>
                        <h5>
                            BY LEVERAGING OUR
                        </h5>
                        <h3>
                            TECHNICAL EXPERTISE
                        </h3>
                        <button className='learn-more'>Learn More...</button>
                    </div>
                    <div className='HeromainVisualsection'>
                        <img src="/Hero-Visual.svg" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Herosection;

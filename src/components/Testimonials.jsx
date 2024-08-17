import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from 'react';
import { Divider } from "@mui/material";
import "../assets/Testimonial.css";

function Testimonials() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: (i) => (
            <div className="custom-dot"></div>
        ),
        appendDots: (dots) => (
            <ul style={{ margin: "0px" }}> {dots} </ul>
        ),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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

    const [isDivVisible, setIsDivVisible] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const videoDivRef = useRef(null);

    const toggleDivVisibility = (videoUrl) => {
        console.log("Video URL passed:", videoUrl);  // Log the video URL being passed
        setCurrentVideo(videoUrl);
        setIsDivVisible(!isDivVisible);
    };

    const handleClickOutside = (event) => {
        if (videoDivRef.current && !videoDivRef.current.contains(event.target)) {
            setIsDivVisible(false);
        }
    };

    useEffect(() => {
        if (isDivVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDivVisible]);

    const fields = [
        { title: 'Client: Name', pic: "/Testimonials_Visual.svg", player: "/Video_Player.svg", content: ['"Watch Speaker Name explains how Breaontech helps them in growing their company forward and so on.Watch Name explains how Breaontech helps them in growing their company forward and so on."'], video: "https://www.youtube.com/embed/Qz4LC9Pmo7Y?autoplay=1&rel=0" },
        { title: 'Client: Name', pic: "/Testimonials_Visual.svg", player: "/Video_Player.svg", content: ['"Watch Speaker Name explains how Breaontech helps them in growing their company forward and so on.Watch Name explains how Breaontech helps them in growing their company forward and so on."'], video: "https://www.youtube.com/embed/LG4aiH7ImTI?autoplay=1&rel=0" },
        { title: 'Client: Name', pic: "/Testimonials_Visual.svg", player: "/Video_Player.svg", content: ['"Watch Speaker Name explains how Breaontech helps them in growing their company forward and so on.Watch Name explains how Breaontech helps them in growing their company forward and so on."'], video: "https://www.youtube.com/embed/Qz4LC9Pmo7Y?autoplay=1&rel=0" },
    ];

    const createDiv = (pic, player, title, content, videoUrl) => (
        <div className='TestimonialsmainSlider' key={title}>
            <div className="TestimonialsSliderVisualDiv">
                <img className="TestimonialSpeaker" src={pic} />
                <button onClick={() => toggleDivVisibility(videoUrl)}>
                    <img className="Video_player" src={player} />
                </button>
            </div>
            <div className="TestimonialsSlidermainTextDiv">
                <div className="TestimonialsSliderTextDiv">
                    <h3>{title}</h3>
                    {content.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="TestimonialsmainBack">
            <div>
                <div className="TestimonialsmainHeader">
                    <h5>Testimonials</h5>
                    <Divider sx={{ width: 60, height: 2, backgroundColor: '#00ffff' }} orientation="horizontal" />
                    <h3>Driving value across the ecosystem</h3>
                </div>
                <Slider {...settings}>
                    {fields.map(field => createDiv(field.pic, field.player, field.title, field.content, field.video))}
                </Slider>
            </div>
            {isDivVisible && (
                <div ref={videoDivRef} className="TestimonialsVideoPlayer">
                    <button className="PlayercloseButton" onClick={() => toggleDivVisibility(null)}>✖</button>
                    {currentVideo && (
                        <iframe className="FramePlayer" src={currentVideo} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    )}
                </div>
            )}
        </div>
    );
}

export default Testimonials;

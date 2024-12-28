"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const SimpleSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slider-item">
                    <div className="slide-content" style={{ backgroundColor: "#f4a261" }}>
                        <h3>Slide 1</h3>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="slide-content" style={{ backgroundColor: "#2a9d8f" }}>
                        <h3>Slide 2</h3>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="slide-content" style={{ backgroundColor: "#e76f51" }}>
                        <h3>Slide 3</h3>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="slide-content" style={{ backgroundColor: "#264653" }}>
                        <h3>Slide 4</h3>
                    </div>
                </div>
                <div className="slider-item">
                    <div className="slide-content" style={{ backgroundColor: "#2a9d8f" }}>
                        <h3>Slide 5</h3>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SimpleSlider;

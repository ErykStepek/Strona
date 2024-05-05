/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";

import "./CarouselNews.css";


export const CarouselNews = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            nextSlide();
        }, 4000);

        return () => clearTimeout(timeoutId);
    }); 


    return (

        <div className="carousel">
            <div className="car" style={{height: "371px"}}>
                {data.map((item, idx) => {
                    return (
                        <div className={slide === idx ? "slide NewsSlide" : "slide slide-hidden"}>
                            <div className={slide === idx ? "slide NewsSlideImg" : "slide slide-hidden"}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    key={idx}
                                    className={slide === idx ? "slide" : "slide slide-hidden"}
                                        />
                            </div>
                            <div className={slide === idx ? "slide NewsSlideInfo" : "slide slide-hidden"}>
                                <div className={slide === idx ? "slide NewsSlideInfoTitle" : "slide slide-hidden"}>
                                    <span>{item.title}</span>   
                                </div>
                                <div className={slide === idx ? "slide NewsSlideInfoArtist" : "slide slide-hidden"}>
                                    <span>{item.artist1}</span> <span>{item.artist2}</span> <span>{item.artist3}</span> <span>{item.artist4}</span> <span>{item.artist5}</span>   <span className="NewsSlideInfoArtistLabel">{item.label}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <img src="/arrow-left.svg" onClick={prevSlide} className="arrow arrow-left" />
                <img src="/arrow-right.svg" onClick={nextSlide} className="arrow arrow-right"/>
            </div>
            <div style={{ height: "20px", marginTop: "16px" }}>
                <span className="indicators">
                    {data.map((_, idx) => {
                        return (
                            <button
                                key={idx}
                                className={
                                    slide === idx ? "indicator" : "indicator indicator-inactive"
                                }
                                onClick={() => setSlide(idx)}
                            ></button>
                        );
                    })}
                </span>
            </div>
        </div>
    );
};
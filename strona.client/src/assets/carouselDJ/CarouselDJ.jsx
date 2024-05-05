/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import "./CarouselDJ.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export const CarouselDJ = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <div className="DJcarousel">
            <div className="DJbuttons">
                <span style={{ fontFamily: "AeonikBold", fontSize: "20px" }}>Featured DJ's</span>
                <div style={{ marginLeft: "auto", marginRight: "0", display: "flex", flexDirection: "row" }}>
                    <div className="DJbuttonscontainer" onClick={() => prevSlide()} >
                        <button />
                        <svg>
                            <AiFillCaretLeft className="DJsvgarrow" />
                        </svg>
                    </div>
                    <div className="DJbuttonscontainer" onClick={() => nextSlide()} >
                        <button />
                        <svg>
                            <AiFillCaretRight className="DJsvgarrow" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="DJcar" style={{ height: "371px !important"}}>
                {data.map((item, idx) => {
                    return (
                            <div className="DJdiv" style={{ height: "371px !important" }}>
                                <div className={slide === idx ? "" : "DJslide-hidden"} style={{width: "100%", position:"relative"}}>
                                        <img
                                            src={item.src1}
                                            alt={item.alt1}
                                            key={idx}
                                            className={slide === idx ? "DJslide, DJcover" : "DJslide DJslide-hidden"}
                                            draggable="false"
                                        />
                                        <span className={slide === idx ? "" : "DJslide-hidden"}>{item.alt1}</span>
                                </div>
                                <div className={slide === idx ? "" : "DJslide-hidden"} style={{width: "100%", position:"relative"}}>
                                        <img
                                            src={item.src2}
                                            alt={item.alt2}
                                            key={idx}
                                            className={slide === idx ? "DJslide, DJcover" : "DJslide DJslide-hidden"}
                                            draggable="false"
                                        />
                                        <span className={slide === idx ? "" : "DJslide-hidden"}>{item.alt2}</span>
                                </div>
                                <div className={slide === idx ? "" : "DJslide-hidden"} style={{width: "100%", position:"relative"}}>
                                        <img
                                            src={item.src3}
                                            alt={item.alt3}
                                            key={idx}
                                            className={slide === idx ? "DJslide, DJcover" : "DJslide DJslide-hidden"}
                                            draggable="false"
                                        />
                                        <span className={slide === idx ? "" : "DJslide-hidden"}>{item.alt3}</span>
                                </div>
                            </div>    
                    );
                })}
            </div>
            <div style={{ height: "20px", paddingTop: "9px"}}>
                <span className="DJindicators">
                    {data.map((_, idx) => {
                        return (
                            <button
                                key={idx}
                                className={
                                    slide === idx ? "DJindicator" : "DJindicator DJindicator-inactive"
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
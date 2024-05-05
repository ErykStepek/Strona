/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import "./CarouselReleases.css";
import { AiFillCaretLeft, AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { BiListPlus } from "react-icons/bi";
import { IconContext } from "react-icons";

export const CarouselReleases = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const svgstyle = {color: "white", size: "5em"};

    return (
        <div className="Releasescarousel">
            <div className="Releasesbuttons">
                <span style={{ fontFamily: "AeonikBold", fontSize: "20px" }}>New Releases</span>
                <div style={{ marginLeft: "auto", marginRight: "0", display: "flex", flexDirection: "row" }}>
                    <div className="buttonscontainer" onClick={() => prevSlide()} >
                        <button />
                        <svg>
                            <AiFillCaretLeft className="Releasessvgarrow" />
                        </svg>
                    </div>
                    <div className="buttonscontainer" onClick={() => nextSlide()} >
                        <button />
                        <svg>
                            <AiFillCaretRight className="Releasessvgarrow" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="car" style={{ height: "458px"}}>
                {data.map((item, idx) => {
                    return (
                        <div className="Releasesdiv" style={{ height: "371px !important" }}>
                            <div className={slide === idx ? "ReleasesRow" : "ReleasesRow, Releasesslide-hidden"} style={{ width: "100%", position: "relative" }}>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src1}
                                            alt={item.alt1}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price1}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title1}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist1_1}</span> <span id="artist2">{item.artist1_2}</span> <span id="artist3">{item.artist1_3}</span> <span id="artist4">{item.artist1_4}</span> <span id="artist5">{item.artist1_5}</span> <span id="artist6">{item.artist1_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src2}
                                            alt={item.alt2}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price2}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title2}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist2_1}</span> <span id="artist2">{item.artist2_2}</span> <span id="artist3">{item.artist2_3}</span> <span id="artist4">{item.artist2_4}</span> <span id="artist5">{item.artist2_5}</span> <span id="artist6">{item.artist2_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label2}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src3}
                                            alt={item.alt3}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price3}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title3}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist3_1}</span> <span id="artist2">{item.artist3_2}</span> <span id="artist3">{item.artist3_3}</span> <span id="artist4">{item.artist3_4}</span> <span id="artist5">{item.artist3_5}</span> <span id="artist6">{item.artist3_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label3}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src4}
                                            alt={item.alt4}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price4}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title4}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist4_1}</span> <span id="artist2">{item.artist4_2}</span> <span id="artist3">{item.artist4_3}</span> <span id="artist4">{item.artist4_4}</span> <span id="artist5">{item.artist4_5}</span> <span id="artist6">{item.artist4_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label4}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src5}
                                            alt={item.alt5}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price5}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title5}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist5_1}</span> <span id="artist2">{item.artist5_2}</span> <span id="artist3">{item.artist5_3}</span> <span id="artist4">{item.artist5_4}</span> <span id="artist5">{item.artist5_5}</span> <span id="artist6">{item.artist5_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label5}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={slide === idx ? "ReleasesRow" : "ReleasesRow, Releasesslide-hidden"} style={{ width: "100%", position: "relative" }}>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src6}
                                            alt={item.alt6}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price6}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist6_1}</span> <span id="artist2">{item.artist6_2}</span> <span id="artist3">{item.artist6_3}</span> <span id="artist4">{item.artist6_4}</span> <span id="artist5">{item.artist6_5}</span> <span id="artist6">{item.artist6_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label6}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src7}
                                            alt={item.alt7}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price7}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title7}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist7_1}</span> <span id="artist2">{item.artist7_2}</span> <span id="artist3">{item.artist7_3}</span> <span id="artist4">{item.artist7_4}</span> <span id="artist5">{item.artist7_5}</span> <span id="artist6">{item.artist7_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label7}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src8}
                                            alt={item.alt8}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price8}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title8}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist8_1}</span> <span id="artist2">{item.artist8_2}</span> <span id="artist3">{item.artist8_3}</span> <span id="artist4">{item.artist8_4}</span> <span id="artist5">{item.artist8_5}</span> <span id="artist6">{item.artist8_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label8}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src9}
                                            alt={item.alt9}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price9}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title9}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist9_1}</span> <span id="artist2">{item.artist9_2}</span> <span id="artist3">{item.artist9_3}</span> <span id="artist4">{item.artist9_4}</span> <span id="artist5">{item.artist9_5}</span> <span id="artist6">{item.artist9_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label9}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={slide === idx ? "ReleasesRowItem" : "ReleasesRowItem, Releasesslide-hidden"}>
                                        <img
                                            src={item.src10}
                                            alt={item.alt10}
                                            key={idx}
                                            className={slide === idx ? "Releasesslide, Releasescover" : "Releasesslide Releasesslide-hidden"}
                                            draggable="false"
                                        />
                                    <div className={slide === idx ? "ReleaseOptionsPanel" : "ReleaseOptionsPanel, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleaseOptionsPanelButtons" : "ReleaseOptionsPanelButtons, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiFillCaretRight />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <BiListPlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                            <div className={slide === idx ? "" : "Releasesslide-hidden"}>
                                                <button className="ReleaseOptionsPanelButtonsButton">
                                                    <IconContext.Provider value={{ className: "stylesvg" }}>
                                                        <div>
                                                            <AiOutlinePlus />
                                                        </div>
                                                    </IconContext.Provider>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={slide === idx ? "" : ", Releasesslide-hidden"}>
                                            <button className="ReleaseOptionsPanelButtonsBuyButton"><p>{item.price10}</p></button>
                                        </div>
                                    </div>
                                    <div className={slide === idx ? "ReleasesRowItemInfo" : "ReleasesRowItemInfo, Releasesslide-hidden"}>
                                        <div className={slide === idx ? "ReleasesRowItemInfoItems" : "ReleasesRowItemInfoItems, Releasesslide-hidden"}>
                                            <div className={slide === idx ? "ReleasesRowItemInfoTitle" : "ReleasesRowItemInfoTitle, Releasesslide-hidden"}>
                                                <span>{item.title10}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoArtists" : "ReleasesRowItemInfoArtists, Releasesslide-hidden"}>
                                                <span id="artist1">{item.artist10_1}</span> <span id="artist2">{item.artist10_2}</span> <span id="artist3">{item.artist10_3}</span> <span id="artist4">{item.artist10_4}</span> <span id="artist5">{item.artist10_5}</span> <span id="artist6">{item.artist10_6}</span>
                                            </div>
                                            <div className={slide === idx ? "ReleasesRowItemInfoLabel" : "ReleasesRowItemInfoLabel, Releasesslide-hidden"}>
                                                <span>{item.label10}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div style={{ height: "20px", paddingTop: "16px" }}>
                <span className="Releasesindicators">
                    {data.map((_, idx) => {
                        return (
                            <button
                                key={idx}
                                className={
                                    slide === idx ? "Releasesindicator" : "Releasesindicator Releasesindicator-inactive"
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
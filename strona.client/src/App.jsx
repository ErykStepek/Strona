import './MainCore.scss';
import Image from 'react-bootstrap/Image'; 
import { CarouselNews } from './assets/carouselNews/CarouselNews.jsx';
import { newsSlides } from "./assets/carouselNews/CarouselDataNews.json";
import { CarouselDJ } from './assets/carouselDJ/CarouselDJ.jsx';
import { DJSlides } from "./assets/carouselDJ/CarouselDataDJ.json";
import { CarouselReleases } from "./assets/carouselReleases/CarouselReleases.jsx";
import { ReleasesSlides } from "./assets/carouselReleases/CarouselReleasesData.json";
import { AiFillCaretRight, AiOutlinePlus } from "react-icons/ai";
import { BiListPlus } from "react-icons/bi";
import { LuPlus } from "react-icons/lu";


function App() {
    return (
        <div className="MainContent">
            <div className="MainSection">
                <div className="News">
                    <div className="NewOnWSBeats">
                        <div className="MainText">
                            New on WSBeats
                        </div>
                        <div style={{width: "540px", height: "391px", marginTop: "8px"}}>
                            <CarouselNews data={newsSlides}> </CarouselNews>
                        </div>
                    </div>
                    <div className="DJCharts">
                        <div>
                            <CarouselDJ data={DJSlides}> </CarouselDJ>
                        </div>
                    </div>
                </div>
                <div className="NewReleases">
                    <div>
                        <CarouselReleases data={ReleasesSlides}></CarouselReleases>
                    </div>
                </div>
                <div className="Advertisement">
                    <div className="AdvertisementTitle">
                        <span>WSB-NLU</span>
                    </div>
                    <div className="Banner">
                        <a href="https://www.wsb-nlu.edu.pl/" target="_blank" rel="noopener noreferrer">
                            <Image src="./image/wsb.jpg" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="RightSection">
                <div className="RightSectionField">
                    <div className="RightSectionContent">
                        <div className="RightSectionMenu">
                            <div className="RightSectionMenuButtons">
                                <div className="RightSectionMenuSvg">
                                    <button>
                                        <div>
                                            <AiFillCaretRight style={{padding: "1px 0px 1px 0px"}} />
                                        </div>
                                    </button>
                                </div>
                                <div className="RightSectionMenuSvg">
                                    <button style={{ paddingRight: "0px !important"} }>
                                        <div>
                                            <BiListPlus style={{fontSize: "30px"}} />
                                        </div>
                                    </button>
                                </div>
                                <div className="RightSectionMenuSvg">
                                    <button>
                                        <div>
                                            <LuPlus />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="RightSectionMenuTitle">
                                <span>WSBeats</span><span id="top10">Top10</span>
                            </div>
                        </div>
                        <div style={{ display: "flex", height: "1px", backgroundColor: "rgb(90, 90, 90)", margin: "8px 0px 0px" }} />
                        <div className="RightSectionList">
                            <div className="RightSectionListItem" id="1">
                                <div>
                                    <span>1</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track1</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist1</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="2">
                                <div>
                                    <span>2</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track2</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist2</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label2</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="3">
                                <div>
                                    <span>3</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track3</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist3</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="4">
                                <div>
                                    <span>4</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track4</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist4</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label4</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="4">
                                <div>
                                    <span>4</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track4</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist4</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label4</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="5">
                                <div>
                                    <span>5</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track5</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist5</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="6">
                                <div>
                                    <span>6</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track6</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist6</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label6</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="7">
                                <div>
                                    <span>7</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track7</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist7</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="8">
                                <div>
                                    <span>8</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track8</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist8</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="9">
                                <div>
                                    <span>9</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track9</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist9</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label9</span>
                                    </div>
                                </div>
                            </div>
                            <div className="RightSectionListItem" id="10">
                                <div>
                                    <span>10</span>
                                </div>
                                <div className="RightSectionListItemInfo">
                                    <div className="rightsectiontrack">
                                        <span>Track10</span>
                                    </div>
                                    <div className="rightsectionartist">
                                        <span>Artist10</span>
                                    </div>
                                    <div className="rightsectionlabel">
                                        <span>Label10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default App;
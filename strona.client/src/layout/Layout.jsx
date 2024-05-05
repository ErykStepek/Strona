import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../MainCore.scss';

export function Layout() {
    return (
        <div className="Layout" >
            <div className="Header">
                <div className="n">   
                        <ul className="fc">
                            <li>
                                <Link to="/" className="d-block logo">
                                        <Image src="./image/wsblogo.jpg"   />
                                </Link>
                            </li>
                            <li>
                                <div className="genresdiv">
                                    <span>Genres</span>
                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                    <div className="genresdivlist">
                                        <div className="genresdivlistwraper">
                                            <div className="wrappercol">
                                                <ul className="dropdown_menu">
                                                    <li><Link to="/BigRoom"><span id="bigroom">Big Room</span></Link></li>
                                                    <li><Link to="/Downtempo"><span id="downtempo">Downtempo</span></Link></li>
                                                    <li><Link to="/DrumAndBass"><span id="drumandbass">Drum & Bass</span></Link></li>
                                                    <li><Link to="/Dubstep"><span id="dubstep">Dubstep</span></Link></li>
                                                </ul>
                                            </div>
                                            <div className="wrappercol">
                                                <ul className="dropdown_menu">
                                                    <li><Link to="/FunkyHouse"><span id="funkyhouse">Funky House</span></Link></li>
                                                    <li><Link to="/HardTechno"><span id="hardtechno">Hard Techno</span></Link></li>
                                                    <li><Link to="/House"><span id="house">House</span></Link></li>
                                                    <li><Link to="/ProgressiveHouse"><span id="progressivehouse">Progressive House</span></Link></li>
                                                </ul>
                                            </div>
                                            <div className="wrappercol">
                                                <ul className="dropdown_menu">
                                                    <li><Link to="/PsyTrance"><span id="psytrance">Psy-Trance</span></Link></li>
                                                    <li><Link to="/TechHouse"><span id="techhouse">Tech House</span></Link></li>
                                                    <li><Link to="/Trance"><span id="trance">Trance</span></Link></li>
                                                    <li><Link to="/UKGarage"><span id="ukgarage">UK Garage</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>     
                        <ul className="nright">
                            <li>
                                <div className="searchfield">
                                    <div className="searchfieldicon"><ion-icon name="search-outline"/></div>
                                    <input id="search-field" placeholder="Search tracks, releases, artists, labels, and charts..."/>
                                </div>
                            </li>
                            <li>
                                <Button variant="outline-success" bsPrefix="searchbutton">Search</Button>
                            </li>
                            <li className="login">
                                <ion-icon name="person-outline"></ion-icon>
                                Login
                            </li>
                        </ul>
                </div>
            </div>
            <ul className="MainUl">
                <li>
                <div className="Sidebar">
                    <div className="SidebarField">
                        <div className="SidebarConent">
                            <ul>
                                <li>
                                    <a className="sidebaraclass">
                                        <ion-icon name="heart-outline" className="sidebarsvg"></ion-icon>
                                        My WSBeats
                                    </a>
                                </li>
                                <li>
                                    <a className="sidebaraclass">
                                        <ion-icon name="list-outline"></ion-icon>
                                        Collection
                                    </a> 
                                </li>
                                <li>
                                    <a className="sidebaraclass">
                                        <ion-icon name="download-outline"></ion-icon>
                                        Downloads
                                    </a>
                                </li>
                                <li>
                                    <a className="sidebaraclass">
                                        <ion-icon name="play-outline"></ion-icon>
                                        Playlists
                                    </a>
                                </li>
                            </ul>
                            <div className="sidebarhorizontalbar" />
                            <div className="sidebarplaylistsection">
                                <div className="wrapper">
                                   <div className="sidebarplaylistsectioncontent">
                                        <div className="sidebarcreateplaylist">
                                            <a className="sidebaraclass" id="playlist">
                                                <ion-icon name="add-outline"></ion-icon>
                                                Create playlist
                                            </a>
                                        </div>
                                   </div>
                                   <div>
                                        <ul style={{height: "100%"}}></ul>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
                </li>
                <li>
                <div className="Main">
                    <Outlet/>
                </div>
                </li>
                <li>
                <div className="RightField"/>
                </li>
            </ul>
            <div className="Footer" />
        </div>
    );
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Layout } from './layout/Layout.jsx';
import { GenresLayout } from './genres/GenresLayout.jsx';
import { Bigroom } from './genres/BigRoom/Bigroom.jsx';
import { Downtempo } from './genres/Downtempo/Downtempo.jsx';
import { DrumAndBass } from './genres/DrumAndBass/DrumAndBass.jsx';
import { Dubstep } from './genres/Dubstep/Dubstep.jsx';
import { FunkyHouse } from './genres/FunkyHouse/FunkyHouse';
import { HardTechno } from './genres/HardTechno/HardTechno.jsx';
import { House } from './genres/House/House.jsx';
import { ProgressiveHouse } from './genres/ProgressiveHouse/ProgressiveHouse.jsx';
import { PsyTrance } from './genres/PsyTrance/PsyTrance.jsx';
import { TechHouse } from './genres/TechHouse/TechHouse.jsx';
import { Trance } from './genres/Trance/Trance.jsx';
import { UKGarage } from './genres/UKGarage/UKGarage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/BigRoom' element={<Layout />}>
                    <Route index element={<Bigroom />} />
                </Route>
                <Route path='/Downtempo' element={<Layout />}>
                    <Route index element={<Downtempo />} />
                </Route>
                <Route path='/DrumAndBass' element={<Layout />}>
                    <Route index element={<DrumAndBass />} />
                </Route>
                <Route path='/Dubstep' element={<Layout />}>
                    <Route index element={<Dubstep />} />
                </Route>
                <Route path='/FunkyHouse' element={<Layout />}>
                    <Route index element={<FunkyHouse />} />
                </Route>
                <Route path='/HardTechno' element={<Layout />}>
                    <Route index element={<HardTechno />} />
                </Route>
                <Route path='/House' element={<Layout />}>
                    <Route index element={<House />} />
                </Route>
                <Route path='/ProgressiveHouse' element={<Layout />}>
                    <Route index element={<ProgressiveHouse />} />
                </Route>
                <Route path='/PsyTrance' element={<Layout />}>
                    <Route index element={<PsyTrance />} />
                </Route>
                <Route path='/TechHouse' element={<Layout />}>
                    <Route index element={<TechHouse />} />
                </Route>
                <Route path='/Trance' element={<Layout />}>
                    <Route index element={<Trance />} />
                </Route>
                <Route path='/UKGarage' element={<Layout />}>
                    <Route index element={<UKGarage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

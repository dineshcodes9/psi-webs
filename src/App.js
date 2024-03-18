import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Contactus from './pages/Contactus';


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/careers" index element={<Careers />} />
                    <Route path="/contact" index element={<Contactus />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

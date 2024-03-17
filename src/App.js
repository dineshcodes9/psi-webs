import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Careers from './pages/Careers';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/careers" index element={<Careers />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

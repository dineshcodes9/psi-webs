import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Contactus from './pages/Contactus';
import Blog from './pages/Blog';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';


export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/careers" index element={<Careers />} />
                    <Route path="/contact" index element={<Contactus />} />
                    <Route path="/blog" index element={<Blog />} />
                    <Route path="/blog1" index element={<Blog1 />} />
                    <Route path="/blog2" index element={<Blog2 />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

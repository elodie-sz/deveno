import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import ContactEK from "./pages/ContactEK";
import Home from './pages/Home';
import Knowledges from "./pages/knowledges";
import KnowledgesEK from "./pages/knowledgesEK";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import PortfolioEK from "./pages/PortfolioEK";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/competences" element={<Knowledges />} />
                    <Route path="/competencesEK" element={<KnowledgesEK />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolioEK" element={<PortfolioEK />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contactEK" element={<ContactEK />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
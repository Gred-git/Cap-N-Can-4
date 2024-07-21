import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages";
import Search from './pages/Search';
import Challenges from './pages/Challenges';
import Forums from './pages/Forums';

import Navbar from "./components/Navbar";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/forums" element={<Forums />} />
            </Routes>
        </Router>
    );
}
 
export default App;

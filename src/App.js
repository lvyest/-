import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Camera from './components/Camera';
import OCRresult from './components/OCRresult';
import Home from './Home';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="/camera" element={<Camera />} />
                <Route path="/result" element={<OCRresult />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;

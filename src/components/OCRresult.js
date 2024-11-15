import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './GrayHeader';
import './OCRresult.css';

function OCRresult({onClick}) {
    const location = useLocation();
    const { text } = location.state || { text: '' };

    return (
        <div>
            <Header />
            <h1>성장과정</h1>
            <div className="result-container">
                <textarea readOnly value={text} className="result-textarea" />
                <button className="edit-button" onClick={onClick}>수정하기</button>        
            </div>
        </div>
    );
}

export default OCRresult;

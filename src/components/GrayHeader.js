import React, { useState } from 'react';
import './GrayHeader.css';
import menuicon from './icons/menu.png'; // 메뉴 아이콘 경로
import logoutIcon from './icons/icon-logout.png'; // 로그아웃 아이콘 경로

function GrayHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="gheader">
      <img
        src={menuicon}
        alt="아이콘"
        className="gheadericon"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li onClick={() => alert('관심채용공고')}>관심채용공고</li>
            <li onClick={() => alert('내 이력서')}>내 이력서</li>
            <li onClick={() => alert('내보낸 파일')}>내보낸 파일</li>
            <li onClick={() => alert('설정')}>설정</li>
            <li className="logout" onClick={() => alert('로그아웃')}>
              <img src={logoutIcon} alt="" className="logout-icon" />
              로그아웃
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default GrayHeader;

import logo from '../assets/img/logo.png';
import setting from '../assets/img/setting.png';
import notification from '../assets/img/notification.png';

const Header = () => {
  return (
    <header>
      <div className="header__inner">
        <div className="header__setting">
          <img src={setting} alt="설정" />
        </div>
        <div className="header__logoBox">
          <img src={logo} alt="로고" />
          <span className="header__logoBox__font">WhatShu</span>
        </div>
        <div className="header__notification">
          <img src={notification} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

import logo from '../../assets/img/logo.png';
import setting from '../../assets/img/setting.png';
import notification from '../../assets/img/notification.png';
import styles from './header.module.css';
// import { Link } from 'react-router-dom'; TODO: css 리셋하고 수정

const Header = () => {
  return (
    <header>
      <div className={styles.header__inner}>
        <div className={styles.header__setting}>
          <img src={setting} alt="설정" />
        </div>

        <div className={styles.header__logoBox}>
          <img src={logo} alt="로고" />
          <span className={styles.header__logoBox__font}>WhatShu</span>
        </div>

        <div className={styles.header__notification}>
          <img src={notification} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

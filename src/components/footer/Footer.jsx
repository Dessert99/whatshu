import users from '../../assets/img/users.png';
import calendar from '../../assets/img/calendar.png';
import userCheck from '../../assets/img/userCheck.png';
import helpCircle from '../../assets/img/helpCircle.png';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <nav className={styles.footer__inner}>
      <div className="footer__users">
        <Link to="/">
          <img src={users} alt="유저" />
        </Link>
      </div>
      <div className="footer__calender">
        <Link to="/calendar">
          <img src={calendar} alt="일정" />
        </Link>
      </div>
      <div className="footer__userCheck">
        <Link to="/userCheck">
          <img src={userCheck} alt="친구" />
        </Link>
      </div>
      <div className="footer__helpCircle">
        <Link to="/helpCircle">
          <img src={helpCircle} alt="도움" />
        </Link>
      </div>
    </nav>
  );
};

export default Footer;

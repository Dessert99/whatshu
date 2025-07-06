import users from '../assets/img/users.png';
import calendar from '../assets/img/calendar.png';
import userCheck from '../assets/img/userCheck.png';
import helpCircle from '../assets/img/helpCircle.png';

const Footer = () => {
  return (
    <nav className="footer__inner">
      <div className="footer__users">
        <img src={users} alt="유저" />
      </div>
      <div className="footer__calender">
        <img src={calendar} alt="일정" />
      </div>
      <div className="footer__userCheck">
        <img src={userCheck} alt="친구" />
      </div>
      <div className="footer__helpCircle">
        <img src={helpCircle} alt="도움" />
      </div>
    </nav>
  );
};

export default Footer;

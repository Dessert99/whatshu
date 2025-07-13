import styles from './loginPage.module.css';
import loginIcon from '../../assets/img/loginIcon.png';
import googleLogin from '../../assets/img/googleLogin.png';

const LoginPage = () => {
  return (
    <section className={styles.login__wrapper}>
      <div className={styles.login__inner}>
        <div className={styles.login__icon}>
          <img src={loginIcon} alt="로그인 아이콘" />
        </div>

        <a href={process.env.REACT_APP_Google_Login_URL}>
          <div className={styles.login__btn}>
            <img src={googleLogin} alt="로그인버튼" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default LoginPage;

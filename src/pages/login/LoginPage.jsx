import styles from './loginPage.module.css';
import loginIcon from '../../assets/img/loginIcon.png';
import googleLogin from '../../assets/img/googleLogin.png';

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = 'https://api.whatshu.com/auth/google/login';
  };

  return (
    <section className={styles.login__wrapper}>
      <div className={styles.login__inner}>
        <div className={styles.login__icon}>
          <img src={loginIcon} alt="로그인 아이콘" />
        </div>
        <div className={styles.login__btn}>
          <img src={googleLogin} alt="로그인버튼" onClick={handleLogin} />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

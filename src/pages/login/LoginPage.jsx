import { GoogleLogin } from '@react-oauth/google';
import styles from './loginPage.module.css';
import loginIcon from '../../assets/img/loginIcon.png';

const LoginPage = () => {
  return (
    <>
      <div className={styles.login__inner}>
        <div className={styles.login__icon}>
          <img src={loginIcon} alt="로그인 아이콘" />
        </div>
        <div className={styles.login__google}>
          <GoogleLogin
            shape="pill" // 둥근 모서리 옵션
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              alert('로그인 성공');
            }}
            onError={() => {
              console.log('로그인 실패 ㅠㅠ');
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;

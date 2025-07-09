import './assets/css/style.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NewEventPage from './pages/newEventPage/NewEventPage';
import GroupView from './pages/GroupView';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_Google_Client_ID}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<GroupView />} />
            <Route path="/event" element={<NewEventPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

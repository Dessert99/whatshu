import './assets/css/style.module.css';
import { Route, Routes } from 'react-router-dom';

import NewEventPage from './pages/newEventPage/NewEventPage';
import LoginPage from './pages/login/LoginPage';
import { LoginContextProvider } from './contexts/LoginContext';

import MainLayout from './layouts/MainLayout';

import GroupPage from './pages/GroupPage';
import CalendarPage from './pages/calendar/CalendarPage';
import UserCheckPage from './pages/userCheck/UserCheckPage';
import HelpCirclePage from './pages/helpCircle/HelpCirclePage';

function App() {
  return (
    <div>
      <LoginContextProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<GroupPage />} />
            <Route path="/event" element={<NewEventPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/userCheck" element={<UserCheckPage />} />
            <Route path="/helpCircle" element={<HelpCirclePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </LoginContextProvider>
    </div>
  );
}

export default App;

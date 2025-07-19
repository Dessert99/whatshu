import { Route, Routes } from 'react-router-dom';

//페이지
import NewEventPage from './pages/newEventPage/NewEventPage';
import LoginPage from './pages/login/LoginPage';
import GroupPage from './pages/GroupPage';
import CalendarPage from './pages/calendar/CalendarPage';
import UserCheckPage from './pages/userCheck/UserCheckPage';
import HelpCirclePage from './pages/helpCircle/HelpCirclePage';

//상태관리
import { LoginContextProvider } from './contexts/LoginContext';
import { EventContextProvider } from './contexts/EventContext';

//레이아웃
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div>
      <LoginContextProvider>
        <EventContextProvider>
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
        </EventContextProvider>
      </LoginContextProvider>
    </div>
  );
}

export default App;

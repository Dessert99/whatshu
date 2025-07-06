import './assets/css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomeView from './views/HomeView';
import NewEventPage from './views/NewEventPage';
import GroupView from './views/GroupView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/group" element={<GroupView />} />
          <Route path="/" element={<NewEventPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

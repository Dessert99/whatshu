import './assets/css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import NewEventPage from './views/NewEventPage';
import GroupView from './views/GroupView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GroupView />} />
          <Route path="/event" element={<NewEventPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

<<<<<<< HEAD
import './assets/css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
=======
import "./App.css";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomeView from "./views/HomeView";
import NewEventPage from "./views/NewEventPage";
>>>>>>> main

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/" element={<NewEventPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

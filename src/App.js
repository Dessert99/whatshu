import "./App.css";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomeView from "./views/HomeView";
import NewEventPage from "./views/NewEventPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/" element={<NewEventPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

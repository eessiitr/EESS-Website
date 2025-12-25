import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

//component calls
import ScrollToTop from "./components/UI/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Acads from "./components/Acads/Acads";
import Intern from "./components/Intern/Intern";
import Footer from "./components/Footer/Footer";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/eess">
        <RedirectHandler />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/About/*" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Intern/*" element={<Intern />} />
            <Route path="/Acads/*" element={<Acads />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

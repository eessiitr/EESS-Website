import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component calls
import ScrollToTop from "./components/UI/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Acads from "./components/Acads/Acads";
import Intern from "./components/Intern/Intern";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/About/*" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Intern/*" element={<Intern />} />
            <Route path="/Acads" element={<Acads />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

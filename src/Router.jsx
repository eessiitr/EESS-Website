import { createBrowserRouter } from "react-router-dom";

// layout & utils
import ScrollToTop from "./components/UI/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// pages
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Intern from "./components/Intern/Intern";
import Acads from "./components/Acads/Acads";

// layout wrapper
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Footer />
    </>
  );
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "About/*",
          element: <About />,
        },
        {
          path: "Events/*",
          element: <Events />,
        },
        {
          path: "Intern/*",
          element: <Intern />,
        },
        {
          path: "Acads/*",
          element: <Acads />,
        },
      ],
    },
  ],
  {
    basename: "/eess",
  }
);

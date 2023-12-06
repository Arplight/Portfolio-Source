// Layout
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Layout/Main/Main";
import Navbar from "./Components/Layout/Navbar/Navbar";

// Pages
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Skills from "./Pages/Skills/Skills";
import Work from "./Pages/Work/Work";

// Main Style Sheet
import "tailwindcss/tailwind.css";
import "./Styles/Main.scss";

// Template
// import Template from "./Template";

// React Router
import { Route, Routes } from "react-router-dom";

// Theme Context
import { ThemeContext } from "./Components/Contexts/ThemeProvider";
import { useContext } from "react";

// React Toastify
import "react-toastify/dist/ReactToastify.css";
import {
  DarkToastContainer,
  LightToastContainer,
} from "./Components/Contexts/ToastProvider";

// Cubes
import Cubes from "./Components/Sub_Components/Cubes/Cubes";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`top-wrapper  ${
        theme === "light" ? "light-theme" : "dark-theme"
      }`}
    >
      <Cubes />
      <div className="wrapper grid grid-rows-[auto,auto,auto,1fr] lg:grid-rows-[auto,auto,1fr] grid-cols-4 container mx-auto ">
        {theme === "dark" ? <DarkToastContainer /> : <LightToastContainer />}

        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="skills" element={<Skills />} />
            <Route path="work" element={<Work />} />
          </Route>
        </Routes>
        <Footer />
        {/* Template */}
        {/* <Template /> */}
      </div>
    </div>
  );
}

export default App;

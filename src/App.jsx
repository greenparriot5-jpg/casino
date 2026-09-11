import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import Download from "./Download/Download";

// Scroll To Top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/download" element={<Download />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
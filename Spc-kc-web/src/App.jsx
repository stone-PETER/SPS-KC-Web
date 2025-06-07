import "./App.css";
import Event from "./components/Event/event";
import Team24 from "./components/Execom/team24";
import Team23 from "./components/Execom/team23";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/about";
import Hero from "./components/hero/hero"
import Navbar from "./components/Navbar/navbar";
import Team from "./components/pages/team";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Event />
            <Footer />
          </>
        } />
        <Route path="/team" element={<Team />} />
        <Route path="/execom-23" element={<Team23 />} />
        <Route path="/execom-24" element={<Team24 />} />

      </Routes>
    </Router>
  );
}

export default App;

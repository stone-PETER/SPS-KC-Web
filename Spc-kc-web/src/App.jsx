import "./App.css";
import Event from "./components/Event/event";
import Execom from "./components/Execom/execom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/about";
import Hero from "./components/hero/hero"
import Navbar from "./components/Navbar/navbar";
import Team from "./components/pages/team";
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
          </>
        } />
        <Route path="/team" element={<Team />} />
        <Route path="/execom" element={<Execom />} />
      </Routes>
    </Router>
  );
}

export default App;

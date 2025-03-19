import "./App.css";
import Event from "./components/Event/event";
import Execom from "./components/Execom/execom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Event />
            </>
          }
        />
        <Route path="/execom" element={<Execom />} />
      </Routes>
    </Router>
  );
}

export default App;

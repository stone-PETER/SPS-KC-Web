import "./App.css";
import Event from "./components/Event/event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/about";
import Hero from "./components/hero/hero"
import Navbar from "./components/Navbar/navbar";
// import Team from "./components/pages/team";
import Footer from "./components/footer/footer";
import AllEvents from "./components/Event/allEvents";
import Newsletter from "./components/Newsletter/newsletter";
import Sbc from "./components/SBC/sbc";
import CounterSection from "./components/Counter/counter";
// import PricingPage from "./components/Pricing/pricing";
import Awards from "./components/Awards/award";
import Announcements from "./components/announcements/announcements";
import Achievements from "./components/Awards/achievements";
import PastTeam from "./components/Execom/pastTeam";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Announcements/>
            <CounterSection />
            {/* <PricingPage /> */}
            <Event />
            <Footer />
          </>
        } />
        <Route path="/team" element={<PastTeam year={2025}/>} />
        <Route path="/execom-23" element={<PastTeam year={2023} />} />
        <Route path="/execom-24" element={<PastTeam year={2024} />} />
        <Route path="/execom-22" element={<PastTeam year={2022} />} />
        <Route path="/execom-21" element={<PastTeam year={2021} />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/sbc" element={<Sbc />} />
        <Route
          path="/awards"
          element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800 p-4 sm:p-8">
              <Awards />
            </div>
          }
        />
        <Route
          path="/achievements"
          element={
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800 p-4 sm:p-8">
              <Achievements />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

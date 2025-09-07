import "./App.css";
import Event from "./components/Event/event";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO/SEO";
import { getFullUrl } from "./config/siteConfig";
import About from "./components/About/about";
import Hero from "./components/hero/hero";
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
import Team from "./components/Execom/team";
function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="IEEE SPS Kerala Chapter - Signal Processing Society"
                  description="IEEE Signal Processing Society Kerala Chapter promotes excellence in signal processing education, research, and technology in Kerala. Join our community of professionals, students, and researchers."
                  url={getFullUrl("/")}
                />
                <Hero />
                <About />
                <Announcements />

                <CounterSection />
                {/* <PricingPage /> */}
                <Event />
                <Footer />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <SEO
                  title="Present Office Bearers 2025"
                  description="Meet the current office bearers and team members of IEEE SPS Kerala Chapter for 2025."
                  url={getFullUrl("/team")}
                />
                <Team year={2025} />
              </>
            }
          />
          <Route
            path="/execom-23"
            element={
              <>
                <SEO
                  title="Office Bearers 2023"
                  description="Meet the office bearers and team members of IEEE SPS Kerala Chapter for 2023."
                  url={getFullUrl("/execom-23")}
                />
                <PastTeam year={2023} />
              </>
            }
          />
          <Route
            path="/execom-24"
            element={
              <>
                <SEO
                  title="Office Bearers 2024"
                  description="Meet the office bearers and team members of IEEE SPS Kerala Chapter for 2024."
                  url={getFullUrl("/execom-24")}
                />
                <PastTeam year={2024} />
              </>
            }
          />
          <Route
            path="/execom-22"
            element={
              <>
                <SEO
                  title="Office Bearers 2022"
                  description="Meet the office bearers and team members of IEEE SPS Kerala Chapter for 2022."
                  url={getFullUrl("/execom-22")}
                />
                <Team year={2022} />
              </>
            }
          />
          <Route
            path="/execom-21"
            element={
              <>
                <SEO
                  title="Office Bearers 2021"
                  description="Meet the office bearers and team members of IEEE SPS Kerala Chapter for 2021."
                  url={getFullUrl("/execom-21")}
                />
                <PastTeam year={2021} />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <SEO
                  title="Events"
                  description="Discover upcoming and past events organized by IEEE SPS Kerala Chapter. Join us for workshops, seminars, and technical sessions."
                  url={getFullUrl("/events")}
                />
                <AllEvents />
              </>
            }
          />
          <Route
            path="/newsletter"
            element={
              <>
                <SEO
                  title="Newsletter"
                  description="Stay updated with IEEE SPS Kerala Chapter newsletter featuring latest news, events, and achievements."
                  url={getFullUrl("/newsletter")}
                />
                <Newsletter />
              </>
            }
          />
          <Route
            path="/sbc"
            element={
              <>
                <SEO
                  title="Student Branch Chapters"
                  description="Explore IEEE SPS Student Branch Chapters under Kerala Chapter and their activities."
                  url={getFullUrl("/sbc")}
                />
                <Sbc />
              </>
            }
          />
          <Route
            path="/awards"
            element={
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800 p-4 sm:p-8">
                <SEO
                  title="Awards"
                  description="Recognition and awards received by IEEE SPS Kerala Chapter members and the chapter itself."
                  url={getFullUrl("/awards")}
                />
                <Awards />
              </div>
            }
          />
          <Route
            path="/achievements"
            element={
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800 p-4 sm:p-8">
                <SEO
                  title="Achievements"
                  description="Major achievements and milestones of IEEE SPS Kerala Chapter and its members."
                  url={getFullUrl("/achievements")}
                />
                <Achievements />
              </div>
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

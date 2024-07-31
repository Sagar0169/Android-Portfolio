import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ProjectDetail from "./components/ProjectDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillShowcase from "./components/SkillShowcase";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                {/* <Feedbacks /> */}
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </div>
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about/:id" element={<SkillShowcase />} />
      </Routes>
    </Router>
  );
};

export default App;

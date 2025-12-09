import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Hero, About, Experience, Skills, Projects, Positions, Contact, StarsCanvas, Preloader, AuthModal, UserProfile, Chatbot } from "./components";
import { useAuth } from "./context/AuthContext";
import MLProjects from "./pages/MLProjects";
import GenAIProjects from "./pages/GenAIProjects";
import DataAnalysisProjects from "./pages/DataAnalysisProjects";
import AndroidProjects from "./pages/AndroidProjects";
import WebProjects from "./pages/WebProjects";
import ToolsProjects from "./pages/ToolsProjects";

const MainContent = () => (
  <div className="relative z-0 bg-primary">
    <StarsCanvas />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Positions />
    <Contact />
  </div>
);

const AppContent = () => {
  const { isAuthModalOpen, closeAuthModal } = useAuth();

  return (
    <>
      <Preloader />
      <Navbar />
      <Chatbot />
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/profile" element={
          <div className="relative z-0 bg-primary">
            <StarsCanvas />
            <UserProfile />
          </div>
        } />
        <Route path="/projects/ml-models" element={<MLProjects />} />
        <Route path="/projects/genai" element={<GenAIProjects />} />
        <Route path="/projects/data-analysis" element={<DataAnalysisProjects />} />
        <Route path="/projects/android-apps" element={<AndroidProjects />} />
        <Route path="/projects/web-apps" element={<WebProjects />} />
        <Route path="/projects/tools" element={<ToolsProjects />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

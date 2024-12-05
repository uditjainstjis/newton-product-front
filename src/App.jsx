import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
import DynamicForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Footer from "./components/footer";
import NotExist from "./pages/notexist";
import { useEffect,useState } from "react";
function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const isChromeBrowser = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      // Check if the browser is Chrome, but exclude Edge, Opera, and other Chromium-based browsers
      return (
        userAgent.includes("chrome") &&
        !userAgent.includes("edg") && // Exclude Edge
        !userAgent.includes("opr") && // Exclude Opera
        !userAgent.includes("brave") && // Optionally Exclude Brave
        !userAgent.includes("chromium") // Exclude Chromium
      );
    };
    if (!isChromeBrowser()) {
      // If the browser is not Chrome, replace the content with a warning
      document.body.innerHTML = `
        <div style="text-align: center; padding: 50px;">
          <h1>Unsupported Browser</h1>
          <p>This website is only accessible in Google Chrome.</p>
          <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
            Download Google Chrome
          </a>
        </div>
      `;
    }
  }, []);
  if (screenWidth < 1024) {
    return (<>
              <NotExist/>
            </>
    );
  }
  const jsonData = {
    title: "damru",
    desc: "rishihood uni @ 12pm 5/12/2024",
    sequence: [
      {
        type: "Text",
        inputName: "Your name?",
        placeholder: "Aditya",
        currentId: 37594.91597730944,
      },
      {
        type: "Radio",
        inputName: "Your Section?",
        currentId: 49897.420380182135,
        placeholder: ["A", "B", "C", "D", "E"],
      },
      {
        type: "Select",
        inputName: "Your Interest?",
        placeholder: ["Frontend", "Backend", "Devops", "system Design", "blockchain"],
        currentId: 83055.67261079486,
      },
      {
        type: "Checkbox",
        inputName: "Your skills?",
        placeholder: ["Frontend", "Backend", "Devops", "system Design", "blockchain"],
        currentId: 31706.2286880565,
      },
    ],
  };
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<Events />} /> {/* Dynamic route */}
          <Route path="/events/register/:id" element={<DynamicForm formData={jsonData}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  )
}
export default App;
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

      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<Events />} /> {/* Dynamic route */}
          <Route path="/events/register/" element={<DynamicForm formData={jsonData}/>} />
          <Route path="*" element={<NotFound />} />        
        </Routes>

      </Router>
      <Footer />

    </div>
  )
}

export default App;


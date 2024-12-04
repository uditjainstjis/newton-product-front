import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
import RegistrationForm from "./components/RegistrationForm";
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
              <Navbar />
              <NotExist/>
              <Footer />
            </>
    );
  }

  

  return (
    <div>

      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<Events />} /> {/* Dynamic route */}
          <Route path="/events/register/:id" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />        
        </Routes>

      </Router>
      <Footer />

    </div>
  )
}

export default App;


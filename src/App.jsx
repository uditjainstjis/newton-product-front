import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./pages/NotFound";
import Footer from "./components/footer";


function App() {
  return (
    <div>

      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/:id" element={<Events />} /> {/* Dynamic route */}
          <Route path="/events/register" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
      <Footer />

    </div>
  )
}

export default App;


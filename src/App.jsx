import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Events from "./pages/Events"
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/register" element={<RegistrationForm/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App;


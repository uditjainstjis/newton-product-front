import EventSlider from "./components/events_ carousal/events_carousal"
import Navbar from "./components/Navbar"
import OrgLogo from "./components/OrgLogo"
import Clan from "./components/clans"
import Footer from "./components/footer"


function App() {
  return (
      <div>
        <Navbar/>
        <EventSlider/>
        <OrgLogo/>
        <Clan/>
        <Footer/>
      </div>
      
    )
}

export default App;


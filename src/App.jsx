import EventSlider from "./components/events_ carousal/events_carousal"
import Navbar from "./components/Navbar"
import OrgLogo from "./components/OrgLogo"
import Clan from "./components/clans"
import Footer from "./components/footer"
import Activities from "./components/activities"
import Leaderboard from "./components/leaderboard"

function App() {
  return (
      <div>
        <Navbar/>
        <EventSlider/>
        <OrgLogo/>
        <Activities/>
        <Clan/>
        <Leaderboard/>
        <Footer/>
      </div>
      
    )
}

export default App;


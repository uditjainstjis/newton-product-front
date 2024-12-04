import EventSlider from "../components/events_ carousal/events_carousal";
import OrgLogo from "../components/OrgLogo";
import Clan from "../components/clans";
import Footer from "../components/footer";
import Activities from "../components/activities";
import Leaderboard from "../components/leaderboard";

function Home() {
  return (
      <div>
        <EventSlider/>
        <OrgLogo/>
        <Activities/>
        <Clan/>
        <Leaderboard/>
        <Footer/>
      </div>
      
    )
}

export default Home;


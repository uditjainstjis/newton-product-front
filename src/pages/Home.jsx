import EventSlider from "../components/events_ carousal/events_carousal";
import OrgLogo from "../components/OrgLogo";
import Clan from "../components/clans";
import Activities from "../components/activities";
import Leaderboard from "../components/leaderboard";
import ClubComponent from "../components/club";

function Home() {
  return (
      <div>
        <EventSlider/>
        <OrgLogo/>
        <Activities/>
        <Clan/>
        <ClubComponent/>
        <Leaderboard/>
        
      </div>
      
    )
}

export default Home;


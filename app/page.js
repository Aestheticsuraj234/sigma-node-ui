import CEOCard from "@/Components/Home/CEOCard"
import CommunityCard from "@/Components/Home/CommunityCard"
import DarkKeyFeatureCard from "@/Components/Home/DarkKeyFeatureCard"
import FeatureComponent from "@/Components/Home/FeatureComponent"
import HomeComponent from "@/Components/Home/HomeComponent"
import MoreFeature from "@/Components/Home/MoreFeature"


const Home = () => {
  return (
    <>
    <HomeComponent/>
    <CEOCard/>
    <FeatureComponent/>
    <DarkKeyFeatureCard/>
    <MoreFeature/>
    <CommunityCard/>
    </>
    
  )
}

export default Home
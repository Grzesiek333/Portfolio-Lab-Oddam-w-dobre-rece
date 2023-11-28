import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import AboutUs from "./AboutUs";
import { WhoHelp } from "./WhoHelp";
import Contact from "./Contact";


export default function Home() {
    return (
      <>
        <HomeHeader />
        <HomeThreeColumns />
        <SimpleSteps />
        <AboutUs />
        <WhoHelp />
        <Contact />
      </>
    );
  }
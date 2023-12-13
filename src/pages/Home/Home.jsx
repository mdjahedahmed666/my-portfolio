import Bio from "../../components/Bio/Bio";
import Education from "../../components/Education/Education";
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/SKILLS.JSX";

const Home = () => {
  return (
    <div>
        <Hero/>
        <Bio/>
        <Skills/>
        <Education/>
    </div>
  )
}

export default Home;
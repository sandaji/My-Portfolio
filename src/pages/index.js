import Acomplishments from "../components/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Timeline from "../components/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;

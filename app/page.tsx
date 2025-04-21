import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Technologies from "./components/Technologies";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />

      <AnimatedSection direction="up" delay={0.2}>
        <Projects />
      </AnimatedSection>

      <AnimatedSection direction="left" delay={0.2}>
        <Timeline />
      </AnimatedSection>

      <AnimatedSection direction="right" delay={0.3}>
        <Technologies />
      </AnimatedSection>
    </div>
  );
}

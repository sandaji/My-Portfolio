import React from "react";

import { Section, SectionText, SectionTitle } from "../styles/GlobalComponents";
import Button from "../styles/GlobalComponents/Button";
import { LeftSection } from "../styles/HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of this portfolio is to showcase my compitense in the field of computer science and my level of knowlege in mahematics.
          below are some of my recent projects
        </SectionText>
        <Button onClick={props.handleClick}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

import React from "react";
import {FiCornerRightDown} from 'react-icons/fi'
import { Section, SectionText, SectionTitle } from "../styles/GlobalComponents";
import Button from "../styles/GlobalComponents/Button";
import { LeftSection } from "../styles/HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center >
         <small>Hello there,</small> <br />
          I`M a MERN Stack <br /> and PhP Developer
        </SectionTitle>
        <SectionText>
          I`M a full stack web developer with 5 years experiance in php and 2 years experiance in MERN stack.
          Below are some of my recent projects<FiCornerRightDown />
        </SectionText>
        <Button onClick={props.handleClick}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";
import { DiCssdeck } from "react-icons/di";
import { Logo } from "../assets";
import { Section, LogoName, SectionTitle } from "../styles/GlobalComponents";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "../styles/HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginLeft: "2rem",
        }}
      >
        <Image src={Logo} alt="Logo" size="3rem" />{" "}
        <span style={{ fontWeight: "700", fontSize: "2rem" }}>
          <LogoName>IJAMY {"    "}VINCENT</LogoName>
        </span>
      </Link>
    </Div1>
    <Div2 style={{ gap: "2rem" }}>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/sandaji">
        <IoLogoGithub />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <IoLogoLinkedin />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/@_ijamy">
        <IoLogoTwitter  />
      </SocialIcons>
      <SocialIcons href="https://wa.link/s08fo7">
        <IoLogoWhatsapp  />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

import React from "react";
import { BiCopyright } from "react-icons/bi";
import {
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io";
import { SocialIcons } from "../styles/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "../styles/FooterStyles";
import NavDropDown from "./DropDown";
import Button from "../styles/GlobalComponents/Button";

const Footer = (props) => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0729-887-508">+254 729 887508</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sandajivincent@gmail.com">
            <Button onClick={props.handleClick}>Send Mail</Button>
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
           Ijamy Vincent <BiCopyright /> {new Date().getFullYear()}. All Rights Reserved
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://google.com/sandaji">
            <IoLogoGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <IoLogoLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <IoLogoInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://wa.link/s08fo7">
            <IoLogoWhatsapp size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

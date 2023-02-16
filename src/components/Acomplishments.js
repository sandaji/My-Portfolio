import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from '../styles/AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 38, text: 'Github Repos', },
  { number: 10, text: 'Projects Hosted on Firebase', },
  { number: 10, text: 'Technologies Learnt', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    {/* <SectionDivider/> */}
  </Section>
);

export default Acomplishments;

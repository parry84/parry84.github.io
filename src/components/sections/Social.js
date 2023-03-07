import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as EmailLogo } from '@images/logos/email.svg';
import { ReactComponent as FacebookLogo } from '@images/logos/facebook.svg';
import { ReactComponent as LinkedinLogo } from '@images/logos/linkedin.svg';
import { ReactComponent as GithubLogo } from '@images/logos/github.svg';
import { ReactComponent as FiveHundredPxLogo } from '@images/logos/500px.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';
import { ReactComponent as YoutubeLogo } from '@images/logos/youtube.svg';
import { ReactComponent as MyHeritageLogo } from '@images/logos/myheritage.svg';

const LOGOS = [
  {
    logo: LinkedinLogo,
    link: 'https://www.linkedin.com/in/emanueleparrinello/',
  },
  {
    logo: GithubLogo,
    link: 'https://github.com/parry84',
  },
  {
    logo: FiveHundredPxLogo,
    link: 'https://500px.com/parry84',
  },
  {
    logo: FacebookLogo,
    link: 'https://www.facebook.com/emanuele.parrinello',
  },
  {
    logo: InstagramLogo,
    link: 'https://instagram.com/elparro84/',
  },
  {
    logo: YoutubeLogo,
    link: 'https://www.youtube.com/@parry84',
  },
  {
    logo: MyHeritageLogo,
    link: 'https://www.myheritage.com/site-148248461/parry-family-tree',
  },
  {
    logo: EmailLogo,
    link: '/contacts',
  },
];

const Social = () => (
  <Section id="contacts" accent>
    <StyledContainer>
      <div>
        <LogoGrid>
          {LOGOS.map(({ logo, link }) => (
            <ExternalLink key={logo} href={link}>
              {logo()}
            </ExternalLink>
          ))}
        </LogoGrid>
      </div>
      <Art>
        <StaticImage src="../../images/art/contact.png" placeholder="blurred" alt="Contacts" />
      </Art>
    </StyledContainer>
  </Section>
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;

  a {
    svg {
      width: 212px;
      height: 50px;
    }
    text-decoration: none;
    background: unset;
    text-shadow: unset;
    // TODO refactor with .no-tufte-underline
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 400px;
  position: absolute;
  right: 60%;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    display: none;
  }
`;

export default Social;

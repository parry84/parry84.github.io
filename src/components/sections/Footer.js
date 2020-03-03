import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import GithubIcon from '@static/icons/github.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import FacebookIcon from '@static/icons/facebook.svg';
import FiveHundredPxIcon from '@static/icons/500px.svg';

const SOCIAL = [
  {
    icon: GithubIcon,
    link: 'https://github.com/parry84',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/elparro84/',
  },
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/emanuele.parrinello',
  },
  {
    icon: FiveHundredPxIcon,
    link: 'https://500px.com/parry84',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "lightbulb" }
        ) {
          publicURL
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <video id="background-video-1" playsinline autoPlay loop muted webkit-playsinline width="480">
             <source src={data.art_pot.publicURL} type="video/mp4" />
          </video>
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>Contacts</h2>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;

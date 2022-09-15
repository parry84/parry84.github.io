import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const SOCIAL = [];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(sourceInstanceName: { eq: "art" }, name: { eq: "lightbulb" }) {
          publicURL
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        <Art>
          <video
            id="background-video-1"
            playsInline
            autoPlay
            loop
            muted
            webkit-playsinline="true"
            width="480"
          >
            <source src={data.art_pot.publicURL} type="video/mp4" />
          </video>
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>© Emanuele Parrinello 2022</h2>
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

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  ${(props) => props.theme.font_size.small};
  color: ${(props) => props.theme.color.black.regular};

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

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;

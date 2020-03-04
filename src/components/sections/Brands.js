import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as FacebookLogo } from '@images/logos/facebook.svg';
import { ReactComponent as LinkedinLogo } from '@images/logos/linkedin.svg';
import { ReactComponent as GithubLogo } from '@images/logos/github.svg';
import { ReactComponent as FivehundredPxLogo } from '@images/logos/500px.svg';
import { ReactComponent as NikeLogo } from '@images/logos/nike.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';

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
    logo: FivehundredPxLogo,
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
];

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="brands" accent>
        <StyledContainer>
          <div>
            <h1>Follow me</h1>
            <LogoGrid>
              {LOGOS.map(({ logo, link }) => (
                <ExternalLink href={link}>{logo()}</ExternalLink>
              ))}
            </LogoGrid>
          </div>
          <Art>
            <Img fluid={data.art_story.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 212px;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 400px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;

import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "travel" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Hi</h2>
              <p>
                My name is Emanuele Parrinello. I live in Milan, Italy.
                I moved here in 2010 just after graduating in Computer Engineering.
                During these years I worked as a developer, with a focus
                on digital electronics, cryptography and cybersecurity.
              </p>
            </div>
            <Art>
              <GatsbyImage image={data.art_fast.childImageSharp.gatsbyImageData} alt="" />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <GatsbyImage image={data.art_learn.childImageSharp.gatsbyImageData} alt="" />
            </Art>
            <div>
              <h2>Crema</h2>
              <p>
                I was born in Crema. I've always been a curious person
                and an avid learner. Programming, physics, energy
                are among the topics that intrigue me.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Around the world</h2>
              <p>
                I often need to flee the chaotic streets of Milan,
                just to get lost in the <a href="/outdoor-log">wilderness of the nearby Alps</a>.
                I always carry my reflex with me.
                My dream is to see the Aurora Borealis some day.
              </p>
            </div>
            <Art>
              <GatsbyImage image={data.art_ideas.childImageSharp.gatsbyImageData} alt="" />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;

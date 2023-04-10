import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// import { Section, Container } from '@components/global';
import * as styles from '@sections/About.module.scss';

const About = () => (
  <div className="section" id="about">
    <div className="container">
      <div className={styles.grid}>
        <div>
          <h2>Hi</h2>
          <p>
            My name is Emanuele Parrinello. I live in Milan, Italy. I moved here in 2010 just after
            graduating in Computer Engineering. During these years I worked as a developer, with a
            focus on digital electronics, cryptography and cybersecurity.
          </p>
        </div>
        <div className={styles.art}>
          <StaticImage src="../../images/art/fast.png" placeholder="blurred" alt="fast" />
        </div>
      </div>
      <div className={styles.grid} data-inverse>
        <div className={styles.art}>
          <StaticImage
            src="../../images/art/learn_yourself.png"
            placeholder="blurred"
            alt="learn"
          />
        </div>
        <div>
          <h2>Crema</h2>
          <p>
            I was born in Crema. I've always been a curious person and an avid learner.{' '}
            <a href="/notes">On these pages</a>, I share my reflections on life, technology, and
            more.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <h2>Around the world</h2>
          <p>
            I often need to flee the chaotic streets of Milan, just to get lost in the{' '}
            <a href="/outdoor-log">wilderness of the nearby Alps</a>. I always carry my reflex with
            me. My dream is to see the Aurora Borealis some day.
          </p>
        </div>
        <div className={styles.art}>
          <StaticImage src="../../images/art/travel.png" placeholder="blurred" alt="travel" />
        </div>
      </div>
    </div>
  </div>
);

const Grid = (props) => <>{props.children}</>;
const Art = (props) => <>{props.children}</>;
const Section = (props) => <>{props.children}</>;
const Container = (props) => <>{props.children}</>;

/*const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${(props) =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${(props) =>
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
*/

export default About;

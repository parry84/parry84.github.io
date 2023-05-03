import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Section } from '@components/Section';
import { Container } from '@components/Container';
import * as styles from '@sections/About.module.scss';

const About = () => (
  <Section id="about">
    <Container>
      <div className={styles.grid}>
        <div>
          <h2>Hi</h2>
          <p>
            My name is Emanuele Parrinello. I live in Milan, Italy. I moved here in 2010 just after
            graduating in Computer Engineering. During these years I worked as a{' '}
            <Link to="/radar/">developer</Link>, with a focus on digital electronics, cryptography
            and cybersecurity.
          </p>
        </div>
        <figure className={styles.art}>
          <StaticImage src="../../images/art/fast.png" placeholder="blurred" alt="fast" />
        </figure>
      </div>
      <div className={styles.grid} data-inverse>
        <figure className={styles.art}>
          <StaticImage
            src="../../images/art/learn_yourself.png"
            placeholder="blurred"
            alt="learn"
          />
        </figure>
        <div>
          <h2>Crema</h2>
          <p>
            I was born in Crema. I've always been a curious person and an avid learner.{' '}
            <Link to="/notes/">On these pages</Link>, I share my reflections on life, technology,
            and more.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <h2>Around the world</h2>
          <p>
            I often need to flee the chaotic streets of Milan, just to get lost in the{' '}
            <Link to="/outdoor-log/">wilderness of the nearby Alps</Link>. I always carry my reflex
            with me. My dream is to see the Aurora Borealis some day.
          </p>
        </div>
        <figure className={styles.art}>
          <StaticImage src="../../images/art/travel.png" placeholder="blurred" alt="travel" />
        </figure>
      </div>
    </Container>
  </Section>
);

export default About;

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from '@components/Container';
import * as styles from '@sections/Header.module.scss';

const Header = () => (
  <header className={styles.headerWrapper}>
    <Container>
      <div className={styles.grid}>
        <figure className={styles.art}>
          <StaticImage
            src="../../images/art/me.png"
            placeholder="blurred"
            alt="Emanuele Parrinello"
          />
        </figure>
        <div className={styles.text}>
          <h1>
            Hey,
            <br />
            I’m Emanuele.
            <br />
            Welcome!
          </h1>
          <br />
        </div>
      </div>
    </Container>
  </header>
);

export default Header;

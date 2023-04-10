import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from '@sections/Header.module.scss';

const Header = () => (
  <div className={styles.headerWrapper}>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.art}>
          <StaticImage
            src="../../images/art/me.png"
            placeholder="blurred"
            alt="Emanuele Parrinello"
          />
        </div>
        <div className={styles.text}>
          <h1>
            Hey,
            <br />
            I'm Emanuele.
            <br />
            Welcome!
          </h1>
          <br />
        </div>
      </div>
    </div>
  </div>
);

const Art = (props) => <>{props.children}</>;
const HeaderWrapper = (props) => <>{props.children}</>;
const Grid = (props) => <>{props.children}</>;
const Text = (props) => <>{props.children}</>;

/*const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 80%;
  margin: 0;

  > div {
    width: 100%;
    margin-bottom: 25%;
    margin-left: 25%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: start;
  }
`;*/

export default Header;

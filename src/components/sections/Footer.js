import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '@components/Container';
import ExternalLink from '@common/ExternalLink';
import * as styles from '@sections/Footer.module.scss';

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
        <figure className={styles.art}>
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
        </figure>
        <footer className={styles.footerWrapper}>
          <Container>
            <div className={styles.styledContainer}>
              <div className={styles.copyright}>
                <h2>© Emanuele Parrinello 2023</h2>
                <div>
                  Illustration(s) from{' '}
                  <ExternalLink href="https://absurd.design">absurd.design</ExternalLink>.
                </div>
              </div>
              <div className={styles.socialIcons}>
                {SOCIAL.map(({ icon, link }) => (
                  <ExternalLink href={link}>
                    <img src={icon} alt="link" />
                  </ExternalLink>
                ))}
              </div>
            </div>
          </Container>
        </footer>
      </React.Fragment>
    )}
  />
);

export default Footer;

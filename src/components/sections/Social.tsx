import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import ExternalLink from '@common/ExternalLink';
import { Link } from 'gatsby';
import { Container } from '@components/Container';
import { Section } from '@components/Section';

import { ReactComponent as EmailLogo } from '@images/logos/email.svg';
import { ReactComponent as FacebookLogo } from '@images/logos/facebook.svg';
import { ReactComponent as LinkedinLogo } from '@images/logos/linkedin.svg';
import { ReactComponent as GithubLogo } from '@images/logos/github.svg';
import { ReactComponent as FiveHundredPxLogo } from '@images/logos/500px.svg';
import { ReactComponent as InstagramLogo } from '@images/logos/instagram.svg';
import { ReactComponent as YoutubeLogo } from '@images/logos/youtube.svg';
import { ReactComponent as MyHeritageLogo } from '@images/logos/myheritage.svg';

import * as styles from '@sections/Social.module.scss';

const SOCIALS = [
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
];

const Social = () => (
  <Section id="contacts" accent="primary">
    <Container>
      <div className={styles.styledContainer}>
        <ul className={styles.logoGrid}>
          {[
            ...SOCIALS.map(({ logo, link }, i) => (
              <li key={i}>
                <ExternalLink href={link}>{React.createElement(logo)}</ExternalLink>
              </li>
            )),
            <li key="contacts">
              <Link to="/contacts/">
                <EmailLogo />
              </Link>
            </li>,
          ]}
        </ul>
      </div>
    </Container>
  </Section>
);

export default Social;

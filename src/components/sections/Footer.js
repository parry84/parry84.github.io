import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
        <div className={styles.art}>
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
        </div>
        <div className={styles.footerWrapper}>
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
        </div>
      </React.Fragment>
    )}
  />
);

const Art = (props) => <>{props.children}</>;
const FooterWrapper = (props) => <>{props.children}</>;
const StyledContainer = (props) => <>{props.children}</>;
const Copyright = (props) => <>{props.children}</>;
const SocialIcons = (props) => <>{props.children}</>;

/*const SocialIcons = styled.div`
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
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-bottom: 48px;
  margin-top: 48px;
  max-width: 100%;
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
*/
export default Footer;

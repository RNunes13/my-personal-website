
import React from 'react';
import LogoWhite from '../../assets/images/logo-w.png';
import { Social, Container } from '../index';
import { withNamespaces } from 'react-i18next';
import './Footer.scss';

function Footer({ t }: any) {
  return (
    <footer className="rn-footer">
      <Container className="rn-footer__container">
        <div className="left">
          <p className="copyright">
            &copy; { new Date().getFullYear() } RNunes. { t('footer.copyright') }
          </p>
        </div>
        <div className="middle">
          <img
            className="logo"
            src={ LogoWhite }
            alt="Rodrigo Nunes | Web Developer"
            title="Rodrigo Nunes | Web Developer"
          />
        </div>
        <div className="right">
          <Social />
        </div>
      </Container>
    </footer>
  );
}

export default withNamespaces()(Footer);

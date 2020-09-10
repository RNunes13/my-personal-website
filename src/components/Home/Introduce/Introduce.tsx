
import React from 'react';
import Container from '../../Container/Container';
import ProfileImage from '../../../assets/images/profile.jpg'
import { withNamespaces } from 'react-i18next';
import './Introduce.scss';

function Introduce({ t }: any) {
  function getGreetingText(): string {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      return 'greeting.morning'
    }

    if (hours >= 12 && hours < 18) {
      return 'greeting.afternoon'
    }

    if (hours >= 18 || hours < 5) {
      return 'greeting.night'
    }

    return '';
  }

  return (
    <section className="rn-home__introduce">
      <Container className="rn-home__introduce--container">
        <div className="left">
          <h1 className="greeting rn-title">
            <p>{ t(getGreetingText()) },</p>
            <p>{ t('greeting.pronoun') } Rodrigo Nunes</p>
          </h1>
          <p className="short-intro rn-title">
            { t('greeting.grammaticalClass') } <span>{ t('greeting.work') }</span>.
          </p>
        </div>
        <div className="right">
          <div className="image_banner">
            <img className="profile" src={ ProfileImage } alt="Rodrigo Nunes" />
            <div className="circles">
              { Array(8).fill(null).map((_, i) => <span key={ i } />) }
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default withNamespaces()(Introduce);

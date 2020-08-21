
import React from 'react';
import Container from '../../Container/Container';
import ProfileImage from '../../../assets/images/placeholder-profile.jpg'
import './Introduce.scss';

function Introduce() {
  function getGreetingText(): string {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
      return 'Good morning'
    }

    if (hours >= 12 && hours < 18) {
      return 'Good afternoon'
    }

    if (hours >= 18 || hours < 5) {
      return 'Good night'
    }

    return '';
  }

  return (
    <div className="rn-home__introduce">
      <Container className="rn-home__introduce--container">
        <div className="left">
          <h1 className="greeting rn-title">
            <p>{ getGreetingText() },</p>
            <p>I'm Rodrigo Nunes</p>
          </h1>
          <p className="short-intro rn-title">
            A <span>web developer</span>.
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
    </div>
  )
}

export default Introduce;

import React from 'react';
import propTypes from 'prop-types';
import { ReactComponent as Illustration } from '../assets/images/about.svg';
import Logo from '../assets/images/logo.png';
import aboutData from './data';
import Header from '../../components/Header';

import './about.css';

const About = props => {
  const {
    history: { goBack },
  } = props;
  return (
    <>
      <Header text="About" handleBack={goBack} />
      <div className="about">
        <Illustration />
        {aboutData.map(data => (
          <div key={data.id}>
            <p className="about__title">{data.title}</p>
            <p className="about__content">{data.descrption}</p>
          </div>
        ))}
        <img src={Logo} alt="app-logo" className="about__img" />
      </div>
    </>
  );
};

About.propTypes = {
  history: propTypes.shape({
    goBack: propTypes.func.isRequired,
  }).isRequired,
};
export default About;

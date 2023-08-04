import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="mzk__header section__padding" id="home">
    <div className="mzk__header-content">
      <h1 className="gradient__text">Meezak welcomes you to the most efficient Geotechnics firm</h1>
      <p>Your reliable geotechnics experts, providing innovative solutions for soil analysis, foundation design, and slope stability. From construction projects to environmental assessments, we ensure the solid ground beneath your ambitions</p>

      <div className="mzk__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="mzk__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="mzk__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
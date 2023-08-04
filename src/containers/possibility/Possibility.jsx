import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="mzk__possibility section__padding" id="possibility">
    <div className="mzk__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="mzk__possibility-content">
      <h4>Meezak has you covered</h4>
      <h1 className="gradient__text">You just have to dream it,we <br /> will lay the foundation</h1>
      <p>We are your trusted partner in geotechnical solutions.With a team of skilled Engineers and advanced Technology, we offer comprehensive services, including soil analysis, foundation design, slope stability and ground improvement. Our commitment to excellence ensures the safe and successful execution of your project, delivering a solid foundation for your aspirations.</p>
      <h4>Get in touch with us</h4>
    </div>
  </div>
);

export default Possibility;
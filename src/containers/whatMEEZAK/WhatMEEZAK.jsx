import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatMEEZAK.css';

const WhatMEEZAK = () => (
  <div className="mzk__whatmzk section__margin" id="wmzk">
    <div className="mzk__whatmzk-feature">
      <Feature title="About Meezak" text="Meezak Geotechnics:Lagos, Nigeria's premier firm for comprehensive geotechnical services. Our expert engineers and advanced technology ensure project success through rigorous soil investigations, foundation assessments, and ground stability analyses. Trust Meezak for a solid and seamless project execution." />
    </div>
    <div className="mzk__whatmzk-heading">
      <h1 className="gradient__text">If it is not excellent, we didn't build it.</h1>
      <p>Get in Touch</p>
    </div>
    <div className="mzk__whatmzk-container">
      <Feature title="Soil Mechanics" text="Comprehensive soil mechanics analysis to optimize foundation design and ensure stability for all types of construction projects." />
      <Feature title="Foundation Engineering" text="Tailored foundation engineering solutions such as pilling designed to support and safeguard structures, paving the way for successful and durable construction endeavors " />
      <Feature title="Geotechnical investigation" text="In-depth site assessments for valuable soil and geological data informing engineering decisions and risk management" />
    </div>
  </div>
);

export default WhatMEEZAK;

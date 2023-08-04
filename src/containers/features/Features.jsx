import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Slope Stability Analysis',
    text: 'Evaluating the stability of natural and man-made slopes to mitigate risks of landslides and soil failures  .',
  },
  {
    title: 'Earthquake Engineering',
    text: 'Assessing the seismic vulnerability of structures and recommending measures to enhance their resilence against earthquakes.',
  },
  {
    title: 'Ground Improvement Techniques',
    text: 'Installing monitoring systems to track ground movement, settlement and other geotechnical parameters during construction and throughout the structure lifespan.',
  },
  {
    title: 'Geotechnical Instrumentation and Monitoring',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="mzk__features section__padding" id="features">
    <div className="mzk__features-heading">
      <h1 className="gradient__text">Let us help you attain excellence with formidable structures that will stand the test of time.</h1>
      <p>Book us for your geotechnical need now!</p>
    </div>
    <div className="mzk__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
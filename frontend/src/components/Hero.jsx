

import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../react image/for.png'
import img2 from '../react image/five.png'
import img3 from '../react image/sixx.png'
import img4 from '../react image/girl.png'
import img5 from '../react image/seven.png'
import img6 from '../react image/drlogo.png'

const Slider = () => {
  const images = [
img1,
img2,
img3,
img4,
img5
  ];

  const backgrounds = [
    'radial-gradient(50% 50% at 50% 50%, #C7F6D0 0%, #7CB686 92.19%)',
    'radial-gradient(50% 50% at 50% 50%, #D1E4F6 0%, #5F9CCF 100%)',
    'radial-gradient(50% 50% at 50% 50%, #FFB7B2 0%, #ED746E 100%)',
    'radial-gradient(50% 50% at 50% 50%, #D7D7D7 0%, #979797 100%)',
    'radial-gradient(50% 50% at 50% 50%, #6B6B6B 0%, #292929 100%)'
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateSlider();
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  const updateSlider = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getClassName = (index) => {
    if (index === imageIndex) return 'active';
    if (index === (imageIndex - 1 + images.length) % images.length) return 'previous';
    if (index === (imageIndex + 1) % images.length) return 'next';
    return 'inactive';
  };

  return (
    <section className="slider-main" style={{ background: backgrounds[imageIndex] }}>
      <div className="container">
        <div className="logo">
          <a href="#"><img src={img6} alt="logo" /></a>
        </div>
        <div className="slider-content-wrap">
          <div className="slider-content">
          <h2 className="heading-style-2" >Healing is a matter of time, but it is  <br />sometimes also a matter of opportunity.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, ex distinctio rerum eius eua veniam minima in, aliquam enim a inventore <br />ipsam nam dolore numquam rem. Ea totam nostrum dolores incidunt assumenda maxime nam s </p>
          <h3 className="heading-style-2" style={{marginLeft:"-50rem"}}>$779.99/Appointment</h3>
            <div className="social-icons">
              <a href="#"><img src="https://www.yudiz.com/codepen/headphone-slider/instagram-icon.svg" alt="instagram" /></a>
              <a href="#"><img src="https://www.yudiz.com/codepen/headphone-slider/facbook-icon.svg" alt="facebook" /></a>
              <a href="#"><img src="https://www.yudiz.com/codepen/headphone-slider/twiter-icon.svg" alt="twitter" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-images">
        {images.map((src, index) => (
          <img key={index} className={`slider-image ${getClassName(index)}`} src={src} alt="headphone" />
        ))}
      </div>
    </section>
  );
};

export default Slider;

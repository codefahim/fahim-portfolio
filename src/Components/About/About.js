import React from 'react';
import './About.css';
import image from '../../Images/download.png';
import resume from '../../File/Abdullah_al_fahim.pdf';
const About = () => {
  return (
    <section className='about' id='About' style={{ fontFamily: 'Georgia' }}>
      <h3 className='m-5 p-5'>ABOUT ME</h3>
      <div className='row w-100'>
        <div className='col-md-6'>
          <div className='about-image'>
            <img src={image} alt='fahim' className='img img-fluid' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='about-text'>
            <div className='text-justify'>
              HELLO, I'M A WEB DESIGNER & FRONT END DEVELOPER FROM CHITTAGONG,
              BANGLADESH. I HOLD DEGREE OF WEB DESIGN FROM SOFTTECH-IT AND
              PROGRAMMING HERO.
            </div>
          </div>
          <div className='about-text'>
            <ul className='about-ul text-justify'>
              <li>
                Always ready to prove myself through work and responsibility.
              </li>{' '}
              <li>To establish myself as an outstanding performer, </li>
              <li> discovering something new every single day is </li>
              <li>
                one of my favorite parts of being a High Level programmer.
              </li>
            </ul>
          </div>
          <div className='btn-div text-center'>
            {' '}
            <a href={resume} className='download-link' download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

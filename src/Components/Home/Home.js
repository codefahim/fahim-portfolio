import React from 'react';
import './Home.css';
import Typical from 'react-typical';
import image from '../../Images/fahim.png';

const Home = () => {
  return (
    <section
      className='parallax-window Home'
      data-parallax='scroll'
      data-image-src={image}
      data-z-index='-1'
    >
      <div className='colorOvely'>
        <h1 className='text text-uppercase'>I'm abdullah al Fahim</h1>

        <p className='p-5'>
          <Typical
            steps={[
              "I'M a ReactJS Developer",
              3000,
              'I have been completed 5+ project',
              3000,
              'I have more than 1 year of coding  experience ',
              3000,
              "I'M familiar with PHP,SQL,Redux,axios,WordPress and More.",
              3000,
            ]}
            loop={Infinity}
            wrapper='code'
          />
        </p>
      </div>
    </section>
  );
};

export default Home;

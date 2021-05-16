import React from 'react';
import './Home.css';
import Typical from 'react-typical';

const Home = () => {
  return (
    <section
      id='home'
      className='parallax-window Home'
      data-parallax='scroll'
      data-z-index='-1'
    >
      <div className='colorOvely'>
        <h1 className='text text-uppercase banner'>hi,I'm Fahim</h1>

        <p className='p-5 '>
          <Typical
            className='moveText'
            steps={[
              "I'M a JavaScript Developer",
              3000,
              'Love To write Blog',
              3000,
              'Familiar with WordPress',
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

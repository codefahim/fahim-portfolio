import React from 'react';
import { Card } from 'react-bootstrap';
import './projects.css';
import fixer from '../../Images/smartFixer.png';
import emart from '../../Images/emart.png';
import rider from '../../Images/rider.png';
import emajon from '../../Images/ema-jon.png';
const Projects = () => {
  return (
    <section className='project container'>
      <h3 className='text-uppercase my-5'>My Recent Projects</h3>
      <div className='row w-100 m-auto'>
        <div className='col-md-4 my-5 m-auto '>
          <Card className='effect' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={fixer} />
            <Card.Body>
              <Card.Title>Smart Fixer</Card.Title>
              <Card.Text className='text-justify'>
                Mobile service providing website. It's a FullStack Project where
                you can buy service, post review and pay service cost. Dashboard
                For User and Admin.
              </Card.Text>
              <div className='py-4'>
                {' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='download-link'
                  href='https://github.com/codefahim/Smart-Fixer-Client'
                >
                  GitHub
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://smartfixer-e52eb.web.app/'
                  className='download-link mx-4'
                >
                  Live
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4 my-5'>
          <Card className='effect' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={emart} />
            <Card.Body>
              <Card.Title>Emart</Card.Title>
              <Card.Text className='text-justify'>
                Ecommerce Shopping website. It's a FullStack Project where you
                can buy Product.Admin Post Product and Delete Product.
              </Card.Text>
              <div className='py-4'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='download-link'
                  href='https://github.com/codefahim/Smart-Fixer-Client'
                >
                  GitHub
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://emart-38975.web.app/'
                  className='download-link mx-4'
                >
                  Live
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4 my-5'>
          <Card className='effect' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={emajon} />
            <Card.Body>
              <Card.Title>Ema-jon</Card.Title>
              <Card.Text className='text-justify'>
                EmaJon, the Hand tools of all new web developers.
              </Card.Text>
              <div className='py-4'>
                {' '}
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='download-link'
                  href='https://github.com/codefahim/Ema-john-by-fahim'
                >
                  GitHub
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://ema-john.firebaseapp.com/'
                  className='download-link mx-4'
                >
                  Live
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4 my-5'>
          <Card className='effect' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={rider} />
            <Card.Body>
              <Card.Title>Dream City Riders</Card.Title>
              <Card.Text className='text-justify'>
                Choose A vehicle (Tran,Bus or Bike). Select Destination From Map
                and Go.
              </Card.Text>
              <div className='py-4'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='download-link'
                  href='https://github.com/codefahim/dreamCity-riders'
                >
                  GitHub
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://dreamcity-riders.web.app/'
                  className='download-link mx-4'
                >
                  Live
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;

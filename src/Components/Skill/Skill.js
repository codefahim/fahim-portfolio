import React from 'react';
import './Skill.css';
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJqueryLogo,
  DiWordpress,
  DiBootstrap,
} from 'react-icons/di';
const Skill = () => {
  return (
    <section className='skills'>
      <div className='container'>
        <h2 className='mt-5 p-5 text-uppercase'>Skills</h2>
        <div className='row w-100'>
          <div className='col-md-4 d-flex'>
            <div>
              <DiReact className='icon' />
            </div>
            <div>
              <h4 className='text-justify mx-4'>ReactJS</h4>
              <p className='description text-justify mx-4'>
                ReactJs, I have been Done with More Than Five Project With React
                JS.
              </p>
            </div>
          </div>

          <div className='col-md-4 d-flex'>
            <div>
              <DiNodejs className='icon' />
            </div>
            <div>
              <h4 className='text-justify mx-4'>NodeJS</h4>
              <p className='description text-justify mx-4'>
                Completed CRUD Operations with Help of NodeJS.O! Thanks To
                heroku.com.
              </p>
            </div>
          </div>

          <div className='col-md-4 d-flex'>
            <div>
              <DiMongodb className='icon' />
            </div>
            <div>
              <h4 className='text-justify mx-4'>MongoDB</h4>
              <p className='description text-justify mx-4'>
                Most Helping Technology to store Data.I also can handle mySQL
                DataBase.
              </p>
            </div>
          </div>
        </div>

        <div className='row w-100 mt-5'>
          <div className='col-md-4 d-flex'>
            <div>
              <DiJqueryLogo className='icon' />
            </div>
            <div>
              <h4 className='text-justify mx-4'>Jquery</h4>
              <p className='description text-justify mx-4'>
                With This JavaScript library,implement some of my Wordpress
                Project.
              </p>
            </div>
          </div>

          <div className='col-md-4 d-flex'>
            <div>
              <DiWordpress className='icon' />
            </div>
            <div>
              <h4 className='text-justify mx-4'>WordPress</h4>
              <p className='description text-justify mx-4'>
                Just Download,install and Choose Your Lovely Theme. If You need
                to edit,Customize than just Call me!
              </p>
            </div>
          </div>

          <div className='col-md-4 d-flex'>
            <div>
              <DiBootstrap className='icon' />
            </div>
            <div>
              <h4 className='text-justify mx-4'>Bootstrap</h4>
              <p className='description text-justify mx-4'>
                Without Bootstrap,CSS make me Crying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

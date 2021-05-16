import React from 'react';
import { Card } from 'react-bootstrap';
import blogOne from '../../Images/blogOne.jfif';
import blogTwo from '../../Images/blogTwo.jfif';
import blogThree from '../../Images/blogThree.jfif';
import './Blog.css';
const Blog = () => {
  return (
    <section className='Blog' id='Blog' style={{ fontFamily: 'Georgia' }}>
      <h3 className='text-uppercase py-5'>recent blog</h3>
      <div className='container'>
        <div className='row w-100 m-auto'>
          <div className='col-md-4 my-5 m-auto '>
            <Card className='effect card my-2' style={{ width: '18rem' }}>
              <div className='imageHolder'>
                <figure>
                  <Card.Img variant='top' src={blogOne} className='blogImage' />
                </figure>
              </div>
              <Card.Body>
                <Card.Title>
                  <small>Introduction to ReactJs</small> <br />
                  <span className='postTime'>
                    POSTED BY{' '}
                    <a href='https://codefahim.medium.com/'>
                      Abdullah al Fahim
                    </a>{' '}
                    | 7 May 2021
                  </span>
                </Card.Title>
                <Card.Text className='text-justify'>
                  Introduction to ReactJs. Basic Knowledge share about react.
                  <button className='link-btn'>
                    <a href='https://codefahim.medium.com/introduction-to-reactjs-eaea260ed819'>
                      Read More
                    </a>
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4 my-5 m-auto'>
            <Card className='effect card  my-2' style={{ width: '18rem' }}>
              <div className='imageHolder'>
                <figure>
                  <Card.Img variant='top' src={blogTwo} className='blogImage' />
                </figure>
              </div>
              <Card.Body>
                <Card.Title>
                  <small>JavaScript Summary</small> <br />
                  <span className='postTime'>
                    POSTED BY{' '}
                    <a href='https://codefahim.medium.com/'>
                      Abdullah al Fahim
                    </a>{' '}
                    | 6 May 2021
                  </span>
                </Card.Title>
                <Card.Text className='text-justify'>
                  JavaScript Summary. 10 common facets about JavaScript.
                  <button className='link-btn'>
                    <a href='https://codefahim.medium.com/javascript-summary-7e765ece2e99'>
                      Read More
                    </a>
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4 my-5 m-auto'>
            <Card className='effect card  my-2' style={{ width: '18rem' }}>
              <div className='imageHolder'>
                <figure>
                  <Card.Img
                    variant='top'
                    src={blogThree}
                    className='blogImage'
                  />
                </figure>
              </div>
              <Card.Body>
                <Card.Title>
                  <small>Interview questions of javascript</small> <br />
                  <span className='postTime'>
                    POSTED BY{' '}
                    <a href='https://codefahim.medium.com/'>
                      Abdullah al Fahim
                    </a>{' '}
                    | 8 May 2021
                  </span>
                </Card.Title>
                <Card.Text className='text-justify'>
                  Some Common Interview Question for JavaScript Developer.
                  <button className='link-btn'>
                    <a href='https://codefahim.medium.com/interview-questions-of-javascript-ba5f6bf541ff'>
                      Read More
                    </a>
                  </button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

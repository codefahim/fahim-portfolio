import React from 'react';
import { Card } from 'react-bootstrap';
import blogOne from '../../Images/blogOne.jfif';
import blogTwo from '../../Images/blogTwo.jfif';
import blogThree from '../../Images/blogThree.jfif';
import './Blog.css';
const Blog = () => {
  return (
    <section className='Blog'>
      <h3 className='text-uppercase py-5'>recent blog</h3>
      <div className='container'>
        <div className='row w-100'>
          <div className='col-md-4 my-5 m-auto '>
            <Card className='effect card' style={{ width: '18rem' }}>
              <div className='imageHolder'>
                <figure>
                  <Card.Img variant='top' src={blogOne} className='blogImage' />
                </figure>
              </div>
              <Card.Body>
                <Card.Title>
                  <small>STANDARD POST WITH PICTURE</small> <br />
                  <span className='postTime'>
                    POSTED BY MICHAEL FREEMON | 10 JANUARY 2015
                  </span>
                </Card.Title>
                <Card.Text className='text-justify'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tincidunt quam auctor laoreet convallis.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4 my-5 m-auto '>
            <Card className='effect card' style={{ width: '18rem' }}>
              <div className='imageHolder'>
                <figure>
                  <Card.Img variant='top' src={blogTwo} className='blogImage' />
                </figure>
              </div>
              <Card.Body>
                <Card.Title>
                  <small>STANDARD POST WITH PICTURE</small> <br />
                  <span className='postTime'>
                    POSTED BY MICHAEL FREEMON | 10 JANUARY 2015
                  </span>
                </Card.Title>
                <Card.Text className='text-justify'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tincidunt quam auctor laoreet convallis.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4 my-5 m-auto '>
            <Card className='effect card' style={{ width: '18rem' }}>
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
                  <small>STANDARD POST WITH PICTURE</small> <br />
                  <span className='postTime'>
                    POSTED BY MICHAEL FREEMON | 10 JANUARY 2015
                  </span>
                </Card.Title>
                <Card.Text className='text-justify'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tincidunt quam auctor laoreet convallis.
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

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
const Header = () => {
  return (
    <div>
      <Navbar
        expand='lg'
        className='container-fluid'
        style={{ fontFamily: 'Georgia' }}
      >
        <Navbar.Brand href='#home' style={{ fontFamily: 'autography' }}>
          FAHIM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#About'>About</Nav.Link>
            <Nav.Link href='#Skills'>Skills</Nav.Link>
            <Nav.Link href='#Project'>Project</Nav.Link>
            <Nav.Link href='#Blog'>Blog</Nav.Link>
            <Nav.Link href='#Contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

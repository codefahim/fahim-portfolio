import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
const Header = () => {
  return (
    <div>
      <Navbar expand='lg' className='container'>
        <Navbar.Brand href='#home'>FAHIM</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <Nav.Link href='#link'>Skills</Nav.Link>
            <Nav.Link href='#link'>Project</Nav.Link>
            <Nav.Link href='#link'>Blog</Nav.Link>
            <Nav.Link href='#link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

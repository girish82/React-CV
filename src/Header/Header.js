import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Route, NavLink } from 'react-router-dom';
import General from '../General/General';
import Education from '../Education/Education';
import Experiance from '../Experiance/Experiance';
import Summary from '../Summary/Summary';

const Header = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
        <Navbar.Brand>
        <Nav.Link>
            <NavLink
              className='navClass'
              to='/General'
            >
              {props.title}
            </NavLink>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-auto'>
          <Nav.Link>
            <NavLink
              className='navClass'
              activeClassName='navActive'
              to='/General'
            >
              General
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className='navClass'
              activeClassName='navActive'
              to='/Education'
            >
              Education
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className='navClass'
              activeClassName='navActive'
              to='/Experiance'
            >
              Experiance
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className='navClass'
              activeClassName='navActive'
              to='/Summary'
            >
              Summary
            </NavLink>
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path='/General' component={General} exact></Route>
      <Route path='/Education' component={Education} exact></Route>
      <Route path='/Experiance' component={Experiance} exact></Route>
      <Route path='/Summary' component={Summary} exact></Route>
    </div>
  );
};

export default Header;

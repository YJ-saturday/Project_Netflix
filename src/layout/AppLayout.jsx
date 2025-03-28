import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
//스타일
import './AppLayout.style.css';
import NetflixLogo from '../img/NetflixLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    //url을 바꿔줌
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" className="netflix-logo">
            <img src={NetflixLogo} alt="Netflix Logo" width="200" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <div className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default AppLayout;

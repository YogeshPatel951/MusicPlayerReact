import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import { Row, Navbar, Nav, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const NaviBar = () => {

  return (
    <Navbar expand="lg" className="pb-4 pt-4 light">

      <Navbar.Brand >
        <Link to="/">
          <img
            src="images/a.png"
            width="40"
            height="40"
            className="d-inline-block align-top rounded"
            alt="GameCast Logo"
          /></Link>{' '}
        <span className="h2 White">GameCasts</span>

      </Navbar.Brand>

      <Nav className="ml-auto">
        <Link to="/Myaccount">
          <img
            src='images/a.png'
            width="40"
            height="40"
            className="rounded-circle" />
        </Link>
      </Nav>

    </Navbar >
  )
}
export default NaviBar;
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 

const MainNavbar = ({}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
              Home
          </Navbar.Brand>
          <Navbar.Brand href="/about">
              About
          </Navbar.Brand>
          <Navbar.Brand href="/skills">
              Skills
          </Navbar.Brand>
          <Navbar.Brand href="/portfolio">
              Portfolio
          </Navbar.Brand>
          <Navbar.Brand href="/work">
              Work
          </Navbar.Brand>
          <Navbar.Brand href="/contacts">
              Contact
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar;
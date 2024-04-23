import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const styles = {
  header: {
    fontWeight: 'bold',
  }
}

function Menu() {
  return (
    <Navbar expand="lg" className="p-3">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./" style={{...styles.header}}>Home</Nav.Link>
            <Nav.Link href="./About" style={{...styles.header}}>About</Nav.Link>
            <Nav.Link href="./Contact" style={{...styles.header}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;

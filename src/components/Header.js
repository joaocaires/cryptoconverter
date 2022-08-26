import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const header = () =>{
    return(
      <header>
        <Navbar bg="light" expand="lg" className='navbar p-3 mb-5 shadow'>
          <Navbar.Brand href="/">Currency Converter</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/about">Sobre Cripto</Nav.Link>
              <Nav.Link href="/history">Historia</Nav.Link>
            </Nav>
      </Navbar>
    </header>
    )
}

export default header
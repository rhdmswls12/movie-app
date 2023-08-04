import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

function ColorSchemesExample() {

  let navigate = useNavigate();

  return (
    <>
    
      <Navbar bg="dark" variant="dark" style={{justifyContent:'space-between'}}>
        <Container >
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <ul className='nav navbar-nav navbar-left'>
            <Nav.Link href="#home" onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link href="#features" onClick={() => {navigate('')}}>Popular</Nav.Link>
            <Nav.Link href="#pricing" onClick={() => {navigate('')}}>My Movies</Nav.Link>
            </ul>
            <ul className='navbar-nav' style={{position: 'absolute', right: '0', marginRight: '50px'}}>
            <Nav.Link href="#login" onClick={() => {navigate('/login')}}>로그인</Nav.Link>
            <Nav.Link href="#signup" onClick={() => {navigate('')}}>회원가입</Nav.Link>
            </ul> 
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
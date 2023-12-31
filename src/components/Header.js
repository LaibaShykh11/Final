import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import bakeryimg from '../assets/images/bakery.png'
export const Header = () => {
  return (
    <>
      <Navbar
        style={{ width: '1028px', height: '100px' }}
        expand='lg'
        className='bg-white'
        variant={'light'}
      >
        <Container>
          <Navbar.Brand href='#home'>
            <img src={bakeryimg} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link className={'text-black'}>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='text-black'
                  to={'/'}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className={'text-black'}>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='text-black'
                  to={'/all-projects'}
                >
                  Projects{' '}
                </Link>
              </Nav.Link>
              <Nav.Link className={'text-black'} href='#ContactUs'>
                Contact
              </Nav.Link>
              <Nav.Link className={'text-black'} href='#About.js'>
                About Us
              </Nav.Link>
              <Nav.Link className={'text-black'}>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='text-black'
                  to={'/products'}
                >
                  Products
                </Link>
              </Nav.Link>

              <Nav.Link className={'text-black'}>
                <Link
                  style={{ textDecoration: 'none' }}
                  className='text-black'
                  to={'/reviews'}
                >
                  Reviews
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

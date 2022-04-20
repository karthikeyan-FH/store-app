import React from 'react'
import { Navbar, Nav, Container, Form,FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import search_icon from './images/search_icon.png';
import cart_icon from './images/cart.png'
export default function Header() {
  return (
    <div>
          <Navbar  variant="light" className='border-bottom border-dark'>
              <Container>
                  <Navbar.Brand href="#home">
                      <img src="https://images.saymedia-content.com/.image/t_share/MTc0OTg4MzM2Njg1OTE4MTc2/selling-with-storenvy-a-review.jpg" width="150" height="50"/>
                  </Navbar.Brand>
                  <Form className="d-flex me-auto">
                      <FormControl
                          type="search"
                          placeholder="Search Products, Stores, Collections"
                          className="sh"
                          aria-label="Search"
                      />
                      <Button variant="outline-success"><img src={search_icon}/></Button>
                  </Form>
                  <Nav className="mr-auto">
                      <Nav.Link href="#home">On Sale</Nav.Link>
                      <Nav.Link href="#features">Trending</Nav.Link>
                      <Nav.Link href="#pricing">Join</Nav.Link>
                      <Nav.Link href="#pricing">Sign in</Nav.Link>
                      <Nav.Link href="#pricing"><img src={cart_icon} /> 0</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>

         
    </div>
  )
}

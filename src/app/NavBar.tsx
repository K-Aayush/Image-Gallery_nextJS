"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const NavBar = () => {
  const pathname = usePathname();

  return (
    <Navbar bg="primary" variant='dark' sticky='top' expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} href={"/"}>
          Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link as={Link} href='/static' active={pathname === "/static"}>Static</Nav.Link>
            <Nav.Link as={Link} href='/dynamic' active={pathname === "/dynamic"}>Dynamic</Nav.Link>
            <Nav.Link as={Link} href='/isr' active={pathname === "/isr"}>ISR</Nav.Link>
            <NavDropdown title="topics" id="topics-dropdown">
              <NavDropdown.Item as={Link} href="/topics/Fitness">Fitness</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/Coding">Coding</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/Anime">Anime</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/Cars">Cars</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/Bikes">Bikes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
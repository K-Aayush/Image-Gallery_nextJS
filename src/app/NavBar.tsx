"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  const pathname = usePathname();

  return (
    <Navbar bg="primary" variant='dark' sticky='top' expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          <Link href={"/"}>
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link as={Link} href='/static' active={pathname === "/static"}>Static</Nav.Link>
            <Nav.Link as={Link} href='/dynamic' active={pathname === "/dynamic"}>Dynamic</Nav.Link>
            <Nav.Link as={Link} href='/isr' active={pathname === "/isr"}>ISR</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
'use client';

import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import logoHome from "@/assets/logoHome.png"

export function Navegation() {
  
  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand, idx) => (
        <Navbar className="bg-body-tertiary mb-3" key={String(expand) || idx} expand={expand}>
          <Container fluid>
{/* LOGO/HOME */}
            <Navbar.Brand href="#home">
              <img
                src={logoHome.src}
                width="520"
                height="auto"
                className="d-inline-block align-top"
                alt="logo Tampets"
              />
              </Navbar.Brand>

                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown
                      title="O Projeto"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Quem Somos</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4">Conheça o Projeto</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">TamPets na Mídia</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action4">Galeria</NavDropdown.Item>
                    </NavDropdown>
                
{/* RELATÓRIO */}
              
                  <NavDropdown
                    title="O Projeto"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Dados do Projeto</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">CO2</NavDropdown.Item>
                  </NavDropdown>
    
{/* PONTOS DE COLETA */}
                    <Nav.Link href="#action1">Pontos de Coleta</Nav.Link>

{/* DOAÇÕES */}
                    <Nav.Link href="#action2">Doações</Nav.Link>

{/* PARCEIROS */}
                    <Nav.Link href="#action2">Parceiros</Nav.Link>
  
                  </Nav>
                 
                    <Button variant="outline-success"> Login | Cadastro </Button>

          </Container>
        </Navbar>
  ))}
    </>
  )
}
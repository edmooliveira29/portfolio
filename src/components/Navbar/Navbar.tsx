import { LogoImage, RowContainer, ContainerNavbar, ColContainer, OffcanvasNav, NavbarMenu, OffcanvasContainer, Items } from './styles';
import logoImage from '@/assets/logo.png';
import { useState } from 'portfolio/node_modules/@types/react';
const NavBarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <NavbarMenu expand="lg" >
      <ContainerNavbar>
        <RowContainer>
          <ColContainer lg={3} md={3} sm={6} className='justify-content-start'>
            <NavbarMenu.Brand href="#home">
              <LogoImage src={logoImage} alt="logo" />
            </NavbarMenu.Brand>
          </ColContainer>
          <ColContainer lg={9} md={9} sm={3} className='justify-content-end'>
            <NavbarMenu.Toggle onClick={handleShow} />
            <OffcanvasContainer show={show} onHide={handleClose} >
              <OffcanvasContainer.Header closeButton>
                <LogoImage src={logoImage} alt="logo" />
              </OffcanvasContainer.Header>
              <OffcanvasContainer.Body>
                <OffcanvasNav className="ml-auto">
                  <OffcanvasNav.Link href="#home" onClick={handleClose}>HOME</OffcanvasNav.Link>
                  <OffcanvasNav.Link href="#link" onClick={handleClose}>ABOUT</OffcanvasNav.Link>
                  <OffcanvasNav.Link href="#link" onClick={handleClose}>PROJECTS</OffcanvasNav.Link>
                  <OffcanvasNav.Link href="#link" onClick={handleClose}>CONTACT</OffcanvasNav.Link>
                  <OffcanvasNav.Link href="#link" onClick={handleClose}>BLOG</OffcanvasNav.Link>
                </OffcanvasNav>
              </OffcanvasContainer.Body>
            </OffcanvasContainer>
            <Items>
              <Items.Link href="#home">HOME</Items.Link>
              <Items.Link href="#link">ABOUT</Items.Link>
              <Items.Link href="#link">PROJECTS</Items.Link>
              <Items.Link href="#link">CONTACT</Items.Link>
              <Items.Link href="#link">BLOG</Items.Link>
            </Items>
          </ColContainer>
        </RowContainer>
      </ContainerNavbar>
    </NavbarMenu>
  );
}

export default NavBarComponent;
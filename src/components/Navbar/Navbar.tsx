import { useEffect, useState } from 'react';
import { LogoImage, RowContainer, ContainerNavbar, ColContainer, OffcanvasNav, NavbarMenu, OffcanvasContainer, Items } from './styles';
import logoImage from '@/assets/logo.png';
const NavBarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const smoothScroll = (target) => {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    const links = document.querySelectorAll('.scroll-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        const target = link.getAttribute('href');
        smoothScroll(target);
        handleClose();
      });
    });
  }, []);
  
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
                  <OffcanvasNav.Link href="#sobre" onClick={handleClose}>ABOUT</OffcanvasNav.Link>
                  <OffcanvasNav.Link href="#projetos" onClick={handleClose}>PROJECTS</OffcanvasNav.Link>
                  <OffcanvasNav.Link href="#contato" onClick={handleClose}>CONTACT</OffcanvasNav.Link>
                  <OffcanvasNav.Link href="#blog" onClick={handleClose}>BLOG</OffcanvasNav.Link>
                </OffcanvasNav>
              </OffcanvasContainer.Body>
            </OffcanvasContainer>
            <Items>
              <Items.Link href="#home">HOME</Items.Link>
              <Items.Link href="#sobre">ABOUT</Items.Link>
              <Items.Link href="#projetos">PROJECTS</Items.Link>
              <Items.Link href="#contato">CONTACT</Items.Link>
              <Items.Link href="#blog">BLOG</Items.Link>
            </Items>
          </ColContainer>
        </RowContainer>
      </ContainerNavbar>
    </NavbarMenu>
  );
}

export default NavBarComponent;
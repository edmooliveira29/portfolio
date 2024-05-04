import { Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { theme } from '@/theme/theme';
import Image from 'next/image';

export const NavbarMenu = styled(Navbar)`
  position: sticky;
  top: 0;
  background-color: ${theme.colors.background};
  opacity: 95%;
  height: 60px;
`

export const NavBarContainer = styled(Navbar)`
  height: 60px;
  background-color: transparent;
  align-items: center;  
  max-width: 100vw;
  position: sticky;
  padding: 20px;
  margin: 0;
  top: 0;
  z-index: 1000;
  
`

export const LogoImage = styled(Image)`
  padding: 0 15px;
  max-width: 100%;
  width: 314px;
  height: 54px;
  @media screen and (max-width: 400px) {
    width: 180px;
    height: 45px;
    margin: 0.8rem 0;
    right: 20%;
    position: absolute;
    top:0
  }
`;

export const Items = styled(Nav)`
    text-decoration: none;
    padding: 10px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.74);
    text-align: center;
    font-family: ${theme.typography.titles.navBar};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    justify-content: end;

    a {
      color: ${theme.colors.textPrimary};
      font-size: 41px;
    }

    a:hover {
      color: ${theme.colors.textPrimaryLight};
    }
    .active { 
      text-shadow: 0px 0px 10px rgba(255, 255, 255);
    }

    @media screen and (max-width: 400px) {
      display: none;
    }
`

export const RowContainer = styled(Row)`
  width: 100vw;
  margin: 0;
  display : contents;
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
`

export const ContainerNavbar = styled(Container)`
  width: 100vw;
  margin: 0;
  display: contents !important;
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`

export const ColContainer = styled(Col)`
  display: grid;
  
  @media screen and (max-width: 400px) {
    display: flex;
    justify-content: start !important;
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    }

  }

`

export const OffcanvasNav = styled(Nav)`
    text-decoration: none;
    padding: 10px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.74);
    text-align: left;
    font-family: ${theme.typography.titles.navBar};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  a{
    color: ${theme.colors.textPrimary};
      font-size: 20px;
  }
  `

export const OffcanvasContainer = styled(Offcanvas)`
  width: 80vw;
  background-color: transparent;
  .offcanvas-header >img{
    left: 0;
  }
  .offcanvas-body{
    background-color: ${theme.colors.background};
    width: 75%;
  }
  .offcanvas-header{
    background-color: ${theme.colors.background};
    margin: 0 25% 0 0;
  }
  .offcanvas-header > button {

  }
  .btn-close {
  width: 1em;
  height: 1em;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: .25rem;
  opacity: .5;
}
`

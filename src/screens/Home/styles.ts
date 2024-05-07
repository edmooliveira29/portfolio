import { theme } from '@/theme/theme';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';


export const ImageHome = styled(Image)`
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 6rem 2rem 2rem 2rem ;
  width: 30rem;
  height: 30rem;
  img:hover {
    transform: scale(1.1);
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
    margin: 3rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 10rem 2rem 1rem 2rem ;
  h1 {
    color : ${theme.colors.textTitle};
    font-family: ${theme.typography.titles.fontFamily};
    color: var(--Verde-letra-seleo, #95C9B0);
    text-align: center;
    text-shadow: 13px -9px 8.3px rgba(0, 0, 0, 0.26);
    font-family: "Courier New";
    font-size: ${theme.typography.sizes.home.title};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  h4 {
    color: #FFF;
    text-align: center;
    font-family: ${theme.typography.titles.subTitles};
    font-style: normal;
    font-size: ${theme.typography.sizes.home.subtitle};
    font-weight: 700;
    line-height: normal;
  }
  @media (max-width: 400px) {
    margin: 1rem 1rem;
    h1 {
      font-size: ${theme.typography.sizes.home.titleMobile};
    }
    h4 {
      font-size: ${theme.typography.sizes.home.subtitleMobile};
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  margin: 0 2rem;
  justify-content: space-between;
  a {
    color: ${theme.colors.textPrimaryLight};
    cursor: pointer;
    svg:hover {
      color: ${theme.colors.textPrimary};
    }
  }
`

export const RowInfo = styled(Row)`
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
`

export const ContainerScreen = styled(Container)`
  height: calc(100vh - 60px);
  margin-top: -60px
`

export const ButtomMore = styled.div`
  cursor: pointer;
  background-color: transparent;
  text-align: center;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.titles.fontFamily};
  font-weight: bold;
  font-size: ${theme.typography.sizes.home.textButton};

  a{
    text-decoration: none;
    color: ${theme.colors.primary};
  }
  
`

export const LinkButtom = styled(Link)`
  border: 1px solid ${theme.colors.primary};
  border-radius: 15px;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
    a{
      color: ${theme.colors.background};
    }
  }
`
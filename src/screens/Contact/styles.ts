import { theme } from '@/theme/theme';
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';


export const TextTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 2rem;
  span {
    justify-content: center;
    color : ${theme.colors.textTitle};
    font-family: ${theme.typography.titles.titles};
    color: var(--Verde-letra-seleo, #95C9B0);
    text-shadow: 13px -9px 8.3px rgba(0, 0, 0, 0.26);
    font-size: ${theme.typography.sizes.about.textTitleDesktop};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 400px) {
    margin: 0.2rem;

    span {
      font-size: ${theme.typography.sizes.about.textTitleMobile};
    }
  }
`

export const TextSubTitle = styled.span`
  font-size: ${theme.typography.sizes.contact.textSubtitle};
  font-weight: 500;
  font-family: ${theme.typography.titles.subTitles};
  color: ${theme.colors.textPrimary};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.26);
  @media screen and (max-width: 400px) {
    font-size:  ${theme.typography.sizes.contact.textSubtitleMobile};
  }
`

export const RowInfo = styled(Row)`
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
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

export const ColForm = styled(Col)`
  margin: 10rem 0rem;
  padding: 0 12rem;
  @media screen and (max-width: 400px) {
    padding: 0 1rem;
    margin: 1rem 0;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-around;
  a {
    color: ${theme.colors.textPrimaryLight};
    cursor: pointer;
    svg:hover {
      color: ${theme.colors.textPrimary};
    }
  }

  @media screen and (max-width: 400px) {
    padding: 2rem 0rem;
  }
`

export const Maps = styled.iframe`
  border-radius: 30px;
  max-width: 80%;
  @media screen and (max-width: 400px) {
    max-width: 95vw;
    max-height: 250px;
    top: -8rem;
    position: relative;
  }
`

export const IconeRow = styled(Row)`
  margin: 0.5rem 2.5rem 0 2.5rem;
  text-align: center;
  .icon-technology {
    color: ${theme.colors.iconTechnology} !important;
    width: 3em !important;
    height: 3em !important;
    margin: 0.5rem 0.5rem;
  }
  @media screen and (max-width: 400px) {
    position:relative;
    top: -5rem;
    margin: 0.5rem 0;

    .icon-technology {
      width: 1.0em !important;
      height: 1.0em !important;
      margin: 0.5rem 0.5rem;
    }
  }
`
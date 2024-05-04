import { theme } from '@/theme/theme';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';


export const TextTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 3rem 2rem;
  span {
    color : ${theme.colors.textTitle};
    font-family: ${theme.typography.titles.titles};
    color: var(--Verde-letra-seleo, #95C9B0);
    text-align: center;
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
  border-bottom: 3px solid ${theme.colors.textTitle};
  font-size: ${theme.typography.sizes.about.textSubtitleDesktop};
  font-weight: 500;
  font-family: ${theme.typography.titles.titles};
  color: ${theme.colors.textPrimary};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.26);
  @media screen and (max-width: 400px) {
    font-size:  ${theme.typography.sizes.about.textSubtitleMobile};
  }
`

export const RowInfo = styled(Row)`
  @media screen and (max-width: 400px) {
    flex-direction: column-reverse;
  }
`

export const IconeRow = styled(Row)`
  margin: 1rem 2.5rem 0 2.5rem;
  .icon-technology {
    color: ${theme.colors.iconTechnology} !important;
    width: 4em !important;
    height: 4em !important;
    margin: 0.5rem 0.5rem;
  }
  @media screen and (max-width: 400px) {
    margin:1rem;

    .icon-technology {
      width: 1.5em !important;
      height: 1.5em !important;
      margin: 0.5rem 0.5rem;
    }
  }
`

export const TextTecnology = styled.span`
  color: ${theme.colors.textPrimary};
  margin: 1rem 2.5rem 0 2.5rem;
  font-size: ${theme.typography.sizes.about.textTechnologyDesktop};
  font-family: ${theme.typography.titles.fontFamily};
  font-weight: 700;
  display: contents;
  @media screen and (max-width: 400px) {
    font-size: ${theme.typography.sizes.about.textTechnologyMobile};
  }
`

export const IconeCol = styled(Col)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
`

export const BackgroundImage = styled(Image)`
  padding: 0 15px;
  width: 55rem;
  height: 50rem;
  @media screen and (max-width: 400px) {
    width: 28rem;
    height: 35rem;
    margin: 0.2rem 0 0 0;
    left: 1rem;
    position: relative;
  }
`;

export const TextAboutMe = styled.span`
    color: #FFF;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-style: normal;
    font-size: ${theme.typography.sizes.about.textInfoDesktop};
    font-weight: 700;
    line-height: normal;
    margin: 0rem 10rem 5rem 10rem;
    position: absolute;
    left: 48%;
    @media screen and (max-width: 400px) {
      left: 0rem;
      font-size: ${theme.typography.sizes.about.textInfoMobile};
      margin: 2rem 2rem;
    }
`
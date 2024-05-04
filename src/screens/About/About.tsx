import Box from '@/components/Box'
import { Col, Container } from 'react-bootstrap'
import { TextTitle, IconeRow, TextSubTitle, RowInfo, TextTecnology, IconeCol, BackgroundImage, TextAboutMe } from './styles'
import { FaAngular, FaCss3, FaHtml5, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { BiLogoGoogleCloud, BiLogoMongodb, BiLogoNetlify, BiLogoReact } from "react-icons/bi";
import { SiCucumber, SiCypress, SiJest, SiMocha, SiSelenium } from "react-icons/si";

import { theme } from '@/theme/theme';
import imageAboutMe from '@/assets/image-about-me.png'
export const About = () => {

  return (
    <Box
      styleSheet={{
        height: 'calc(100vh - 60px)'
      }}>
      <Container fluid id='sobre'>
        <RowInfo>
          <Col lg={6} md={6} sm={12} >
            <TextTitle>
              <span className='text-center'>MINHAS HABILIDADES</span>
            </TextTitle>
            <IconeRow>
              <TextSubTitle>FRONTEND</TextSubTitle>
              <IconeCol >
                <FaReact className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>ReactJs</TextTecnology>
              </IconeCol>
              <IconeCol >
                <FaAngular className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>Angular</TextTecnology>
              </IconeCol>
              <IconeCol >
                <FaCss3 className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>CSS</TextTecnology>
              </IconeCol>
              <IconeCol >
                <FaHtml5 className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>HTML</TextTecnology>
              </IconeCol>
            </IconeRow>
            <IconeRow>
              <Col>
                <IconeRow>
                  <TextSubTitle>BACKEND</TextSubTitle>
                  <IconeCol>
                    <FaNodeJs className='icon-technology' color={theme.colors.textPrimary} />
                    <TextTecnology>NodeJs</TextTecnology>
                  </IconeCol>
                  <IconeCol >
                    <BiLogoMongodb className='icon-technology' color={theme.colors.textPrimary} />
                    <TextTecnology>MongoDB</TextTecnology>
                  </IconeCol>
                </IconeRow>
              </Col>
              <Col>
                <IconeRow>
                  <TextSubTitle>INFRAESTRUTURA</TextSubTitle>
                  <IconeCol>
                    <BiLogoGoogleCloud className='icon-technology' color={theme.colors.textPrimary} />
                    <TextTecnology>Google Cloud</TextTecnology>
                  </IconeCol>
                  <IconeCol >
                    <BiLogoNetlify className='icon-technology' color={theme.colors.textPrimary} />
                    <TextTecnology>Netlify</TextTecnology>
                  </IconeCol>
                </IconeRow>
              </Col>
            </IconeRow>
            <IconeRow>
              <Col>
                <IconeRow>
                  <TextSubTitle>LOW CODE</TextSubTitle>
                  <IconeCol>
                    <FaWordpress className='icon-technology' color={theme.colors.textPrimary} />
                    <TextTecnology>Wordpress</TextTecnology>
                  </IconeCol>
                </IconeRow>
              </Col>
              <Col>
                <IconeRow>
                  <TextSubTitle>MOBILE</TextSubTitle>
                  <IconeCol>
                    <BiLogoReact className='icon-technology' color={theme.colors.textPrimary} />
                    <TextTecnology>React Native</TextTecnology>
                  </IconeCol>
                </IconeRow>
              </Col>
            </IconeRow>
            <IconeRow>
              <TextSubTitle>TESTES</TextSubTitle>
              <IconeCol >
                <SiJest className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>Jest</TextTecnology>
              </IconeCol>
              <IconeCol >
                <SiMocha className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>Mocha</TextTecnology>
              </IconeCol>
              <IconeCol >
                <SiCypress className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>Cypress</TextTecnology>
              </IconeCol>
              <IconeCol >
                <SiCucumber className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>Cucumber</TextTecnology>
              </IconeCol>
              <IconeCol >
                <SiSelenium className='icon-technology' color={theme.colors.textPrimary} />
                <TextTecnology>Cucumber</TextTecnology>
              </IconeCol>
            </IconeRow>
          </Col>
          <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
            <BackgroundImage src={imageAboutMe} alt='logo' />
            <TextAboutMe>
              Sou Edmo Oliveira,  Desenvolvedor Web e Mobile, experiência em gerenciamento de equipe, utilizando da Metodologia Ágil com o método Scrum.
              <br/>
              <br/>
              Adepto a utilização dos princípios da Arquitetura Limpa e Código Limpo, através do TDD e do SOLID.
              <br/>
              <br/>
              Meu interesse pela tecnologia e pelo desenvolvimento de sistemas é constante e tenho buscado me qualificar cada vez mais na área. Acredito fortemente que a tecnologia tem um papel fundamental na transformação do mundo em que vivemos e estou motivado a fazer parte dessa mudança através do meu trabalho e aprendizado contínuo.            </TextAboutMe>
          </Col>
        </RowInfo>
      </Container>
    </Box>
  )
}

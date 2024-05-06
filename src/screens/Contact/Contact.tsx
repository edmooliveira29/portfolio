import Box from '@/components/Box'
import { Col, Container } from 'react-bootstrap'
import { TextTitle, IconeRow, TextSubTitle, RowInfo, TextTecnology, IconeCol, BackgroundImage, TextAboutMe } from './styles'
import { FaAngular, FaCss3, FaHtml5, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { BiLogoGoogleCloud, BiLogoMongodb, BiLogoNetlify, BiLogoReact } from "react-icons/bi";
import { SiCucumber, SiCypress, SiJest, SiMocha, SiSelenium } from "react-icons/si";

import { theme } from '@/theme/theme';
import imageAboutMe from '@/assets/image-about-me.png'
export const Contact = () => {

  return (

      <Container fluid id='contato' style={{height: '100vh', marginTop: '5px'}}>
        <RowInfo>
          <Col lg={6} md={6} sm={12} >
            <TextTitle>
              <span className='text-center'>MINHAS HABILIDADES</span>
            </TextTitle>
          </Col>
          <Col lg={6} md={6} sm={12} className='d-flex justify-content-center align-items-center '>
          </Col>
        </RowInfo>
      </Container>
  )
}

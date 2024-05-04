import Box from '@/components/Box'
import { Col, Container } from 'react-bootstrap'
import imageHome from '@/assets/photo-home.png'
import { ImageHome, SocialMedia, Text, RowInfo } from './styles'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { theme } from '@/theme/theme';

export const About = () => {

  return (
    <Box
      styleSheet={{
        height: 'calc(100vh - 60px)'
      }}>
      <Container fluid id='sobre'>
        <RowInfo>
          <Col lg={7} md={6} sm={12} >
            <Text>
              <h1 className='text-center'>Web Developer</h1>
              <h4>Formado em Engenharia da Computação pela Universidade Federal de Ouro Preto. Sendo desafiado dia após dia a criar soluções para problemas.</h4>
            </Text>
          </Col>
          <Col lg={5} md={6} sm={12} className='d-flex justify-content-center align-items-center flex-column'>
            <ImageHome src={imageHome} alt="logo" />
            <SocialMedia>
              <a href={theme.socialMedia.github} target="_blank" >
                <FaGithub className='mx-3' size={40} />
              </a>
              <a href={theme.socialMedia.linkedin} target="_blank" >
                <FaLinkedinIn className='mx-3' size={40} />
              </a>
              <a href={theme.socialMedia.whatsapp} target="_blank" >
                <FaWhatsapp className='mx-3' size={40} />
              </a>
            </SocialMedia>
          </Col>
        </RowInfo>
      </Container>
    </Box>
  )
}

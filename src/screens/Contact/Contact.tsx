import Box from '@/components/Box'
import { Col, Container, Row } from 'react-bootstrap'
import { TextTitle, SocialMedia, TextSubTitle, RowInfo, TextTecnology, IconeCol, BackgroundImage, TextAboutMe, ButtomMore, LinkButtom, ColForm } from './styles'
import { FaAngular, FaCss3, FaGithub, FaHtml5, FaInstagram, FaLinkedinIn, FaNodeJs, FaReact, FaTelegram, FaWhatsapp, FaWordpress, FaYoutube } from "react-icons/fa";
import { BiLogoGoogleCloud, BiLogoMongodb, BiLogoNetlify, BiLogoReact } from "react-icons/bi";
import { SiCucumber, SiCypress, SiJest, SiMocha, SiSelenium } from "react-icons/si";

import { theme } from '@/theme/theme';
import imageAboutMe from '@/assets/image-about-me.png'
import { InputField } from '@/components/Inputs/Input';
import { IconeRow } from '../About/styles';
export const Contact = () => {

  return (

    <Container fluid id='contato' style={{ height: '100vh', marginTop: '5px' }}>
      <RowInfo>
        <ColForm lg={6} md={6} sm={12}  >
          <TextTitle>
            <span className='text-center'>CONTATE-ME</span>
          </TextTitle>
          <TextSubTitle>
            <span>Para mais informações, orçamentos ou sugestões entre em contato</span>
          </TextSubTitle>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <InputField label='Nome' id='name' placeholder='Digite seu nome' />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <InputField label='E-mail' id='email' placeholder='Digite seu e-mail' />
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <InputField label='Assunto' id='subject' placeholder='Digite o assunto' />
            </Col>
          </Row>
          <ButtomMore>
            <LinkButtom scroll={true} href='#sobre'>
              ENVIAR
              {/* <MdKeyboardArrowDown size={30} /> */}
            </LinkButtom>
          </ButtomMore>
        </ColForm>
        <Col lg={6} md={6} sm={12} style={{ marginTop: '10rem' }}>
          <Row className='d-flex justify-content-center'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99155.40744164141!2d-44.02425775098209!3d-19.892854825282388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699f74c3e925d%3A0x85fdbc9464309c9e!2sGreater%20Belo%20Horizonte%20-%20Centro%2C%20Belo%20Horizonte%20-%20State%20of%20Minas%20Gerais%2C%2030110-009!5e0!3m2!1sen!2sbr!4v1715020806167!5m2!1sen!2sbr"
              width="300" height="500"
              style={{ borderRadius: '30px', maxWidth: '80%' }}
              allowFullScreen loading="lazy" >
            </iframe>
          </Row>
          <IconeRow>
            <TextSubTitle>ENCONTE-ME TAMBÉM, ATRAVÉS DOS LINKS:</TextSubTitle>
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
              <a href={theme.socialMedia.instagram} target="_blank" >
                <FaInstagram className='mx-3' size={40} />
              </a>
            </SocialMedia>
            
          </IconeRow>
        </Col>
      </RowInfo>
    </Container>
  )
}

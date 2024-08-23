'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, } from '@headlessui/react'
import { FaReact } from 'react-icons/fa'
import { SiNetlify, } from 'react-icons/si'
import { Button } from '@/components/Button'
import { CgClose } from 'react-icons/cg'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import ImageCarousel from '@/components/Caroussel'
type Props = {
  setShowDetails: any
  showDetails: {
    portfolio: boolean
  }
}
const DetailsPortfolio = ({ setShowDetails, showDetails }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (showDetails) {
      setOpen(showDetails.portfolio)
    }
  }, [showDetails])
  return (
    <Dialog open={open} onClose={() => { setOpen(false); setShowDetails({ ...showDetails, portfolio: false }) }} className="relative z-10 lg:w-[80%]">
      <DialogBackdrop
        transition
        className="justify-center items-center fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 overflow-y-auto flex  justify-center top-20">
        <div className="lg:flex lg:justify-center p-4 text-center">
          <DialogPanel
            transition
            className="overflow-y-auto border-rounded border border-black lg:w-[80%] relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="bg-gray-900">
              <div className="lg:flex text-white text-sm">
                <h1 className="text-2xl font-bold flex lg:hidden justify-between p-4">
                  PORTFÓLIO - EDMO
                  <CgClose size={25} onClick={() => { setOpen(false); setShowDetails({ ...showDetails, portfolio: false }); }} />
                </h1>
                <div className="flex w-full lg:w-1/2">
                  <div className="m-5">
                    <ImageCarousel images={[
                      'portfolio-1.png',
                      'portfolio-2.png',
                    ]} />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-5">
                  <h1 className="text-3xl font-bold hidden lg:flex justify-between">
                    PORTFÓLIO - EDMO
                    <CgClose size={25} onClick={() => { setOpen(false); setShowDetails({ ...showDetails, portfolio: false }); }} className="cursor-pointer" />
                  </h1>
                  <h2 className='text-xl font-bold'>Frontend</h2>
                  <p>Este portfólio foi criado com as ferramentas mais atuais do mercado e para reunir
                    e destacar minha trajetória como desenvolvedor Ao longo da carreira.
                    Aqui, você encontrará uma coleção das minhas experiências profissionais,
                    dos projetos nos quais já atuei ou estou envolvido,
                    além de uma visão abrangente dos meus conhecimentos técnicos.</p>
                  <br></br>
                  Este projeto contém:
                  <ul className='space-y-2 mt-2'>
                    <li><strong>Início:</strong> Visão geral de quem eu sou.</li>
                    <li><strong>Conhecimentos:</strong> Habilidades e tecnologias com as quais trabalho.</li>
                    <li><strong>Projetos:</strong> Exemplos de projetos nos quais participei, com detalhes e resultados alcançados.</li>
                    <li><strong>Experiências:</strong> Histórico profissional com as principais experiências e funções desempenhadas.</li>
                    <li><strong>Formação:</strong> Detalhes sobre minha educação e cursos complementares.</li>
                    <li><strong>Contato:</strong> Formas de entrar em contato comigo para oportunidades e parcerias.</li>
                  </ul>
                  <br></br>
                  <p>Com o uso do Tailwind, foi criado um projeto responsivo, capaz de se adaptar em todos os tamanhos de tela,
                    permitindo uma melhor experiencia de usuário </p>

                  <h3 className="text-xl font-bold">Principais Tecnologias e Ferramentas Utilizadas:</h3>
                  <ul>
                    <li className='flex mb-3'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <FaReact size={28} className='hidden lg:flex' /><strong>&nbsp;React:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para a criação de componentes reutilizáveis e para gerenciar o
                        estado da aplicação, proporcionando uma experiência de usuário dinâmica.
                      </div>
                    </li>
                    <li className='flex mb-3'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <RiNextjsLine size={28} className="hidden lg:flex" /><strong>&nbsp;Next.js:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para a construção do front-end da aplicação, permitindo a renderização de paginas dinâmicas e facilitando no roteamento
                      </div>
                    </li>

                    <li className='flex mb-3'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <RiTailwindCssFill size={28} className='hidden lg:flex' /><strong>&nbsp;Tailwind:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para a estilização do site, garantindo uma interface responsiva e visualmente atraente.
                      </div>
                    </li>
                    <li className='flex mb-3'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <SiNetlify size={28} className='hidden lg:flex' /><strong>&nbsp;Netlify:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para o deploy do site, permitindo que o site seja acessível pelo dominio próprio.
                      </div>
                    </li>
                  </ul>
                  <p>Este portfólio é atualizado constantemente, visando trazer novas experiências e evolução da carreira.
                  </p>
                  <br></br>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-900 px-4 py-3 justify-center">
              <Button onClick={() => window.open('https://github.com/edmooliveira29/portfolio', '_blank')} title='ABRIR REPOSITÓRIO' icon='website' />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DetailsPortfolio

'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, } from '@headlessui/react'
import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { BsBootstrap } from 'react-icons/bs'
import { Button } from '@/components/Button'
import { CgClose } from 'react-icons/cg'
import { DiGoogleCloudPlatform, DiMongodb } from 'react-icons/di'
import { SiCypress, SiJest } from 'react-icons/si'

type Props = {
  setShowDetails: any
  showDetails: {
    tccPosGraduacao: boolean
  }
}
const DetailsTCCPosGraduacao = ({ setShowDetails, showDetails }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (showDetails) {
      setOpen(showDetails.tccPosGraduacao)
    }
  }, [showDetails])


  return (
    <Dialog open={open} onClose={() => { setOpen(false); setShowDetails({ ...showDetails, tccPosGraduacao: false }) }} className="relative z-10 lg:w-[90%]">
      <DialogBackdrop
        transition
        className="justify-center fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center top-20">
        <div className="lg:flex lg:justify-center m-4 text-center">
          <DialogPanel
            transition
            className="overflow-y-auto lg:w-[90%] relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="bg-gray-900">
              <div className="lg:flex text-white text-sm">
                <h1 className="text-2xl font-bold flex lg:hidden justify-between p-4 ">
                  SISTEMA GERENCIADOR
                  <CgClose size={25} onClick={() => { setOpen(false); setShowDetails({ ...showDetails, tccPosGraduacao: false }); }} />
                </h1>

                <div className="flex w-full lg:w-1/2">

                  <div className="flex justify-center items-center p-5 w-full">
                    <iframe className='w-full h-[300px] lg:h-[550px]' src="https://www.youtube.com/embed/ELRQ65RPLvg" title="Sistema gerenciador para MEIs  - Projeto Integrado da pós-graduação PUC-MG"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-2 text-[12px] ">
                  <h1 className="text-3xl font-bold hidden lg:flex justify-between py-4">SISTEMA GERENCIADOR
                    <CgClose size={25} onClick={() => { setOpen(false); setShowDetails({ ...showDetails, tccPosGraduacao: false }); }} />

                  </h1>
                  <p>O projeto do Sistema Gerenciador que utiliza a Clean Architecture para o backend e
                    o padrão Model-View-Controller (MVC) para o frontend. A comunicação entre cliente e servidor
                    segue o padrão REST, empregando métodos CRUD (CREATE, READ, UPDATE, DELETE).
                    Diagramas de classes e o C4 Model são usados para ilustrar a estrutura do sistema,
                    destacando a separação de responsabilidades entre entidades, casos de uso, adaptadores e infraestrutura.</p>
                  <br></br>
                  <h1 className="text-xl font-bold">Backend</h1>
                  <p>O backend foi utilizado a Arquitetura Limpa, proposta engenheiro de software Robert
                    C. Martin, conhecido como Uncle Bob. Esta arquitetura é um conjunto de princípios
                    que visa criar sistemas capazes de serem escaláveis e facilmente mantidos. Todo o sistema do backend foi testado com o uso do Jest
                  </p>
                  <br></br>

                  <h1 className="text-xl font-bold">Frontend</h1>
                  <p>O padrão arquitetural que o frontend está desenvolvido é Model-View-Controller
                    (MVC), uma abordagem que divide uma aplicação em três componentes principais:
                    o Modelo (Model), a Visão (View) e o Controlador (Controller). Todo o sistema do frontend foi testado com o uso do Cypress
                  </p>
                  <br></br>

                  <h3 className="text-xl font-bold">Principais Tecnologias e Ferramentas Utilizadas:</h3>
                  <ul>
                    <li className='flex mb-1'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <FaReact size={28} className='hidden lg:flex' /><strong>&nbsp;React:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para a criação de componentes reutilizáveis e para gerenciar o
                        estado da aplicação, proporcionando uma experiência de usuário dinâmica.
                      </div>
                    </li>
                    <li className='flex mb-1'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <BsBootstrap size={28} className='hidden lg:flex' /> <strong>&nbsp;Bootstrap:&nbsp;</strong>
                      </div>
                      <div className='w-full flex w-full lg:w-[82%] items-center'>
                        Responsável pelo layout responsivo e pelo estilo geral do site,
                        garantindo compatibilidade com diversos dispositivos.
                      </div>
                    </li>
                    <li className='flex mb-1'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <FaSass size={28} className='hidden lg:flex' /> <strong>&nbsp;Sass:&nbsp;</strong>
                      </div>
                      <div className='w-full flex w-full lg:w-[82%] items-center'>
                        Responsável pelo uso de CSS para o desenvolvimento do site.
                      </div>
                    </li>
                    <li className='flex mb-1'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <SiCypress size={28} className='hidden lg:flex' /> <strong>&nbsp;Cypress:&nbsp;</strong>
                      </div>
                      <div className='w-full flex w-full lg:w-[82%] items-center'>
                        Utilizado para realizar os testes automatizados do sistema.
                      </div>
                    </li>
                    <li className='flex mb-1'>
                    </li>
                    <li className='flex mb-1'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <FaNodeJs size={28} className='hidden lg:flex' /> <strong>&nbsp;NodeJs:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para a execução de backend e a criação da API.
                      </div>
                    </li>
                    <li className='flex mb-1'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <DiMongodb size={28} className='hidden lg:flex' /> <strong>&nbsp;MongoDB:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para a criação do banco de dados.
                      </div>
                    </li>
                    <li className='flex mb-1'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <SiJest size={28} className='hidden lg:flex' /> <strong>&nbsp;Jest:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para os testes unitários do backend.
                      </div>
                    </li>
                    <li className='flex mb-1'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <DiGoogleCloudPlatform size={60} className='hidden lg:flex' /> <strong>&nbsp;Google Cloud Compute Engine:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para a criação do banco de dados.
                      </div>
                    </li>
                  </ul>
                  <p>
                    Este trabalho foi realizado em 10 meses, realizando a parte do frontend e do backend e em ambos  foi implementada
                    uma configuração de ESLint para garantir que o código segue as melhores práticas de desenvolvimento.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:flex bg-gray-900 px-4 py-3 justify-center">
              <Button onClick={() => window.open('https://sistemagerenciador.netlify.app/', '_blank')} title='ABRIR SITE' icon='website' />
              <Button onClick={() => window.open('https://github.com/edmooliveira29/backend-system', '_blank')} title='ABRIR REPOSITÓRIO (BACKEND)' icon='github' />
              <Button onClick={() => window.open('https://github.com/edmooliveira29/frontend-system', '_blank')} title='ABRIR REPOSITÓRIO (FRONTEND)' icon='github' />
              <Button onClick={() => window.open('https://drive.google.com/file/d/1m0bah0YqNEuoLuoO84eeM7RGdiBOZyJE/view?usp=sharing', '_blank')} title='ABRIR PROJETO' icon='github' />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DetailsTCCPosGraduacao

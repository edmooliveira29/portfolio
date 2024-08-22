'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, } from '@headlessui/react'
import { FaFontAwesome, FaReact, FaSass } from 'react-icons/fa'
import { BsBootstrap } from 'react-icons/bs'
import { SiEslint, SiJest, SiPrettier, SiReactrouter, SiStyledcomponents } from 'react-icons/si'
import { Button } from '@/components/Button'
import { CgClose } from 'react-icons/cg'
import Image from 'next/image'
import farol from '@/assets/projects/farol.png'
import { RiTailwindCssFill } from 'react-icons/ri'
type Props = {
  setShowDetails: any
  showDetails: {
    farol: boolean
  }
}
const DetailsFarol = ({ setShowDetails, showDetails }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (showDetails) {
      setOpen(showDetails.farol)
    }
  }, [showDetails])
  return (
    <Dialog open={open} onClose={() => { setOpen(false); setShowDetails({ ...showDetails, farol: false }) }} className="relative z-10 lg:w-[90%]">
      <DialogBackdrop
        transition
        className="justify-center fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center top-20">
        <div className="lg:flex lg:justify-center p-4 text-center">
          <DialogPanel
            transition
            className="overflow-y-auto border-rounded border border-black lg:w-[90%] relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="bg-gray-900">
              <div className="lg:flex text-white text-sm">
                <h1 className="text-2xl font-bold flex lg:hidden justify-between p-4 ">
                  FAROL
                  <CgClose size={25} onClick={() => { setOpen(false); setShowDetails({ ...showDetails, farol: false }); }}/>
                </h1>
                <div className="flex w-full lg:w-1/2 ">
                  <div className="m-5">
                    <Image src={farol.src} alt="Logo Nolasco Moddas" width={farol.width} height={farol.height} className='h-auto' />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-5">
                  <h1 className="text-3xl font-bold hidden lg:flex justify-between">FAROL
                    <CgClose size={25} onClick={() => { setOpen(false); setShowDetails({ ...showDetails, farol: false }); }} className='cursor-pointer' />
                  </h1>
                  <h2 className='text-xl font-bold'>Frontend</h2>
                  <p>Neste projeto, fui contratado para desenvolver algumas telas e funcionalidades
                    para a interface de uma aplicação voltada para um ambiente universitário. No projeto foi
                    utilizado o React para criar componentes dinâmicos e interativos, garantindo uma
                    experiência fluida e intuitiva para os usuários.
                  </p>
                  <p>Para a estilização, escolhi Tailwind CSS, que ofereceu uma maneira eficiente e
                    moderna de construir o layout da aplicação. Através das classes utilitárias do
                    Tailwind, consegui desenvolver uma interface responsiva e visualmente atraente,
                    que se adapta perfeitamente a diferentes dispositivos e tamanhos de tela.
                  </p>
                  <h2 className='text-xl mt-3 font-bold'>Backend</h2>
                  <p>
                    O projeto também incluiu o desenvolvimento de uma API, na qual tive a oportunidade
                    de contribuir diretamente. Trabalhei na criação e implementação de testes unitários
                    para as funções do backend, utilizando o Jest. Essa experiência me permitiu garantir
                    a qualidade e a confiabilidade do código, assegurando que todas as funcionalidades
                    da API fossem testadas de maneira eficaz.
                  </p>
                  <br></br>
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
                        <SiPrettier size={28} className="hidden lg:flex" /><strong>&nbsp;Prettier:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Integrado para formatar o código e garantir a consistência do código
                      </div>
                    </li>
                    <li className='flex mb-3'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <SiEslint size={28} className='hidden lg:flex' /> <strong>&nbsp;ESLint:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para procurar erros e melhorar o código, garantindo a qualidade e mantenibilidade do código.
                      </div>
                    </li>
                    <li className='flex mb-3'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <RiTailwindCssFill size={28} className='hidden lg:flex' /><strong>&nbsp;Tailwind:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para garantir uma interface responsiva e visualmente atraente.
                      </div>
                    </li>
                    <li className='flex mb-3'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <SiStyledcomponents size={28} className='hidden lg:flex' /><strong>&nbsp;Styled Components:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        O styled components foi utilizado para a estilização do site, garantindo uma interface visualmente atraente.
                      </div>
                    </li>
                    <li className='flex mb-3'>
                      <div className='lg:flex w-full lg:w-[18%] items-center'>
                        <SiJest size={28} className='hidden lg:flex' /><strong>&nbsp;Jest:&nbsp;</strong>
                      </div>
                      <div className='flex w-full lg:w-[82%] items-center'>
                        Utilizado para testar as funcionalidades do backend, garantindo a qualidade e a confiabilidade do código.
                      </div>
                    </li>
                  </ul>
                  <p>Tive a oportunidade de trabalhar neste projeto durante <strong>5 meses</strong>, sendo uma excelente oportunidade para aplicar e aprimorar minhas
                    habilidades em desenvolvimento front-end e backend, utilizando ferramentas amplamente reconhecidas no mercado.
                  </p>
                  <br></br>
                  <p className='text-[10px]'>
                    <strong>Observações:</strong> Por motivo de direitos de licença, o projeto não pode ser usado para fins comerciais
                    e seu código não pode ser compartilhado
                  </p>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-900 px-4 py-3 justify-center">
              <Button onClick={() => window.open('https://farol.fun', '_blank')} title='ABRIR SITE' icon='website' />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DetailsFarol

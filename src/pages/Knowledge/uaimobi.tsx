"use client"

import React, { Dispatch, useEffect, useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, } from "@headlessui/react"
import { FaFontAwesome, FaReact, FaSass } from "react-icons/fa"
import { BsBootstrap } from "react-icons/bs"
import { SiReactrouter } from "react-icons/si"
import { Button } from "@/components/Button"
import { CgClose } from "react-icons/cg"
import Image from "next/image"
import uaimobi from "@/assets/projects/uaimobi.png"
type Props = {
  setShowDetails: Dispatch<React.SetStateAction<object>>
  showDetails: {
    uaiMobi: boolean
  }
}
const DetailsUaiMobi = ({ setShowDetails, showDetails }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (showDetails) {
      setOpen(showDetails.uaiMobi)
    }
  }, [showDetails])
  return (
    <Dialog open={open}
      onClose={() => { setOpen(false); setShowDetails({ ...showDetails, uaimobi: false }) }}
      className="relative z-10 lg:w-[90%]">
      <DialogBackdrop
        transition
        className=" 
          fixed 
          inset-0
          bg-gray-500
          bg-opacity-75
          transition-opacity 
          data-[closed]:opacity-0 
          data-[enter]:duration-300
          data-[leave]:duration-200 
          data-[enter]:ease-out 
          data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center top-20 lg:items-center">
        <div className="lg:flex lg:justify-center p-4 text-center h-fit">
          <DialogPanel
            transition
            className="
              border-rounded
              border 
              border-black
              lg:w-[90%] 
              relative transform
              rounded-lg 
              bg-gray-900 
              text-left 
              shadow-xl 
              transition-all 
              data-[closed]:translate-y-4 
              data-[closed]:opacity-0 
              data-[enter]:duration-300 
              data-[leave]:duration-200 
              data-[enter]:ease-out 
              data-[leave]:ease-in"
          >
            <div className="bg-gray-900 relative">
              <div className="lg:text-[12px] lg:flex text-white">
                <h1 className="text-2xl font-bold flex lg:hidden justify-between p-4 ">
                  UAI MOBI
                  <CgClose size={25}
                    onClick={() => { setOpen(false); setShowDetails({ ...showDetails, uaimobi: false }) }} />
                </h1>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="m-5 ">
                    <Image src={uaimobi.src}
                      alt="Logo Nolasco Moddas"
                      width={uaimobi.width}
                      height={uaimobi.height}
                      className="h-auto" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-5 relative">

                  <h1 className=" text-3xl font-bold hidden lg:flex justify-between">
                    UAIMOBI
                    <CgClose size={25}
                      className="cursor-pointer"
                      onClick={() => { setOpen(false); setShowDetails({ ...showDetails, uaimobi: false }) }} />
                  </h1>                  <p>
                    Desenvolvi o site da UaiMobi, uma empresa de mobilidade urbana, utilizando uma stack moderna de tecnologias.
                    O projeto foi construído em React, permitindo uma interface de usuário interativa e responsiva, alinhada
                    com as necessidades do cliente. A estrutura do site foi organizada em múltiplas seções, facilitando a
                    navegação e garantindo uma experiência de usuário fluida.
                  </p>
                  <br></br>
                  <h3 className="text-xl font-bold">Principais Tecnologias e Ferramentas Utilizadas:</h3>
                  <ul>
                    <li className="flex my-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center">
                        <FaReact size={28}
                          className="flex my-2" /><strong>&nbsp;React:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Utilizado para a criação de componentes reutilizáveis e para gerenciar o
                        estado da aplicação, proporcionando uma experiência de usuário dinâmica.
                      </div>
                    </li>
                    <li className="flex my-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center">
                        <BsBootstrap size={28}
                          className="flex my-2" /> <strong>&nbsp;Bootstrap:&nbsp;</strong>
                      </div>
                      <div className="w-full flex w-full lg:w-[82%] items-center">
                        Responsável pelo layout responsivo e pelo estilo geral do site,
                        garantindo compatibilidade com diversos dispositivos.
                      </div>

                    </li>
                    <li className="flex my-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center">

                        <FaFontAwesome className="w-8 h-8 flex my-3" /><strong>&nbsp;FontAwesome:&nbsp;</strong>
                      </div>

                      <div className="flex w-full lg:w-[82%] items-center">

                        Integrado para adicionar ícones estilizados que melhoram a
                        usabilidade e a aparência visual do site.
                      </div>

                    </li>
                    <li className="flex my-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center my-3">
                        <svg xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          viewBox="0 0 510.88 512"
                          fill="currentColor"
                          className="w-6 h-6 flex">
                          <rect x="270.57"
                            width="240.31"
                            height="240.31"
                            rx="24"
                            fill="inherit"></rect>
                          <path 
                            d="M215.12 254.73V68.5a29.16 29.16 0 0 0-8.55-20.64 29.19 29.19 0 0 
                           0-41.28 0L16.18 197a55.27 55.27 0 0 0 0 78.14l220.71 220.68a55.27 55.27 
                           0 0 0 78.14 0l149.11-149.11a29.19 29.19 0 0 0 0-41.28l-1.14-1.12a29.16 
                           29.16 0 0 0-20.64-8.55H256.15a41 41 0 0 1-41.03-41.03z"
                            fill="inherit">
                          </path>
                        </svg> <strong>
                          &nbsp;EmailJS:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Implementado para facilitar a comunicação dos usuários com a empresa através de formulários de contato.
                      </div>
                    </li>
                    <li className="flex my-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center">
                        <SiReactrouter size={28}
                          className="flex my-2 mx-2" /> <strong>&nbsp;React Router DOM:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Utilizado para a navegação interna do site, permitindo a criação de uma SPA (Single Page Application).
                      </div>
                    </li>
                    <li className="flex my-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center">
                        <FaSass size={28}
                          className="flex my-2" /><strong>&nbsp;Node-Sass:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Incorporado para permitir a escrita de estilos em SCSS, oferecendo uma melhor organização e reutilização de estilos.
                      </div>
                    </li>
                  </ul>
                  <br />
                  <p>
                    O site foi projetado para ser escalável, seguro e fácil de manter. Além disso, foi implementada uma configuração de ESLint
                    para garantir que o código siga as melhores práticas de desenvolvimento.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:flex bg-gray-900 px-4 py-3 justify-center">
              <Button onClick={() => window.open("https://uaimobi.com.br", "_blank")}
                title="ABRIR SITE"
                icon="website" />
              <Button onClick={() => window.open("https://uaimobi.com.br", "_blank")}
                title="ABRIR REPOSITÓRIO"
                icon="github" />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DetailsUaiMobi

"use client"

import React, { Dispatch, useEffect, useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, } from "@headlessui/react"
import { FaReact } from "react-icons/fa"
import { CgClose } from "react-icons/cg"
import Image from "next/image"
import yatto from "@/assets/projects/yatto-logo.png"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { experienceTime } from "@/utils/experienceTime"
type Props = {
  setShowDetails: Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
  showDetails: {
    yatto: boolean
  }
}
const DetailsYatto = ({ setShowDetails, showDetails }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (showDetails) {
      setOpen(showDetails.yatto)
    }
  }, [showDetails])
  return (
    <Dialog open={open}
      onClose={() => { setOpen(false); setShowDetails({ ...showDetails, yatto: false }) }}
      className="relative z-10 lg:w-[80%]">
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
        <div className="lg:flex lg:justify-center p-4 text-center lg:items-center h-fit">
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
            <div className="bg-gray-900">

              <div className="lg:flex text-white text-sm">
                <h1 className="text-2xl font-bold flex lg:hidden justify-between p-4">
                  DSS TECHNOLOGY - YATTO
                  <CgClose size={25}
                    onClick={() => { setOpen(false); setShowDetails({ ...showDetails, yatto: false }) }} />
                </h1>
                <div className="flex w-full lg:w-1/2 items-center">
                  <div className="m-5">
                    <Image src={yatto.src}
                      alt="Logo Nolasco Moddas"
                      width={yatto.width}
                      height={yatto.height}
                      className="h-auto" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-5">
                  <h1 className="text-3xl font-bold hidden lg:flex my-2 justify-between">
                    DSS TECHNOLOGY - YATTO
                    <CgClose size={25}
                      onClick={() => { setOpen(false); setShowDetails({ ...showDetails, yatto: false }) }}
                      className="cursor-pointer" />
                  </h1>
                  <h2 className="text-xl font-bold mt-2">Frontend</h2>
                  <p>Por meio da empresa DSS Technology, estou trabalhando na criação e desenvolvimento de uma aplicação web
                    que visa auxiliar na gestão de resíduos de baixa reciclabilidade.
                    Este projeto esta totalmente sendo desenvolvido em React e Next.js com estilização do Taiwind.
                  </p>
                  <br></br>
                  <h3 className="text-xl font-bold">Principais Tecnologias e Ferramentas Utilizadas:</h3>
                  <ul>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center">
                        <FaReact size={28}
                          className="flex my-3" /><strong>&nbsp;React:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Utilizado para a criação de componentes reutilizáveis e para gerenciar o
                        estado da aplicação, proporcionando uma experiência de usuário dinâmica.
                      </div>
                    </li>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center">
                        <RiNextjsLine size={28}
                          className="idden lg:flex my-3" /><strong>&nbsp;Next.js:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Utilizado para a construção do front-end da aplicação, permitindo a renderização de
                        paginas dinâmicas e facilitando no roteamento
                      </div>
                    </li>

                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="flex w-full lg:w-[18%] items-center">
                        <RiTailwindCssFill size={28}
                          className="idden lg:flex my-3" /><strong>&nbsp;Tailwind:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Utilizado para a estilização do site, garantindo uma interface responsiva e visualmente atraente.
                      </div>
                    </li>
                  </ul>
                  <p>Atualmente atuo neste projeto como freelancer há
                    <strong> {experienceTime("2024-05-01")}</strong>, sendo uma excelente oportunidade para aplicar e aprimorar minhas
                    habilidades em desenvolvimento front-end e backend, utilizando ferramentas amplamente reconhecidas no mercado.
                  </p>
                  <br></br>
                  <p className="text-[10px]">
                    <strong>Observações:</strong> Por motivo de direitos de licença, o projeto não pode ser usado para fins comerciais
                    e seu código não pode ser compartilhado
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DetailsYatto

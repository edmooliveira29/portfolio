"use client"

import React, { Dispatch, useEffect, useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, } from "@headlessui/react"
import { FaAngular, FaGitlab, FaReact } from "react-icons/fa"
import { Button } from "@/components/Button"
import { CgClose } from "react-icons/cg"
import { TbBrandReactNative } from "react-icons/tb"
import { DiFirebase } from "react-icons/di"
import { RiTailwindCssFill } from "react-icons/ri"
import ImageCarousel from "@/components/Caroussel"
import { experienceTime } from "@/utils/experienceTime"
import { SiCypress, SiJasmine } from "react-icons/si"

type Props = {
  setShowDetails: Dispatch<React.SetStateAction<{ cachacaGestor: boolean }>>
  showDetails: {
    cachacaGestor: boolean
  }
}
const DetailsCachacaGestor = ({ setShowDetails, showDetails }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (showDetails) {
      setOpen(showDetails.cachacaGestor)
    }
  }, [showDetails])

  return (
    <Dialog open={open}
      onClose={() => { setOpen(false); setShowDetails({ ...showDetails, cachacaGestor: false }) }}
      className="relative z-10 lg:w-[90%]">
      <DialogBackdrop
        transition
        className="
          justify-center 
          items-center 
          fixed 
          inset-0
          bg-gray-500
          bg-opacity-75
          transition-opacity 
          data-[closed]:opacity-0 
          data-[enter]:duration-300
          data-[leave]:duration-200 
          data-[enter]:ease-out 
          data-[leave]:ease-in
        "/>
      <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center top-20">
        <div className="lg:flex lg:justify-center m-4 text-center">
          <DialogPanel
            transition
            className="
            overflow-y-auto 
              lg:w-[90%]
              relative 
              transform 
              overflow-hidden 
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
              data-[leave]:ease-in
            ">
            <div className="bg-gray-900">
              <div className="lg:flex text-white text-sm">
                <h1 className="text-2xl font-bold flex lg:hidden justify-between p-4 ">
                  CACHAÇA GESTOR
                  <CgClose size={25}
                    onClick={() => { setOpen(false); setShowDetails({ ...showDetails, cachacaGestor: false }) }} />
                </h1>
                <div className="flex w-full lg:w-1/2">
                  <div className="flex justify-center items-center p-5 w-full">
                    <ImageCarousel images={[
                      "cachaca-gestor-1.png",
                      "cachaca-gestor-3.png",
                      "cachaca-gestor-2.png",
                    ]} />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-2">
                  <h1 className="text-3xl font-bold hidden lg:flex justify-between py-4">CACHAÇA GESTOR
                    <CgClose size={25}
                      onClick={() => { setOpen(false); setShowDetails({ ...showDetails, cachacaGestor: false }) }} />
                  </h1>
                  <p>
                    O Cachaça Gestor é um sistema que facilita a vida do produtor de cachaça e outros destilados.
                    O sistema é adaptado para facilitar o gerenciamento das informações desde o plantio da cana até
                    a emissão de nota fiscal e faturamento.
                    <br></br>
                    <br></br>
                    Desde os tempos de estágio na empresa Cachaça Gestor, foi desenvolvido o projeto do sistema no
                    formato de aplicativo utilizando o React Native. Com o passar do tempo, foi preciso uma grande
                    refatoração para suportar novos recursos e novas funcionalidades, como o uso do Firebase para envio
                    de mensagens de notificação aos usuários.
                    <br></br>
                    <br></br>
                    Para gestão interna do sistema pelos colaboradores do Cachaça Gestor, coordenei a criação de um
                    sistema administrador, realizado totalmente em React e estilizado com o Bootstrap. Para ganrantir a
                    consistência deste projeto, o sistema foi totalmente testado com a ferramenta do Cypress.
                    <br></br>
                    <br></br>
                    Atualmente sou o responsável pelo desenvolvimento e manutenção do FrontEnd em AngularJS com poucos testes
                    rodando em Karma e Jasmine. Para o dia a dia é utilizado a Metodologia Ágil e todos os repositórios estão
                    no Gitlab. Responsável também pela supervisão de um estagiário da equipe.

                    Também sou o responsável pelo processo de migração do sistema para o ReactJs com o uso do
                    Typescript e NextJs e estilização com o Tailwind, atuando no
                    desenvolvimento do sistema e criando tarefas para a equipe.
                  </p>
                  <br></br>
                  <h3 className="text-xl font-bold">Principais Tecnologias e Ferramentas Utilizadas:</h3>
                  <ul>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <TbBrandReactNative size={28}
                          className="hidden lg:flex my-2" /><strong>&nbsp;React Native:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Utilizado para a criação do sistema mobile
                      </div>
                    </li>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <DiFirebase size={28}
                          className="hidden lg:flex my-1" /><strong>&nbsp;Firebase:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Utilizado para gerenciamento de notificações do sistema mobile.
                      </div>
                    </li>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <FaAngular size={28}
                          className="hidden lg:flex my-1" /> <strong>&nbsp;Angular:&nbsp;</strong>
                      </div>
                      <div className="w-full flex w-full lg:w-[82%] items-center">
                        Utilizado para o desenvolvimento do frontend do sistema.
                      </div>
                    </li>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <FaReact size={28}
                          className="hidden lg:flex my-1" /> <strong>&nbsp;React:&nbsp;</strong>
                      </div>
                      <div className="w-full flex w-full lg:w-[82%] items-center">
                        Utilizado para o desenvolvimento do novo sistema do Cachaça Gestor.
                      </div>
                    </li>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <RiTailwindCssFill size={28}
                          className="hidden lg:flex my-1" /> <strong>&nbsp;Tailwind:&nbsp;</strong>
                      </div>
                      <div className="w-full flex w-full lg:w-[82%] items-center">
                        Utilizado para criar a responsividade do novo sistema
                      </div>
                    </li>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <SiCypress size={28}
                          className="hidden lg:flex my-1" /> <strong>&nbsp;Cypress:&nbsp;</strong>
                      </div>
                      <div className="w-full flex w-full lg:w-[82%] items-center">
                        Utilizado para testes automatizados do sistema administrador
                      </div>
                    </li>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <FaGitlab size={28}
                          className="hidden lg:flex my-1" /> <strong>&nbsp;Cypress:&nbsp;</strong>
                      </div>
                      <div className="w-full flex w-full lg:w-[82%] items-center">
                        Local onde é realizado a gestão dos repositórios
                      </div>
                    </li>
                    <li className="flex mb-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <SiJasmine size={28}
                          className="hidden lg:flex my-2" /> <strong>&nbsp;Jasmine:&nbsp;</strong>
                      </div>
                      <div className="w-full flex w-full lg:w-[82%] items-center">
                        Em conjunto com o Karma é utilizado para realizar alguns testes unitários do sistema em Angular
                      </div>
                    </li>
                  </ul>
                  <p>Atualmente estou neste projeto a {experienceTime("2020-03-01")}
                    sendo uma excelente oportunidade para aplicar e aprimorar minhas
                    habilidades em desenvolvimento front-end, mobile e o básico do backend
                    utilizando o NodeJS, que são ferramentas amplamente reconhecidas no mercado.
                  </p>
                  <br></br>
                  <p className="text-[10px]">
                    <strong>Observações:</strong> Por motivo de direitos de licença,
                    o projeto não pode ser usado para fins comerciais e seu código não pode ser compartilhado.
                  </p>
                </div>
              </div>
              <div className="grid lg:flex bg-gray-900 px-4 py-3 justify-center">
                <Button onClick={() => window.open("https://play.google.com/store/apps/details?id=com.app_cachacagestor&hl=pt&gl=US", "_blank")}
                  title="ABRIR PLAYSTORE"
                  icon="playstore" />
                <Button onClick={() => window.open("https://sistema.cachacagestor.com.br", "_blank")}
                  title="ABRIR SITE"
                  icon="website" />
                <Button onClick={() => window.open("https://www.instagram.com/cachacagestor/", "_blank")}
                  title="ABRIR INSTAGRAM"
                  icon="instagram" />
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DetailsCachacaGestor

"use client"

import React, { Dispatch, useEffect, useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, } from "@headlessui/react"
import { SiOpengl } from "react-icons/si"
import { Button } from "@/components/Button"
import { CgCPlusPlus, CgClose } from "react-icons/cg"
import Image from "next/image"
import article from "@/assets/projects/article.png"
type Props = {
  setShowDetails: Dispatch<React.SetStateAction<object>>
  showDetails: {
    article: boolean
  }
}
const DetailsArticle = ({ setShowDetails, showDetails }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (showDetails) {
      setOpen(showDetails.article)
    }
  }, [showDetails])
  return (
    <Dialog open={open}
      onClose={() => { setOpen(false); setShowDetails({ ...showDetails, article: false }) }}
      className="relative z-10 lg:w-[90%]">
      <DialogBackdrop
        transition
        className="justify-center 
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
          data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 overflow-y-auto flex justify-center top-20">
        <div className="lg:flex lg:justify-center p-4 text-center ">
          <DialogPanel
            transition
            className="
              h-fit
              overflow-y-auto
              border-rounded
              border 
              border-black
              lg:w-[90%] 
              relative transform
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
              data-[leave]:ease-in"
          >
            <div className="bg-gray-900 relative">
              <div className="lg:text-[12px] lg:flex text-white">
                <h1 className="text-2xl font-bold flex lg:hidden justify-between p-4 ">
                  UAI MOBI
                  <CgClose size={25}
                    onClick={() => { setOpen(false); setShowDetails({ ...showDetails, article: false }) }} />
                </h1>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="m-5 ">
                    <Image src={article.src}
                      alt="Logo Nolasco Moddas"
                      width={article.width}
                      height={article.height}
                      className="h-auto" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 p-5 relative">

                  <h1 className=" text-3xl font-bold hidden lg:flex justify-between">
                    ARTIGO PUBLICADO
                    <CgClose size={25}
                      className="cursor-pointer"
                      onClick={() => { setOpen(false); setShowDetails({ ...showDetails, article: false }) }} />
                  </h1>                  <p>
                    Este artigo é resultado de uma pesquisa realizado como Trabalho de Conclusão de Curso
                    de Engenharia da Computação da Universidade Federal de Ouro Preto realizado em conjunto com os professores doutores
                    <a className="font-bold text-gray-200 text-opacity-100"
                      href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=84BE7FFD71992A4AED354A6E7F249501.buscatextual_0"
                      target="_blank"
                      rel="noreferrer"> Glauco Ferreira Gazel Yared</a> e
                    <a className="font-bold text-gray-200 text-opacity-100"
                      href="Z"
                      target="_blank"
                      rel="noreferrer"> Gilda Aparecida de Assis</a>
                  </p>
                  <br></br>
                  <p>O TCC se tornou um artigo publicado em DEZEMBRO DE 2021 na Revista Mackenzie de Engenharia e Computação.
                    Este artigo esta relacionado a análise da marcha humana a partir de dados biométricos onde a captura
                    dos dados foram realizadas com sensores de baixo custo, o que proporciona aplicações em áreas
                    como segurança, robótica bioinspirada e saúde.
                  </p>
                  <br></br>

                  <h3 className="text-xl font-bold">Principais Tecnologias e Ferramentas Utilizadas:</h3>
                  <ul>
                    <li className="flex my-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <CgCPlusPlus size={28}
                          className="hidden lg:flex my-2" /><strong>&nbsp;C++:&nbsp;</strong>
                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Utilizado para o desenvolvimento do código para integração com o OPENGL.
                      </div>
                    </li>
                    <li className="flex my-1 border-solid border-b border-gray-700">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <SiOpengl size={28}
                          className="hidden lg:flex my-2" /> <strong>&nbsp;OpenGL:&nbsp;</strong>
                      </div>
                      <div className="w-full flex w-full lg:w-[82%] items-center">
                        Utilizado para implementação da aplicação gŕafica.
                      </div>
                    </li>
                  </ul>
                  <br />
                  <p>
                    O desenvolvimento deste artigo (codificação, escrita e publicação), está relacionado a um trabalho acadêmico.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex bg-gray-900 px-4 py-3 justify-center">
              <Button onClick={() => window.open("https://editorarevistas.mackenzie.br/index.php/rmec/article/view/14880/11431", "_blank")}
                title="ABRIR ARTIGO"
                icon="website" />
              <Button onClick={() => window.open("https://github.com/edmooliveira29/skeleton-model", "_blank")}
                title="ABRIR REPOSITÓRIO"
                icon="github" />
              <Button onClick={() => window.open("https://www.monografias.ufop.br/handle/35400000/3501", "_blank")}
                title="ABRIR TCC"
                icon="website" />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DetailsArticle

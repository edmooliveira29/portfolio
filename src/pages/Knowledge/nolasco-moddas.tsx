"use client"

import React, { Dispatch, useEffect, useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, } from "@headlessui/react"
import logoNuvemShop from "@/assets/nuvemshop_icon.png"
import { Button } from "@/components/Button"
import { CgClose } from "react-icons/cg"
import Image from "next/image"
import nolascoModdas from "@/assets/projects/nolascomodas.png"

type Props = {
  setShowDetails: Dispatch<React.SetStateAction<{nolascoModdas: boolean}>>
  showDetails: {
    nolascoModdas: boolean
  }
}
const DetailsNolascoModdas = ({ setShowDetails, showDetails }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (showDetails) {
      setOpen(showDetails.nolascoModdas)
    }
  }, [showDetails])
  return (
    <Dialog open={open}
      onClose={() => { setOpen(false); setShowDetails({ ...showDetails, nolascoModdas: false }) }}
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
              data-[leave]:ease-in
            ">
            <div className="bg-gray-900">
              <div className="grid lg:flex justify-end bg-gray-900 text-white pt-4  cursor-pointer">
                <h1 className="text-2xl font-bold flex justify-between lg:hidden text-center px-4">NOLASCO MODDAS
                  <CgClose size={25}
                    onClick={() => { setOpen(false); setShowDetails({ ...showDetails, nolascoModdas: false }) }} />
                </h1>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <div className="m-5">
                    <Image src={nolascoModdas.src}
                      alt="Logo Nolasco Moddas"
                      width={nolascoModdas.width}
                      height={nolascoModdas.height}
                      className="bg-cover" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-2 px-4">
                  <h1 className=" text-3xl font-bold hidden lg:flex justify-between">
                    NOLASCO MODDAS
                    <CgClose size={25}
                      onClick={() => { setOpen(false); setShowDetails({ ...showDetails, nolascoModdas: false }) }} />
                  </h1>
                  <p>
                    Foi criado uma loja virtual personalizada utilizando a
                    Nuvemshop, uma das plataformas mais versáteis do mercado. O trabalho incluiu desde a
                    montagem do site em No Code, garantindo que o e-commerce estivesse pronto para vendas
                    sem necessidade de programação, até a configuração completa dos meios de pagamento,
                    proporcionando segurança e facilidade para o dono da loja.
                  </p>
                  <br></br>
                  <p>
                    Além disso, foi realizada a configuração da plataforma, otimizando cada detalhe
                    para melhorar a experiência do usuário. Foi comprado um domínio no GoDaddy,
                    realizando o direcionamento dos linkso que garantiu
                    o profissionalismo da loja.
                  </p>
                  <br></br>

                  <h3 className="text-xl font-bold">Principais Tecnologias e Ferramentas Utilizadas:</h3>
                  <ul>
                    <li className="flex mb-3">
                      <div className="lg:flex w-full lg:w-[18%] items-center">
                        <Image src={logoNuvemShop.src}
                          alt="Logo NuvemShop"
                          width={logoNuvemShop.width}
                          height={logoNuvemShop.height}
                          className="h-auto" />

                      </div>
                      <div className="flex w-full lg:w-[82%] items-center">
                        Implementado para facilitar a comunicação dos usuários com a empresa
                        através de formulários de contato.
                      </div>
                    </li>
                  </ul>
                  <p>Tive a oportunidade de trabalhar neste projeto durante <strong>1 mês</strong>,
                    sendo uma excelente oportunidade para aplicar e aprimorar minhas
                    habilidades em desenvolvimento nocode, utilizando o nuvemshop que é uma
                    das plataformas mais utilizadas para o e-commerce.
                  </p>
                  <br></br>
                  <p className="text-[10px]">
                    <strong>Observações:</strong> Por motivo de direitos de licença, o ambiente interno
                    da plataforma não pode ser compartilhado.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid lg:flex bg-gray-900 px-4 py-3 justify-center">
              <Button onClick={() => window.open("https://nolascomoddas.com.br", "_blank")}
                title="ABRIR SITE"
                icon="website" />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default DetailsNolascoModdas

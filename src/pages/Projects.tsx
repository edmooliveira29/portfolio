import React from "react"
import uaimobi from "@/assets/projects/uaimobi.png"
import nolascoModdas from "@/assets/projects/nolascomodas.png"
import Image from "next/image"
import { FaAngular, FaGitlab, FaReact, FaSass } from "react-icons/fa"
import { DiGoogleCloudPlatform, DiJavascript, DiMongodb } from "react-icons/di"
import { SiCypress, SiEslint, SiJasmine, SiJest, SiNetlify, SiOpengl, SiPrettier, SiStyledcomponents } from "react-icons/si"
import nuvemShopIcon from "@/assets/nuvemshop_icon.png"
import yattoLogo from "@/assets/projects/yatto-logo.png"
import portfolio from "@/assets/projects/portfolio-1.png"
import cachacaGestor from "@/assets/projects/cachaca-gestor-3.png"
import tccPosGraduacao from "@/assets/projects/tcc-pos-graduacao.png"
import farol from "@/assets/projects/farol.png"
import article from "@/assets/projects/article.png"
import { Button } from "@/components/Button"
import { TbBrandReactNative } from "react-icons/tb"
import { BsBootstrap } from "react-icons/bs"
import { BiLogoFirebase } from "react-icons/bi"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import DetailsUaiMobi from "./Knowledge/uaimobi"
import DetailsNolascoModdas from "./Knowledge/nolasco-moddas"
import DetailsTCCPosGraduacao from "./Knowledge/tcc-pos-graduacao"
import DetailsCachacaGestor from "./Knowledge/cachaca-gestor"
import DetailsFarol from "./Knowledge/farol"
import DetailsYatto from "./Knowledge/yatto"
import DetailsPortfolio from "./Knowledge/portfolio"
import DetailsArticle from "./Knowledge/article"
import { CgCPlusPlus } from "react-icons/cg"

const Projects = () => {
  // eslint-disable-next-line 
  const [showDetails, setShowDetails] = React.useState<any>({
    uaimobi: false,
    nolascoModdas: false,
    nuvemShop: false,
    yatto: false,
    cachacaGestor: false,
    tccPosGraduacao: false,
    farol: false,
    portfolio: false,
    article: false
  })


  return (
    <section className="sm:px-0 pt-5 text-white">
      <h1 className="text-3xl font-bold after:block after:w-8 after:h-1 after:bg-white after:mt-1 mx-5">
        PROJETOS
      </h1>
      <div className="lg:flex items-center my-5">
        <div className="w-full lg:w-1/3 h-full p-5 lg:hover:scale-105 duration-500">
          <div className="relative rounded-lg bg-cover p-12 text-center h-[250px] group"
            style={{ backgroundImage: `url(${portfolio.src})` }}>
            <div className="
              absolute 
              bottom-0 
              left-0 
              right-0
              top-0
              h-full 
              w-full 
              rounded-lg
              bg-black/70
              group-hover:bg-black/20
              transition duration-500"
            >
              <div className="flex h-full items-center justify-center">
                <div className="text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h2 className="mb-4 text-2xl font-semibold">PORTFÓLIO - EDMO </h2>
                  <div className="flex items-center justify-around">
                    <FaReact className="text-3xl" />
                    <RiTailwindCssFill className="text-3xl" />
                    <RiNextjsLine className="text-3xl" />
                  </div>
                </div>
                <div className="w-full right-0 p-2 flex absolute bottom-0 items-center justify-between">
                  <span className="text-md font-bold">ESTE PORTFÓLIO</span>
                  <Button title={"VER MAIS"}
                    icon="website"
                    onClick={() => setShowDetails({ ...showDetails, portfolio: true })} />
                  {showDetails.portfolio && <DetailsPortfolio setShowDetails={setShowDetails}
                    showDetails={{ portfolio: true }} />}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 h-full p-5 lg:hover:scale-105 duration-500">
          <div className="relative rounded-lg bg-cover p-12 text-center h-[250px] group"
            style={{ backgroundImage: `url(${nolascoModdas.src})` }}>
            <div className="
              absolute 
              bottom-0 
              left-0 
              right-0
              top-0
              h-full 
              w-full 
              rounded-lg
              bg-black/70
              group-hover:bg-black/20
              transition duration-500">
              <div className="flex h-full items-center justify-center">
                <div className="text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h2 className="mb-4 text-2xl font-semibold">NOLASCO MODDAS</h2>
                  <div className="flex items-center justify-around">
                    <Image src={nuvemShopIcon}
                      alt="Logo"
                      className="h-10 w-auto" />
                  </div>
                </div>
                <div className="w-full right-0 p-2 flex absolute bottom-0 items-center justify-between">
                  <span className="text-md font-bold">ABRIL 2024</span>
                  <Button title={"VER MAIS"}
                    icon="website"
                    onClick={() => setShowDetails({ ...showDetails, nolascoModdas: true })} />
                  {showDetails.nolascoModdas && <DetailsNolascoModdas setShowDetails={setShowDetails}
                    showDetails={{ nolascoModdas: true }} />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-full p-5 lg:hover:scale-105 duration-500">
          <div className="relative rounded-lg bg-cover p-12 text-center h-[250px] group"
            style={{ backgroundImage: `url(${cachacaGestor.src})` }}>
            <div className="
              absolute 
              bottom-0 
              left-0 
              right-0
              top-0
              h-full 
              w-full 
              rounded-lg
              bg-black/70
              group-hover:bg-black/20
              transition duration-500">
              <div className="flex h-full items-center justify-center">
                <div className="text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h2 className="mb-4 text-2xl font-semibold">CACHAÇA GESTOR</h2>
                  <div className="flex items-center justify-around">
                    <TbBrandReactNative className="text-3xl mx-3 mb-2" />
                    <DiJavascript className="text-3xl mx-3 mb-2" />
                    <FaAngular className="text-3xl mx-3 mb-2" />
                    <SiCypress className="text-3xl mx-3 mb-2" />
                    <RiTailwindCssFill className="text-3xl mx-3 mb-2" />

                  </div>
                  <div className="flex items-center justify-around">
                    <BsBootstrap className="text-3xl mx-3" />
                    <BiLogoFirebase className="text-3xl mx-3" />
                    <FaGitlab className="text-3xl mx-3" />
                    <SiJasmine className="text-3xl mx-3" />
                  </div>
                </div>
                <div className="w-full right-0 p-2 flex absolute bottom-0 items-center justify-between">
                  <span className="text-md font-bold">ATUALMENTE</span>
                  <Button title={"VER MAIS"}
                    icon="website"
                    onClick={() => setShowDetails({ ...showDetails, cachacaGestor: true })} />
                  {showDetails.cachacaGestor && <DetailsCachacaGestor setShowDetails={setShowDetails}
                    showDetails={{ cachacaGestor: true }} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center my-5">

        <div className="w-full lg:w-1/3 h-full p-5 lg:hover:scale-105 duration-500">
          <div className="relative rounded-lg bg-cover p-12 text-center h-[250px] group"
            style={{ backgroundImage: `url(${tccPosGraduacao.src})` }}>
            <div className="
              absolute 
              bottom-0 
              left-0 
              right-0
              top-0
              h-full 
              w-full 
              rounded-lg
              bg-black/70
              group-hover:bg-black/20
              transition duration-500">
              <div className="flex h-full items-center justify-center">
                <div className="text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h2 className="mb-4 text-2xl font-semibold">SISTEMA GERENCIADOR</h2>
                  <div className="flex items-center justify-around">
                    <FaReact className="text-3xl" />
                    <DiMongodb className="text-3xl" />
                    <SiNetlify className="text-3xl" />
                    <DiGoogleCloudPlatform className="text-3xl" />
                    <BsBootstrap className="text-3xl" />
                    <SiCypress className="text-3xl" />
                    <FaSass className="text-3xl" />
                  </div>
                </div>
                <div className="w-full right-0 p-2 flex absolute bottom-0 items-center justify-between">
                  <span className="text-md font-bold">AGOSTO 2023</span>
                  <Button title={"VER MAIS"}
                    icon="website"
                    onClick={() => setShowDetails({ ...showDetails, tccPosGraduacao: true })} />
                  {showDetails.tccPosGraduacao && <DetailsTCCPosGraduacao setShowDetails={setShowDetails}
                    showDetails={{ tccPosGraduacao: true }} />}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full lg:w-1/3 h-full p-5 lg:hover:scale-105 duration-500">
          <div className="relative rounded-lg bg-cover p-12 text-center h-[250px] group"
            style={{ backgroundImage: `url(${farol.src})` }}>
            <div className="
              absolute 
              bottom-0 
              left-0 
              right-0
              top-0
              h-full 
              w-full 
              rounded-lg
              bg-black/70
              group-hover:bg-black/20
              transition duration-500">
              <div className="flex h-full items-center justify-center">
                <div className="text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h2 className="mb-4 text-2xl font-semibold">FAROL</h2>
                  <div className="flex items-center justify-around">
                    <FaReact className="text-3xl mx-3" />
                    <SiStyledcomponents className="text-3xl mx-3" />
                    <SiJest className="text-3xl mx-3" />
                    <RiTailwindCssFill className="text-3xl mx-3" />
                    <SiEslint className="text-3xl mx-3" />
                    <SiPrettier className="text-3xl mx-3" />
                  </div>
                </div>
                <div className="w-full right-0 p-2 flex absolute bottom-0 items-center justify-between">
                  <span className="text-md font-bold">FREELANCER</span>
                  <Button title={"VER MAIS"}
                    icon="website"
                    onClick={() => setShowDetails({ ...showDetails, farol: true })} />
                  {showDetails.farol && <DetailsFarol setShowDetails={setShowDetails}
                    showDetails={{ farol: true }} />}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 h-full p-5 lg:hover:scale-105 duration-500">
          <div className="relative rounded-lg bg-cover p-12 text-center h-[250px] group"
            style={{ backgroundImage: `url(${yattoLogo.src})` }}>
            <div className="
              absolute 
              bottom-0 
              left-0 
              right-0
              top-0
              h-full 
              w-full 
              rounded-lg
              bg-black/70
              group-hover:bg-black/20
              transition duration-500">
              <div className="flex h-full items-center justify-center">
                <div className="text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h2 className="mb-4 text-2xl font-semibold">DSS TECHNOLOGY - YATTO </h2>
                  <div className="flex items-center justify-around">
                    <FaReact className="text-3xl" />
                    <RiTailwindCssFill className="text-3xl" />
                    <RiNextjsLine className="text-3xl" />
                  </div>
                </div>
                <div className="w-full right-0 p-2 flex absolute bottom-0 items-center justify-between">
                  <span className="text-md font-bold">FREELANCER</span>
                  <Button title={"VER MAIS"}
                    icon="website"
                    onClick={() => setShowDetails({ ...showDetails, yatto: true })} />
                  {showDetails.yatto && <DetailsYatto setShowDetails={setShowDetails}
                    showDetails={{ yatto: true }} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center my-5 justify-center">
        <div className="w-full lg:w-1/3 h-full p-5 lg:hover:scale-105 duration-500">
          <div className="relative rounded-lg bg-cover p-12 text-center h-[250px] group"
            style={{ backgroundImage: `url(${uaimobi.src})` }}>
            <div className="
              absolute 
              bottom-0 
              left-0 
              right-0
              top-0
              h-full 
              w-full 
              rounded-lg
              bg-black/70
              group-hover:bg-black/20
              transition duration-500">
              <div className="flex h-full items-center justify-center">
                <div className="text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h2 className="mb-4 text-2xl font-semibold">UAI MOBI  </h2>
                  <div className="flex items-center justify-around">
                    <FaReact className="text-3xl mx-3" />
                    <DiJavascript className="text-3xl mx-3" />
                    <SiNetlify className="text-3xl mx-3" />
                    <BsBootstrap className="text-3xl mx-3" />
                  </div>
                </div>
                <div className="w-full right-0 p-2 flex absolute bottom-0 items-center justify-between">
                  <span className="text-md font-bold">JANEIRO 2023</span>
                  <Button title={"VER MAIS"}
                    icon="website"
                    onClick={() => setShowDetails({ ...showDetails, uaimobi: true })} />
                  {showDetails.uaimobi && <DetailsUaiMobi setShowDetails={setShowDetails}
                    showDetails={{ uaiMobi: true }} />}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 h-full p-5 lg:hover:scale-105 duration-500">
          <div className="relative rounded-lg bg-cover p-12 text-center h-[250px] group"
            style={{ backgroundImage: `url(${article.src})` }}>
            <div className="
              absolute 
              bottom-0 
              left-0 
              right-0
              top-0
              h-full 
              w-full 
              rounded-lg
              bg-black/70
              group-hover:bg-black/20
              transition duration-500">
              <div className="flex h-full items-center justify-center">
                <div className="text-white opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h2 className="mb-4 text-2xl font-semibold">ARTIGO PUBLICADO  </h2>
                  <div className="flex items-center justify-around">
                    <CgCPlusPlus className="text-3xl mx-3" />
                    <SiOpengl className="text-3xl mx-3" />
                  </div>
                </div>
                <div className="w-full right-0 p-2 flex absolute bottom-0 items-center justify-between">
                  <span className="text-md font-bold">DEZEMBRO 2021</span>
                  <Button title={"VER MAIS"}
                    icon="website"
                    onClick={() => setShowDetails({ ...showDetails, article: true })} />
                  {showDetails.article && <DetailsArticle setShowDetails={setShowDetails}
                    showDetails={{ article: true }} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects
import React from "react"
import nodeJsCreate from "@/assets/certificates/alura-node-criando-sua-biblioteca.png"
import nodeJsApi from "@/assets/certificates/alura-api-rest-com-express.png"
import uxMonitore from "@/assets/certificates/alura-monitore-mensure-e-teste-o-seu-projeto.png"
import scrum1 from "@/assets/certificates/alura-gerencie-o-seu-projeto-de-forma-agil.png"
import scrum2 from "@/assets/certificates/alura-manifesto-agil-parte-2.png"
import figma from "@/assets/certificates/alura-figma-trabalhando-na-contrucao-de-um-design-system.png"
import googleDeveloper from "@/assets/certificates/google-developer.png"
import nodeJsCloud from "@/assets/certificates/alura-nodejs-adicionando-ci-ao-projeto-e-deploy-no-google.png"
import rocketseat from "@/assets/certificates/rocketseat.png"
import Image from "next/image"
import { Button } from "@/components/Button"
import DetailsTCCPosGraduacao from "./Knowledge/tcc-pos-graduacao"

const AcademicFormation = () => {
  const [showDetails, setShowDetails] = React.useState<{ tccPosGraduacao: boolean }>({
    tccPosGraduacao: false
  })


  return (
    <section className="sm:px-0 pt-5 text-white">
      <h1 className="pt-5 ml-5 relative text-3xl font-bold after:block after:w-8 after:h-1 after:bg-white after:mt-1">
        FORMAÇÃO E CURSOS
      </h1>
      <div className="mx-auto w-full">
        <div className="overflow-hidden p-10">
          <div className="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">11</h1>
            </div>
            <div className="
              order-1 
              bg-gray-200 
              rounded-lg 
              shadow-xl 
              w-full
              md:w-1/2
              px-6
              py-4
              transition-transform
              hover:translate-y-[-20px]
              duration-500">
              <h3 className="font-bold text-gray-800 text-xl">MARCO 2024 </h3>
              <h3 className="font-bold text-gray-800 text-md">TechUp</h3>
              <h3 className="mb-3 font-bold text-gray-800 text-md">GDG BH</h3>
              <div className="flex justify-center">
                <Image src={googleDeveloper.src}
                  width={300}
                  height={300}
                  alt="" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://drive.google.com/file/d/1PdrQ85nRX4rKz2aNAmgGOKwmdJ6V4gnU/view?usp=sharing")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">10</h1>
            </div>
            <div className="order-1 
            bg-gray-400 
            rounded-lg 
            shadow-xl 
            w-full 
            md:w-1/2 
            px-6 
            py-4 
            transition-transform 
            hover:translate-y-[-20px]
             duration-500">
              <h3 className="font-bold text-gray-800 text-xl"> FEVEREIRO 2024 </h3>
              <h3 className="font-bold text-gray-800 text-md">NLW Expert trilha de Python,</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://alura.com.br"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">ROCKETSEAT</h3>
              </a>
              <div className="flex justify-center">
                <Image src={rocketseat.src}
                  width={300}
                  height={300}
                  alt="Alura" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://drive.google.com/file/d/1AizRN2CRhAffZ15TO4rtAq0SwEc7U94_/view?usp=drive_link")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">9</h1>
            </div>
            <div className="order-1 
            bg-gray-400 
            rounded-lg 
            shadow-xl 
            w-full 
            md:w-1/2 
            px-6 
            py-4 
            transition-transform 
            hover:translate-y-[-20px]
             duration-500">
              <h3 className="font-bold text-gray-800 text-xl">MAIO 2023 </h3>
              <h3 className="font-bold text-gray-800 text-md">NodeJS: adicionando CI ao projeto e deploy no Google Cloud</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://alura.com.br"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">ALURA</h3>
              </a>
              <div className="flex justify-center">
                <Image src={nodeJsCloud.src}
                  width={300}
                  height={300}
                  alt="Alura" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://cursos.alura.com.br/certificate/e53c2522-2c5b-4d9f-9092-5ea9a9788b3d")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">8</h1>
            </div>
            <div className="order-1 
            bg-gray-200 
            rounded-lg 
            shadow-xl 
            w-full
            md:w-1/2
            px-6
            py-4
            transition-transform
            hover:translate-y-[-20px]
            duration-500">
              <h3 className="font-bold text-gray-800 text-xl">ABRIL 2023 </h3>
              <h3 className="font-bold text-gray-800 text-md">Figma: Trabalhando na construção de um Design System</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://alura.com.br"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">ALURA</h3>
              </a>
              <div className="flex justify-center">
                <Image src={figma.src}
                  width={300}
                  height={300}
                  alt="Alura" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://cursos.alura.com.br/certificate/c4a9a254-991e-40fe-bd13-9e98912ce645")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 md:block md:w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 font-semibold text-lg text-white">7</h1>
            </div>
            <div className="order-1 
            bg-gray-400 
            rounded-lg 
            shadow-xl 
            w-full 
            md:w-1/2 
            px-6 
            py-4 
            transition-transform 
            hover:translate-y-[-20px]
             duration-500">
              <h3 className="font-bold text-gray-800 text-xl">MARÇO 2022 - AGOSTO - 2023 </h3>
              <h3 className="font-bold text-gray-800 text-md">Desenvolvimento Web Full Stack</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://vemprapuc.pucminas.br/desenvolvimento-full-stack"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">Puc-Minas</h3>
              </a>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                No curso foram apresentadas as principais metodologias, linguagens e
                frameworks de desenvolvimento de software da atualidade para
                Front End Web e Mobile como React e React Native e Back End
                que permitem a criação de APIs robustas baseadas em Web Services RESTful.
                Também foi apresentado o método de desenvolvimento ágil alinhado à cultura DevOps e
                a criação de aplicações Web avaliadas por meio de ferramentas de Web Analytics.
                <br></br>
                <br></br>
                Durante o curso foi desenvolvido uma plataforma de gerenciamento de lojas.
                <br></br>
                <br></br>
                <a onClick={() => setShowDetails({ ...showDetails, tccPosGraduacao: true })}
                  target="_blank"
                  className="font-bold text-gray-800 text-opacity-100 cursor-pointer" > Clique aqui
                </a> para saber mais sobre o projeto
                {showDetails.tccPosGraduacao && <DetailsTCCPosGraduacao setShowDetails={setShowDetails}
                  showDetails={{ tccPosGraduacao: true }} />}

              </p>
              <div className="flex justify-center">
                <Button title="Ver certificado"
                  onClick={() => window.open("https://drive.google.com/file/d/1CkZKSaewgCweIvLwb_3eAPWR9TfmFnlD/view?usp=drive_link")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">6</h1>
            </div>
            <div className="order-1 
            bg-gray-200 
            rounded-lg 
            shadow-xl 
            w-full
            md:w-1/2
            px-6
            py-4
            transition-transform
            hover:translate-y-[-20px]
            duration-500">
              <h3 className="font-bold text-gray-800 text-xl">NOVEMBRO 2022 </h3>
              <h3 className="font-bold text-gray-800 text-md">Scrum parte 2: o Manifesto Ágil, liderança e organização em Scrum</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://alura.com.br"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">ALURA</h3>
              </a>
              <div className="flex justify-center">
                <Image src={scrum2.src}
                  width={300}
                  height={300}
                  alt="Alura" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://cursos.alura.com.br/certificate/376b68dc-7dd8-4721-9d32-9ca58a42fd83")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">5</h1>
            </div>
            <div className="order-1 
            bg-gray-400 
            rounded-lg 
            shadow-xl 
            w-full 
            md:w-1/2 
            px-6 
            py-4 
            transition-transform 
            hover:translate-y-[-20px]
             duration-500">
              <h3 className="font-bold text-gray-800 text-xl">NOVEMBRO 2022 </h3>
              <h3 className="font-bold text-gray-800 text-md">Scrum parte 1: gerencie o seu projeto de forma ágil</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://alura.com.br"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">ALURA</h3>
              </a>
              <div className="flex justify-center">
                <Image src={scrum1.src}
                  width={300}
                  height={300}
                  alt="Alura" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://cursos.alura.com.br/certificate/aaf5a6bd-8a9f-4c12-890e-25df1f1eeb42")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 
            bg-gray-200 
            rounded-lg 
            shadow-xl 
            w-full
            md:w-1/2
            px-6
            py-4
            transition-transform
            hover:translate-y-[-20px]
            duration-500">
              <h3 className="font-bold text-gray-800 text-xl">OUTUBRO 2022 </h3>
              <h3 className="font-bold text-gray-800 text-md">UX Produto: monitore, mensure e teste o seu projeto</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://alura.com.br"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">ALURA</h3>
              </a>
              <div className="flex justify-center">
                <Image src={uxMonitore.src}
                  width={300}
                  height={300}
                  alt="Alura" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://cursos.alura.com.br/certificate/537eab8d-6467-4c69-8fb5-879cb561bfdd")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">3</h1>
            </div>
            <div className="order-1 
            bg-gray-400 
            rounded-lg 
            shadow-xl 
            w-full 
            md:w-1/2 
            px-6 
            py-4 
            transition-transform 
            hover:translate-y-[-20px]
             duration-500">
              <h3 className="font-bold text-gray-800 text-xl">JULHO 2022 </h3>
              <h3 className="font-bold text-gray-800 text-md">Node.js: API Rest com Express e MongoDB</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://alura.com.br"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">ALURA</h3>
              </a>
              <div className="flex justify-center">
                <Image src={nodeJsApi.src}
                  width={300}
                  height={300}
                  alt="Alura" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://cursos.alura.com.br/certificate/6a29dd17-152b-419d-a73a-f3cec2e90b23")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 
            bg-gray-200 
            rounded-lg 
            shadow-xl 
            w-full
            md:w-1/2
            px-6
            py-4
            transition-transform
            hover:translate-y-[-20px]
            duration-500">
              <h3 className="font-bold text-gray-800 text-xl">JULHO 2022 </h3>
              <h3 className="font-bold text-gray-800 text-md">NodeJs: Criando sua biblioteca</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://alura.com.br"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">ALURA</h3>
              </a>
              <div className="flex justify-center">
                <Image src={nodeJsCreate.src}
                  width={300}
                  height={300}
                  alt="Alura" />
              </div>
              <div className="flex justify-center">
                <Button title="Ver Certificado"
                  onClick={() => window.open("https://cursos.alura.com.br/certificate/82424ee8-0782-4e76-a5db-8ecb7903261c")}
                  icon={"website"} />
              </div>
            </div>
          </div>

          <div className="mb-8 lg:flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-1/2"></div>
            <div className="mx-2 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:block">
              <h1 className="mx-3 text-white font-semibold text-lg">1</h1>
            </div>
            <div className="
              order-1 
              bg-gray-400 
              rounded-lg 
              shadow-xl 
              w-full 
              md:w-1/2 
              px-6 
              py-4 
              transition-transform 
              hover:translate-y-[-20px]
               duration-500"
            >
              <h3 className="font-bold text-gray-800 text-xl">JULHO 2015 - OUTUBRO - 2021 </h3>
              <h3 className="font-bold text-gray-800 text-md">Engenharia da computação</h3>
              <a className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"
                href="https://escolha.ufop.br/cursos/engenharia-de-computacao"
                target="_blank"
                rel="noreferrer">
                <h3 className="mb-3 font-bold text-gray-800 text-md">UFOP</h3>
              </a>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                No curso de Engenharia de Computação, foram estudados as disciplinas essenciais
                nas áreas de matemática, física e programação de computadores.
                Além disso, foi apresentado conhecimentos tecnológicos em bancos de dados,
                arquitetura de computadores e inteligência artificial. Bem como, os conhecimentos em
                redes de computadores, engenharia de software e eletrônica de baixa potência. Durante o curso
                é desenvolvido vários projetos vinculados as disciplinas.
                <br></br>
                <br></br>
                O trabalho de conclusão de curso foi realizado junto aos professores doutores
                <a className="font-bold text-gray-800 text-opacity-100"
                  href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=84BE7FFD71992A4AED354A6E7F249501.buscatextual_0"
                  target="_blank"
                  rel="noreferrer"> Glauco Ferreira Gazel Yared</a> e
                <a className="font-bold text-gray-800 text-opacity-100"
                  href="Z"
                  target="_blank"
                  rel="noreferrer"> Gilda Aparecida de Assis</a>
                <br></br>
                <br></br>
                <a href="https://www.monografias.ufop.br/handle/35400000/3501"
                  target="_blank"
                  className="font-bold text-gray-800 text-opacity-100"
                  rel="noreferrer" > Clique aqui
                </a> para saber mais sobre o trabalho de conclusão de curso.
                <br></br>
              </p></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AcademicFormation
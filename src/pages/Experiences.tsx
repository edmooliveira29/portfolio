import { experienceTime } from "@/utils/experienceTime"
import React from "react"

const Experiences = () => {

  return (
    <section className="sm:px-0 pt-5 text-white">
      <h1 className="text-3xl font-bold after:block after:w-8 after:h-1 after:bg-white after:mt-1 mx-5">
        EXPERIÊNCIAS
      </h1>

      <div className="flex items-center justify-center px-6 md:px-15 mt-5">
        <div className="space-y-6 border-l-2 border-dashed">
          <div className="w-full">
            <div className="flex">
              <div className="-ml-2.5 h-5 w-5 rounded-full bg-white" />
              <div className="ml-4 w-1/3">
                <h4 className="font-bold text-white">DEZ - 2021 - ATUALMENTE</h4>
                <h4 className="text-[12px] text-white">{experienceTime("2021-12-21")}</h4>
                <h4 className="font-bold text-white">Desenvolvedor Frontend Júnior</h4>
                <span className="mt-1 block text-sm font-semibold text-white">Ouro Preto - MG</span>
                <span className="mt-1 block text-sm text-white">
                  <a href="https://www.cachacha.com.br"
                    target="_blank"
                    rel="noreferrer">Cachaça Gestor</a>
                </span>
              </div>
              <div className="ml-3 w-2/3">
                <p className="text-sm text-gray-500">
                  Responsável pelo desenvolvimento e manutenção do FrontEnd em AngularJS com as tecnologias
                  HTML5, CSS e JavaScript, manutenções simples  no Banco de Dados em MongoDB nas linguagens de programação TypeScript
                  e desenvolvedor Mobile em React-Native em JavaScript com testes de automação e2e utilizando o AWS Device Farm.
                  Para o planejamento é utilizado a Metodologia Ágil com o método Scrum. Responsável também pela supervisão de
                  estagiários.
                  <br></br>
                  <br></br>
                  Responsável pela refatoração do sistema para as tecnologias ReactJS com typescript, utilizando o NextJs e Tailwind.
                  Atuando na criação de tarefas para a equipe e a atuação no desenvolvimento do novo sistema.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="w-full">
            <div className="flex">
              <div className="-ml-2.5 h-5 w-5 rounded-full bg-white" />
              <div className="ml-4 w-1/3">
                <h4 className="font-bold text-white">MARÇO - 2020 - NOVEMBRO 2021</h4>
                <h4 className="text-[12px] text-white">1 ano e 8 meses</h4>
                <h4 className="font-bold text-white">Estagiário como desenvolvedor frontend</h4>
                <span className="mt-1 block text-sm font-semibold text-white">Ouro Preto - MG</span>
                <span className="mt-1 block text-sm text-white">
                  <a href="https://www.cachacha.com.br"
                    target="_blank"
                    rel="noreferrer">Cachaça Gestor</a>
                </span>
              </div>
              <div className="ml-3 w-2/3">
                <p className="text-sm text-gray-500">
                  Atuando sob a supervisão de <a className="font-[700]"
                    href="https://www.linkedin.com/in/joaovqm/"
                    target="_blank"
                    rel="noreferrer">João Vitor Mattos</a>,
                  fui instruído a fazer os testes unitários do backend em Jest. Realizei criei novas funcionalidades
                  e fiz pequenas manutenções no Banco de Dados em MongoDB com TypeScript.
                  Também participei ativamente do desenvolvimento mobile utilizando React-Native com JavaScript
                  e na execução de testes automatizados de ponta a ponta (e2e) com o AWS Device Farm.
                  <br></br>
                  <br></br>
                  Trabalhei em conjunto com o <a className="font-[700]"
                    href="https://www.linkedin.com/in/italo-milagres/"
                    target="_blank"
                    rel="noreferrer">Italo Milagres</a> na criação e manutenção
                  de novas funcionalidades e otimização do sistema frontend, seguindo a metodologia Ágil com o método Scrum.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className=" w-full">
            <div className="flex">
              <div className="absolute z-10 -ml-2.5 h-5 w-5 rounded-full bg-white" />
              <div className="ml-4 w-1/3">
                <h4 className="font-bold text-white">ABRIL 2019 - OUTUBRO 2021 </h4>
                <h4 className="text-[12px] text-white">2 anos e 6 meses</h4>
                <h4 className="font-bold text-white">Projeto LOCOBOTS - UFOP</h4>
                <span className="mt-1 block text-sm font-semibold text-white">João Monlevade - MG</span>
                <span className="mt-1 block text-sm text-white">Voluntário</span>
              </div>
              <div className="ml-3 w-2/3">
                <p className="text-sm text-gray-500">
                  Projeto sobre Robótica que acontece dentro da Universidade Federal de Ouro Preto no Campus de
                  Ciências Exatas e Aplicadas. Neste projeto atuei como voluntário no subprojeto de construção e manutenção
                  de um robô conhecido como Segue linha. Nesta construção atuei na área de programação em Arduinos na linguagem C,
                  e construção do sistema eletrônico para o robô utilizando componentes eletrônicos como sensores.
                </p>
                <br></br>
                <p className="text-sm text-gray-500">
                  Participar do Locobots foi uma das melhores experiências que tive na Universidade. No Locobots, somos treinados a
                  pensar fora da caixa, somos desafiados dia após dia nos relacionamentos interpessoais,
                  nas atividades, nas pesquisas e estruturas robóticas.
                </p>
                <a className='className="text-sm text-gray-500 font-bold'
                  href="https://www.instagram.com/locobots.ufop/"
                  target="_blank"
                  rel="noreferrer">Clique aqui</a>
                <span className="text-sm text-gray-500"> para saber mais</span>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className=" w-full">
            <div className="flex">
              <div className="absolute z-10 -ml-2.5 h-5 w-5 rounded-full bg-white" />
              <div className="ml-4 w-1/3">
                <h4 className="font-bold text-white">JAN 2016 - DEZEMBRO 2022</h4>
                <h4 className="text-[12px] text-white">7 anos</h4>
                <h4 className="font-bold text-white">Técnico em Informática</h4>
                <span className="mt-1 block text-sm font-semibold text-white">Barão de Cocais - MG</span>
                <span className="mt-1 block text-sm text-white">Autônomo</span>
              </div>
              <div className="ml-3 w-2/3">
                <p className="text-sm text-gray-500">
                  Instalação de sistemas operacionais, instalação de softwares, montagem de computadores, reparo de hardware,
                  manutenção em impressoras, dimensionamento rede e cabeamento e configuração
                  de rede de internet</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className=" w-full">
            <div className="flex">
              <div className="absolute z-10 -ml-2.5 h-5 w-5 rounded-full bg-white" />
              <div className="ml-4 w-1/3">
                <h4 className="font-bold text-white">FEVEREIRO 2018 - JULHO 2018</h4>
                <h4 className="font-bold text-white">Estagiário</h4>
                <h4 className="text-[12px] text-white">6 meses</h4>
                <span className="mt-1 block text-sm font-semibold text-white">Barão de Cocais - MG</span>
                <span className="mt-1 block text-sm text-white">CREA - MG</span>
              </div>
              <div className="ml-3 w-2/3">
                <p className="text-sm text-gray-500">
                  Atuei como estagiário no Escritório do Crea na cidade de Barão de Cocais - MG.
                  Facilitando a conexão entre Técnicos e Engenheiros da região para realizar seus procedimentos.
                  No estágio aprimorei meus conhecimentos em relações entre o CREA e os profissionais,
                  lidando com o público, sendo responsável por auxiliar ao máximo em suas necessidades.</p>
              </div>
            </div>
          
          </div>
          <hr></hr>
          <div className=" w-full">
            <div className="flex">
              <div className="absolute z-10 -ml-2.5 h-5 w-5 rounded-full bg-white" />
              <div className="ml-4 w-1/3">
                <h4 className="font-bold text-white">JAN 2016 - AGOSTO 2016</h4>
                <h4 className="text-[12px] text-white">7 anos</h4>
                <h4 className="font-bold text-white">Auxiliar administrativo</h4>
                <span className="mt-1 block text-sm font-semibold text-white">Barão de Cocais - MG</span>
                <span className="mt-1 block text-sm text-white">PMBC - UFV - CBCN</span>
              </div>
              <div className="ml-3 w-2/3">
                <p className="text-sm text-gray-500">
                  Este trabalho foi um conjunto entre a Prefeitura Municipal de Barão de Cocais, a Universidade Federal de Viçosa e a empresa
                  Centro Brasileiro para Conservação da Natureza e Desenvolvimento Sustentável (CBCN)
                  onde atuei na leitura dos dados de um Sistema de Informação Geográfica (SIG) e
                  gerando informações do Cadastro Territorial Multifinalitário Urbado, capaz de ter informações sobre a área urbana do município. 
                </p>
                <br></br>
                <p className="text-sm text-gray-500">
                  Neste projeto trabalhei na inserção dos dados de campos no SIG, garantindo sua consistência para posteriormente 
                  serem inseridos dentro da base de dados da prefeitura 

                </p>
                <br></br>
                <a className='className="text-sm text-gray-500 font-bold'
                  href="https://geoportal.ufv.br/equipe/"
                  target="_blank"
                  rel="noreferrer">Clique aqui</a>
                <span className="text-sm text-gray-500"> para saber mais</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Experiences
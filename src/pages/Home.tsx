import React from "react"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"


const Home = () => {
  return (
    <section className="px-5 py-10 lg:py-20 lg:px-0 text-white items-center">
      <div className="mb-30">
        <h1 className="text-3xl">Olá, eu sou&nbsp;</h1>
        <span className="text-3xl font-bold text-gray-300"> EDMO DE OLIVEIRA</span>
        <h1 className="text-xl">Full Stack Developer </h1>

      </div>
      <i>
        Desenvolvedor Web front end, mobile, experiência em gerenciamento de equipe,
        utilizando da Metodologia Ágil com o método Scrum.&nbsp;
      </i>
      <br></br>
      <br></br>

      <div className="pb-10">
        Formado em Engenharia de Computação pela Universidade Federal de Ouro Preto
        e pós graduação em Desenvolvimento Web Fullstack, no qual me instigou a aprender e
        utilizar os princípios da Arquitetura Limpa e Código Limpo.
        Nos últimos 3 períodos da universidade comecei a atuar como Estagiário na empresa
        Cachaça Gestor e em dezembro de 2021 foi contratado como
        Desenvolvedor FrontEnd Júnior no qual me encontro atualmente.
        <br></br>
        <br></br>
        Desde 2020 venho me capacitando na área de Desenvolvimento Web, somando cada dia mais 
        e mais para a atual empresa que trabalho e os freelancers
        que desenvolvo paralelamente.
        <br></br>
        <br></br>
        Meu interesse pela tecnologia e pelo desenvolvimento de sistemas é constante e tenho 
        buscado me qualificar cada vez mais na área.
        Acredito fortemente que a tecnologia tem um papel fundamental na transformação do 
        mundo em que vivemos e estou motivado a fazer parte dessa mudança através do meu 
        trabalho e aprendizado contínuo.
      </div>
      <div className="flex mt-5 lg:mb-10 justify-center ">
        <div className="hover:cursor-pointer hover:transform hover:scale-105 duration-500">
          <FaGithub className="text-[#4b5563] inline-block hover"
            size={25} /> <a href="https://github.com/edmooliveira29"
            target="_blank"
            className="text-sm ml-1"
            rel="noreferrer">Github</a>
          <span className="md:ml-10 ml-2"> | </span>
        </div>
        <div className="hover:cursor-pointer hover:transform hover:scale-105 duration-500">
          <FaLinkedin className="text-[#4b5563] inline-block ml-1 lg:ml-10"
            size={25} /> <a href="https://www.linkedin.com/in/edmo-oliveira-developer/"
            target="_blank"
            className="text-sm ml-1"
            rel="noreferrer">Linkedin</a>
          <span className="md:ml-10 ml-2"> | </span>
        </div>
        <div className="hover:cursor-pointer hover:transform hover:scale-105 duration-500">
          <FaWhatsapp className="text-[#4b5563] inline-block ml-2 lg:ml-10"
            size={25} /> <a href="https://wa.me/5531996339531"
            target="_blank"
            className="text-sm ml-1"
            rel="noreferrer">Whatsapp</a>
        </div>
      </div>
    </section>
  )
}

export default Home
import React from "react"
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"


const Contact = () => {
  return (
    <section className="sm:px-0 pt-5 text-white">
      <h1 className="mx-5 text-3xl font-bold after:block after:w-8 after:h-1 after:bg-white after:mt-1 sm:grid">
        CONTATO
      </h1>
      <div className="lg:flex lg:justify-center items-center">
        <a href="https://www.google.com/maps/@-19.8776732,-43.9735135,13.39z?entry=ttu"
          target="_blank"
          className="flex justify-center"
          rel="noreferrer">
          <div className="w-[250px] 
            rounded 
            overflow-hidden 
            shadow-lg 
            bg-white 
            text-black 
            m-3 
            py-8 
            transition-transform 
            hover:scale-105 duration-500" >
            <div className="px-6 lg:py-4 text-center">
              <FaMapMarkerAlt className="inline-block"
                size={50} />
              <div className="font-bold text-xl mb-2">Localização</div>
              <p className="text-gray-700 text-base">
                Contagem, MG - Brasil
              </p>
            </div>
          </div>
        </a>
        <a href="https://wa.me/5531996339531"
          target="_blank"
          className="flex justify-center"
          rel="noreferrer">
          <div className="w-[250px] 
            rounded 
            overflow-hidden 
            shadow-lg 
            bg-white 
            text-black 
            m-3 
            py-8 
            transition-transform 
            hover:scale-105 duration-500" >
            <div className="px-6 lg:py-4 text-center">
              <FaWhatsapp className="inline-block"
                size={50} />
              <div className="font-bold text-xl mb-2">Whatsapp</div>
              <p className="text-gray-700 text-base">
                (31) 9 9633-9531
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/edmooliveira29"
          target="_blank"
          className="flex justify-center"
          rel="noreferrer">
          <div className="w-[250px] 
            rounded 
            overflow-hidden 
            shadow-lg 
            bg-white 
            text-black 
            m-3 
            py-8 
            transition-transform 
            hover:scale-105 duration-500" >
            <div className="px-6 lg:py-4 text-center">
              <FaGithub className="inline-block"
                size={50} />
              <div className="font-bold text-xl mb-2">Github</div>
              <p className="text-gray-700 text-base">
                edmooliveira29
              </p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/edmo-oliveira-developer/"
          target="_blank"
          className="flex justify-center"
          rel="noreferrer">
          <div className="
            w-[250px] 
            rounded 
            overflow-hidden 
            shadow-lg 
            bg-white 
            text-black 
            m-3 
            py-8 
            transition-transform 
            hover:scale-105 duration-500
          " >
            <div className="px-6 lg:py-4 text-center">
              <FaLinkedin className="inline-block"
                size={50} />
              <div className="font-bold text-xl mb-2">Linkedin</div>
              <p className="text-gray-700 text-base">
                Edmo de Oliveira
              </p>
            </div>
          </div>
        </a>
        <a href="mailto:edmooliveira29@gmail.com"
          target="_blank"
          className="flex justify-center"
          rel="noreferrer">
          <div className="w-[250px] 
            rounded 
            overflow-hidden 
            shadow-lg 
            bg-white 
            text-black 
            m-3 
            py-8 
            transition-transform 
            hover:scale-105 duration-500" >
            <div className="px-6 lg:py-4 text-center">
              <MdEmail className="inline-block"
                size={50} />
              <div className="font-bold text-xl mb-2">Email</div>
              <p className="text-gray-700 text-base">
                edmooliveira29@gmail.com
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact
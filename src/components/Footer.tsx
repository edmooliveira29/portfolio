import React from "react"
import Link from "next/link"
import Logo from "@/assets/logo.png"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = ({ border = false }: { border?: boolean }) => {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12
           ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Image src={Logo}
                alt="Logo"
                className="h-5 w-auto" />
            </div>
            <div className="text-sm text-gray-600">
              &copy; edmooliveira.com.br - {new Date().getFullYear()}
            </div>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-400">Formação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition-duration-150 hover:text-gray-900"
                  href="#academic-formation"
                >
                  Pós Graduação
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Graduação
                </Link>
              </li>

            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-400">Experiências</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#experiencias"
                >
                  Cachaça Gestor
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#experiencias"
                >
                  Técnico de Informatica
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#experiencias"
                >
                  Voluntário no Locobots
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-400">Projetos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#projetos"
                >
                  Uaimobi
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#projetos"
                >
                  Cachaça Gestor
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#projetos"
                >
                  Sistema Gerenciador
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#projetos"
                >
                  Nolasco Moddas
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#projetos"
                >
                  Farol
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#projetos"
                >
                  Yatto
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#projetos"
                >
                  Portfólio
                </Link>
              </li>
            </ul>
          </div>


          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-400">Redes Sociais</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-white transition transition transition-opacity duration-300 hover:opacity-50"
                  href="https://www.linkedin.com/in/edmo-de-oliveira-349194164/"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <FaLinkedin className="h-8 w-8 fill-current" />
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-white transition transition transition-opacity duration-300 hover:opacity-50"
                  href="https://wa.me/5531996339531"
                  aria-label="Medium"
                  target="_blank"

                >
                  <FaWhatsapp className="h-8 w-8 fill-current" />
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-white transition transition-opacity duration-300 hover:opacity-50"
                  href="https://github.com/edmooliveira29"
                  aria-label="Github"
                  target="_blank"
                >
                  <FaGithub className="h-8 w-8 fill-current" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
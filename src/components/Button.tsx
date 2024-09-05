import React from "react"
import { BiLogoPlayStore } from "react-icons/bi"
import { BsInstagram } from "react-icons/bs"
import { DiGoogleDrive } from "react-icons/di"
import { FaGithub, FaLink } from "react-icons/fa"

type ButtonProps = {
  onClick?: () => void
  title: string
  icon: "website" | "github" | "drive" | "instagram" | "playstore"
}

const selectIcon = (icon: "website" | "github" | "drive" | "instagram" | "playstore") => {
  switch (icon) {
    case "website":
      return <FaLink className="ml-2"
        size={20} />
    case "github":
      return <FaGithub className="ml-2"
        size={20} />
    case "drive":
      return <DiGoogleDrive className="ml-2"
        size={23} />
    case "instagram":
      return <BsInstagram className="ml-2"
        size={20} />
    case "playstore":
      return <BiLogoPlayStore className="ml-2"
        size={23} />
    default:
      return <FaLink className="ml-2"
        size={20} />
  }
}

export const Button = ({ onClick, title, icon }: ButtonProps) => {
  return (
    <button type="button"
      className={`
      m-2
      w-${title.includes("Certificado")? "[300px]" : "[250px]"}
      flex
      items-center
      rounded 
      border-2
      border-neutral-50 
      px-7 pb-[5px] pt-[5px] 
      text-sm font-medium
      uppercase
      bg-neutral-700
      leading-normal 
      text-gray-50 
      transition duration-150
      ease-in-out 
      border-gray-700 
      hover:bg-neutral-500
      hover:text-neutral-100 
      focus:border-neutral-100 
      active:border-neutral-200
      active:text-neutral-200
      justify-center`}
      onClick={onClick}>
      {title}
      {selectIcon(icon)}
    </button>
  )
}

import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { DiGithub } from 'react-icons/di';
import { FaGithub, FaLink } from 'react-icons/fa';

type ButtonProps = {
  onClick?: () => void
  title: string
  icon?: 'website' | 'github'
}
export const Button = ({ onClick, title, icon }: ButtonProps) => {
  return (
    <button type="button"
      className="
      m-2
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
      justify-center"
      onClick={onClick}>
      {title}
      {icon && (icon === 'website' ? (
        <FaLink className="ml-2" size={20} />
      ) :
        < FaGithub className="ml-2" size={20} />
      )}
    </button>
  );
};

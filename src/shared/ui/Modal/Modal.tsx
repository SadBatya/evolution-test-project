'use client';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import closeIcon from './assets/close.svg';
import Image from 'next/image';

interface Props {
  isOpen: boolean;
  children: string | ReactNode;
  onClick: () => void;
}

export const Modal = ({ children, isOpen, onClick }: Props) => (
  <nav
    className={twMerge(
      'max-w-[600px] w-full h-screen bg-white absolute right-0 z-60 transition-all top-0 translate-x-full',
      isOpen && 'translate-x-0'
    )}
  >
    <div className="relative text-black h-full flex flex-col">
      <button
        onClick={onClick}
        className="absolute top-6 right-6 cursor-pointer"
      >
        <Image src={closeIcon} alt="close button" />
      </button>
      {children}
    </div>
  </nav>
);

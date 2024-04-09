"use client"

import { inter } from "./fonts"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return <button {...rest} className={`${className} ${inter.className} bg-blue-500 rounded-full hover:bg-blue-300 text-white transition-all`}>
    {children}
  </button>
}
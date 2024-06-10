"use client";

import Image from "next/image";
import { useState } from "react";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = (e: any) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const exit = () => {
    window.location.href = "/login";
  };

  return (
    <header className="fixed w-screen flex flex-row items-center justify-between px-20 py-5 bg-white drop-shadow-md z-10">
      <div className="hidden md:flex items-center gap-5">
        <a href="/">
          <Image src="/assets/logo.png" width={100} height={100} alt="Logo" />
        </a>
        <a className="font-semibold pl-10 transition-all hover:text-primary-100 cursor-pointer" href="/lancar-notas">
          Lançar notas
        </a>
        <div className="w-[1px] bg-gray-300 h-7 "></div>
        <a className="font-semibold transition-all hover:text-primary-100 cursor-pointer" href="/cadastros">
          Cadastros
        </a>
        <div className="w-[1px] bg-gray-300 h-7"></div>
        <a className="font-semibold transition-all hover:text-primary-100 cursor-pointer" href="/analises">
          Análises
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-5">
        <button className="font-semibold text-white bg-red-500 rounded-md px-8 py-1 transition-all hover:bg-red-700" onClick={exit}>
          Sair
        </button>
      </nav>

      <div className="flex md:hidden w-screen items-center justify-between">
        <div className="">
          <a href="/">
            <Image src="/assets/logo.png" width={100} height={100} alt="Logo" />
          </a>
        </div>

        <button className={`flex-col items-center gap-1 ${menuOpen ? "hidden" : "flex md:hidden"}`} onClick={(e) => handleMenu(e)}>
          <div className="bg-gray-800 w-6 h-[2px]"></div>
          <div className="bg-gray-800 w-6 h-[2px]"></div>
          <div className="bg-gray-800 w-6 h-[2px]"></div>
        </button>

        <div className={`flex-col items-center gap-5 ${menuOpen ? "flex md:hidden" : "hidden"}`}>
          <a className="font-semibold transition-all hover:text-primary-100 cursor-pointer" href="/lancar-notas">
            Lançar notas
          </a>
          <a className="font-semibold transition-all hover:text-primary-100 cursor-pointer" href="/cadastros">
            Cadastros
          </a>
          <a className="font-semibold transition-all hover:text-primary-100 cursor-pointer" href="/analises">
            Análises
          </a>
          <a className="font-semibold text-white bg-red-500 rounded-md px-8 py-1 transition-all hover:bg-red-700" href="/login">
            Sair
          </a>
        </div>

        <button className={`${menuOpen ? "flex md:hidden" : "hidden"} flex-col items-center gap-1`} onClick={(e) => handleMenu(e)}>
          <div className="bg-gray-800 w-6 h-[2px] rotate-45"></div>
          <div className="bg-gray-800 w-6 h-[2px] -rotate-45 -m-[6px]"></div>
        </button>
      </div>
    </header>
  );
}

"use client";

import AppBar from "../../../components/app-bar";
import Footer from "../../../components/footer";
import React from "react";
import { message } from "antd";

export default function NovoAluno() {
  const [loading, setLoading] = React.useState(false);

  const success = (e: any) => {
    e.preventDefault();
    setLoading(true);
    message.loading(" Cadastrando aluno...");

    setTimeout(() => {
      message.destroy();
      message.success("Aluno cadastrado com sucesso!");
      setTimeout(() => {
        window.location.href = "/cadastros/alunos";
      }, 500);
    }, 1000);
  };

  const cancel = (e: any) => {
    e.preventDefault();
    window.location.href = "/cadastros/alunos";
  };

  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-md flex-1 flex flex-col items-start justify-start ">
        <div className="mt-32 mb-7 rounded-xl  w-full bg-white">
          <div className="flex flex-row items-center justify-center w-full mb-7 rounded-t-xl text-white bg-primary-100 px-4 py-7">
            <h1 className="font-semibold text-2xl">Novo Aluno</h1>
          </div>
          <form className="flex flex-col w-full gap-5 px-20 py-3 pb-10">
            <label className="flex flex-col font-semibold gap-1">
              Nome
              <input
                className="border-gray-200 border rounded-md font-normal py-1 px-2 w-full placeholder:text-placeholder"
                placeholder="Digite o nome do aluno..."
                type="email"
              />
            </label>
            <label className="flex flex-col font-semibold gap-1">
              Turma
              <select className="border border-gray-200 font-normal rounded-md py-1 px-2 w-full placeholder:text-placeholder ">
                <option value="1a">1 A</option>
                <option value="1b">1 B</option>
                <option value="1c">1 C</option>
                <option value="1d">1 D</option>
                <option value="2a">2 A</option>
                <option value="2b">2 B</option>
                <option value="2c">2 C</option>
                <option value="2d">2 D</option>
                <option value="3a">3 A</option>
                <option value="3b">3 B</option>
                <option value="3c">3 C</option>
                <option value="3d">3 D</option>
              </select>
            </label>
            <div className="flex flex-row justify-between gap-5">
              <button
                className="bg-primary-100 rounded-md text-white py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-primary-200 px-7 cursor-pointer"
                onClick={(e) => success(e)}
                disabled={loading}
              >
                Salvar
              </button>
              <button
                className="bg-white rounded-md text-primary-100 py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-gray-100 px-7 mr-32 cursor-pointer"
                onClick={(e) => cancel(e)}
                disabled={loading}
              >
                Cancelar
              </button>
              <div></div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

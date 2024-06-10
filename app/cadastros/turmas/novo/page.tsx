"use client";

import AppBar from "../../../components/app-bar";
import Footer from "../../../components/footer";

export default function NovoTurma() {
  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-md flex-1 flex flex-col items-start justify-start ">
        <div className="mt-32 mb-7 rounded-xl  w-full bg-white">
          <div className="flex flex-row items-center justify-center w-full mb-7 rounded-t-xl text-white bg-primary-100 px-4 py-7">
            <h1 className="font-semibold text-2xl">Nova Turma</h1>
          </div>
          <form className="flex flex-col w-full gap-5 px-20 py-3 pb-10">
            <label className="flex flex-col font-semibold gap-1">
              Turma
              <input
                className="border-gray-200 border rounded-md font-normal py-1 px-2 w-full placeholder:text-placeholder"
                placeholder="Digite o nome da turma..."
                type="email"
              />
            </label>
            <label className="flex flex-col font-semibold gap-1">
              Prof. Português
              <select className="border border-gray-200 font-normal rounded-md py-1 px-2 w-full placeholder:text-placeholder ">
                <option value="portugues1">Victor Costa</option>
                <option value="portugues2">Gabriela Ferreira</option>
              </select>
            </label>
            <label className="flex flex-col font-semibold gap-1">
              Prof. Matemática
              <select className="border border-gray-200 font-normal rounded-md py-1 px-2 w-full placeholder:text-placeholder ">
                <option value="matematica">Melissa Santos</option>
              </select>
            </label>
            <div className="flex flex-row justify-start gap-5">
              <a
                className="bg-primary-100 rounded-md text-white py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-primary-200 px-7 cursor-pointer"
                type="submit"
              >
                Salvar
              </a>
              <a
                className="bg-white rounded-md text-primary-100 py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-gray-100 px-7 mr-32 cursor-pointer"
                href="/cadastros/turmas"
              >
                Cancelar
              </a>
              <div></div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

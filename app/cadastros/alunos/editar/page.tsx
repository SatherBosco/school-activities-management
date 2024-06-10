import AppBar from "../../../components/app-bar";
import Footer from "../../../components/footer";

export default function EditarAluno() {
  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-md flex-1 flex flex-col items-start justify-start ">
        <div className="mt-32 mb-7 rounded-xl  w-full bg-white">
          <div className="flex flex-row items-center justify-center w-full mb-7 rounded-t-xl text-white bg-primary-100 px-4 py-7">
            <h1 className="font-semibold text-2xl">Editar Aluno</h1>
          </div>
          <form className="flex flex-col w-full gap-5 px-20 py-3 pb-10">
            <label className="flex flex-col font-semibold gap-1">
              Nome
              <input
                className="border-gray-200 border rounded-md font-normal py-1 px-2 w-full placeholder:text-placeholder"
                placeholder="Digite o nome do al..."
                type="text"
                value={"Alice Martins"}
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
              <a
                className="bg-primary-100 rounded-md text-white py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-primary-200 px-7 cursor-pointer"
                type="submit"
              >
                Salvar
              </a>
              <a
                className="bg-white rounded-md text-primary-100 py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-gray-100 px-7 mr-32 cursor-pointer"
                href="/cadastros/alunos"
              >
                Cancelar
              </a>
              <a
                className="bg-red-500 rounded-md text-white py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-red-800 px-7 cursor-pointer"
                type="submit"
              >
                Excluir
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

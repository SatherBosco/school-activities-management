import AppBar from "../components/app-bar";
import Image from "next/image";
import Footer from "../components/footer";

export default function Cadastros() {
  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-lg flex-1 flex flex-col items-start justify-start pt-32 pb-7">
        <h1 className="font-semibold text-2xl mb-5">Cadastros:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-10">
          <a
            className="bg-primary-100 text-white font-semibold rounded-xl h-40 px-14 py-10 flex flex-col justify-center items-center gap-2 drop-shadow-md transition-all hover:bg-primary-200"
            href="/cadastros/alunos"
          >
            <Image className="ml-3" src="/assets/person-icon.png" width={70} height={70} alt="Cadastros" />
            Alunos
          </a>
          <a
            className="bg-primary-100 text-white font-semibold rounded-xl h-40 px-14 py-10 flex flex-col justify-center items-center gap-2 drop-shadow-md transition-all hover:bg-primary-200"
            href="/cadastros/professores"
          >
            <Image className="mx-[6px]" src="/assets/teacher-icon.png" width={70} height={70} alt="Cadastros" />
            Professores
          </a>
          <a
            className="bg-primary-100 text-white font-semibold rounded-xl h-40 px-14 py-10 flex flex-col justify-center items-center gap-2 drop-shadow-md transition-all hover:bg-primary-200"
            href="/cadastros/turmas"
          >
            <Image className="mx-[6px]" src="/assets/class-icon.png" width={70} height={70} alt="Cadastros" />
            Turmas
          </a>
          <a
            className="bg-primary-100 text-white font-semibold rounded-xl h-40 px-14 py-10 flex flex-col justify-center items-center gap-2 drop-shadow-md transition-all hover:bg-primary-200"
            href="/cadastros/provas"
          >
            <Image className="mx-[6px]" src="/assets/book-icon.png" width={70} height={70} alt="Cadastros" />
            Provas
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import Image from "next/image";
import AppBar from "./components/app-bar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-secondary min-h-screen flex flex-col items-center">
      <AppBar />
      <div className="max-w-screen-lg flex-1 flex flex-col items-center md:items-start justify-start pt-32 pb-7 px-7">
        <Image className="self-center" src="/assets/banner.png" width={1000} height={1000} alt="Logo" />
        <h1 className="font-semibold text-2xl mt-16 mb-5">Nossos Serviços:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-10">
          <a
            className="bg-primary-100 text-white font-semibold rounded-xl h-40 px-14 py-10 flex flex-col justify-center items-center gap-2 drop-shadow-md transition-all hover:bg-primary-200"
            href="/lancar-notas"
          >
            <Image className="mx-[6px]" src="/assets/school-icon.png" width={70} height={70} alt="Cadastros" />
            Lançar Nota
          </a>
          <a
            className="bg-primary-100 text-white font-semibold rounded-xl h-40 px-14 py-10 flex flex-col justify-center items-center gap-2 drop-shadow-md transition-all hover:bg-primary-200"
            href="/cadastros"
          >
            <Image className="ml-3" src="/assets/person-icon.png" width={70} height={70} alt="Cadastros" />
            Cadastros
          </a>
          <a
            className="bg-primary-100 text-white font-semibold rounded-xl h-40 px-14 py-10 flex flex-col justify-center items-center gap-2 drop-shadow-md transition-all hover:bg-primary-200"
            href="/analises"
          >
            <Image className="mx-[6px]" src="/assets/chart-icon.png" width={70} height={70} alt="Cadastros" />
            Análise
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}

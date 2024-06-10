"use client";

import Image from "next/image";

export default function SignIn() {
  const signIn = () => {
    window.location.href = "/";
  };

  return (
    <main className="flex flex-row h-screen bg-secondary">
      <div className="flex-1 bg-white shadow-2xl flex items-center justify-center">
        <div className="flex flex-col items-start justify-center">
          <Image src="/assets/logo.png" width={300} height={500} alt="Logo" />
          <p className="font-light text-sm mb-8">Bem-vindo(a) de volta! Por favor, insira suas credenciais.</p>
          <div className="flex flex-col w-full gap-5">
            <label className="flex flex-col font-semibold gap-1">
              Email
              <input
                className="border-gray-200 border rounded-md py-1 px-2 w-full placeholder:text-placeholder"
                placeholder="Digite o seu email..."
                type="email"
              />
            </label>
            <label className="flex flex-col font-semibold gap-1">
              Password
              <input
                className="border border-gray-200 rounded-md py-1 px-2 w-full placeholder:text-placeholder "
                placeholder="Digite a sua senha..."
                type="password"
              />
            </label>
            <button
              className="bg-primary-100 rounded-md text-white py-1 drop-shadow-md mt-3 font-semibold transition-all hover:bg-primary-200 text-center"
              onClick={signIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <Image src="/assets/sign-up.png" width={500} height={1000} alt="Sign In" />
      </div>
    </main>
  );
}

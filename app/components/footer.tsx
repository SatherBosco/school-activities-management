import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col w-screen items-center justify-between px-20 py-5 bg-white">
      <Image src="/assets/logo.png" width={150} height={150} alt="Logo" />
      <p className="font-extralight text-[10px] text-black">© 2024 Cyber Academy</p>
    </footer>
  );
}

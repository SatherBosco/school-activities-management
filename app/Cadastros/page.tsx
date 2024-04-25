import styles from "./page.module.css";
import graphics from "../../assets/img/graphics.png";
import Group2 from "../../assets/img/Group 2.png";
import Rectangle4 from "../../assets/img/Rectangle 4.png";
import Rectangle5 from "../../assets/img/Rectangle 5.png";
import flatlay from "../../assets/img/flat-lay-laptop-blue-background 1.png";
import Logo2 from "../../assets/img/Logo2.png";
import Group4 from "../../assets/img/Group 4.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <header className={styles.cabecalho}>
        <nav className={styles.cabecalhoMenu}>
            <div className={styles.cabecalhoMenuImagem}>
                <Image className={styles.cabecalhoMenuImagem1} src={graphics} alt="Logo 1"/>
                <Image className={styles.cabecalhoMenuImagem2} src={Group2} alt="Logo 2"/>
            </div>
            <div className={styles.cabecalhoMenuLinks}>
                <a className={styles.cabecalhoMenuLinks1} href="../app/Cadastro_Professores/page.tsx">Professores</a>
                <Image className={styles.cabecalhoMenuLinksBarra1} src={Rectangle4} alt="Barra de separação"/>
                <a className={styles.cabecalhoMenuLinks2} href="../app/Cadastro_Alunos/page.tsx">Alunos</a>
                <Image className={styles.cabecalhoMenuLinksBarra2} src={Rectangle5} alt="Barra de separação"/>
                <a className={styles.cabecalhoMenuLinks3} href="../app/Cadastro_Turmas/page.tsx">Turmas</a>
                <Image className={styles.cabecalhoMenuLinksBarra1} src={Rectangle4} alt="Barra de separação"/>
                <a className={styles.cabecalhoMenuLinks2} href="../app/Cadastro_Provas/page.tsx">Provas</a>
            </div>
            <div>
                <a href="./"><button className={styles.cabecalhoMenuBotao}>Home</button></a>
            </div>    
        </nav>
    </header>

    <main className={styles.conteudo}>
        <Image className={styles.conteudoBanner} src={flatlay} alt="Banner Bem-vindo"/>
        <Image className={styles.conteudoLogo} src={Logo2} alt="Banner Bem-vindo"/>
        <p className={styles.conteudoTexto}>Conectando o presente à excelência do futuro educacional.</p>
    </main>

    <footer className={styles.rodape}>
        <Image className={styles.rodapeImagem} src={Group4} alt="Logo 3"/>
    </footer>
  </>  
  );
}
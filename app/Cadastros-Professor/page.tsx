import styles from "./page.module.css";
import graphics from "../../assets/img/graphics.png";
import Group2 from "../../assets/img/Group 2.png";
import Rectangle4 from "../../assets/img/Rectangle 4.png";
import Rectangle5 from "../../assets/img/Rectangle 5.png";
import flatlay from "../../assets/img/flat-lay-laptop-blue-background 1.png";
import Logo2 from "../../assets/img/Logo2.png";
import Group4 from "../../assets/img/Group 4.png";
import AlunoIcon from "../../assets/img/icon-aluno.png";
import aluno from "../../assets/img/aluno.png"
import ProfessorIcon from "../../assets/img/icon-professor.png";
import Professor from "../../assets/img/professor.png"
import TurmaIcon from "../../assets/img/icon-turma.png";
import Turma from "../../assets/img/turma.png";
import ProvaIcon from "../../assets/img/icon-prova.png";
import Prova from "../../assets/img/prova.png"
import Image from "next/image";

export default function Cadastro_Professores() {
  return (
    <>
    <header className={styles.cabecalho}>
        <nav className={styles.cabecalhoMenu}>
            <div className={styles.cabecalhoMenuImagem}>
                <Image className={styles.cabecalhoMenuImagem1} src={graphics} alt="Logo 1"/>
                <Image className={styles.cabecalhoMenuImagem2} src={Group2} alt="Logo 2"/>
            </div>
            <div className={styles.cabecalhoMenuLinks}>
                <a className={styles.cabecalhoMenuLinks1} href="../app/Cadastro_Professores/page.tsx">Lançar notas</a>
                <Image className={styles.cabecalhoMenuLinksBarra1} src={Rectangle4} alt="Barra de separação"/>
                <a className={styles.cabecalhoMenuLinks2} href="../app/Cadastro_Alunos/page.tsx">Cadastro</a>
                <Image className={styles.cabecalhoMenuLinksBarra2} src={Rectangle5} alt="Barra de separação"/>
                <a className={styles.cabecalhoMenuLinks3} href="../app/Cadastro_Turmas/page.tsx">Análise</a>
            </div>
            <div>
                <a href="./"><button className={styles.cabecalhoMenuBotao}>Trocar Usuário</button></a>
            </div>    
        </nav>
    </header>

    <main className={styles.main}>
    <div className={styles.container}>
        <div className={styles.form}>
            <form>
                <div className={styles.formHeader}>
                    <div className={styles.title}>
                        <h1>Professor(a)</h1>
                    </div>
                    <div className={styles.voltarButton}>
                        <button><a href="#">Voltar</a></button>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <div className={styles.inputBox}>
                        <label>Nome</label>
                        <input id="nome" type="text" name="nome" placeholder="Digite o nome completo" required/>
                    </div>

                    <div className={styles.inputBox}>
                        <label>Matrícula</label>
                        <input id="matricula" type="text" name="matricula" placeholder="Digite a matrícula" required/>
                    </div>
                    <div className={styles.inputBox}>
                        <label>E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>

                    <div className={styles.inputBox}>
                        <label>Celular</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xxxxx-xxxx" required/>
                    </div>

                    <div className={styles.inputBox}>
                        <label>Usuário</label>
                        <input id="usuario" type="text" name="usuario" placeholder="Digite o Usuário" required/>
                    </div>

                    <div className={styles.inputBox}>
                        <label>Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite a senha" required/>
                    </div>

                    <div className={styles.inputBox}>
                        <label>Confirmar Senha</label>
                        <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Digite a senha novamente" required/>
                    </div>

                </div>

                <div className={styles.cadastrarButton}>
                    <button><a href="#">Cadastrar</a> </button>
                </div>
            </form>
        </div>
    </div>
    </main>

    <footer className={styles.rodape}>
        <Image className={styles.rodapeImagem} src={Group4} alt="Logo 3"/>
    </footer>
  </>  
  );
}
import styles from "./page.module.css";

export default function SignIn() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Login</h1>
        <input className={styles.input} type="text" placeholder="Usuário..." required/>
        <input className={styles.input} type="password" placeholder="Senha..." required/>
        <button className={styles.button}>Entrar</button>
        <h2 className={styles.h2}>Problemas com o login? Contate sua coordenação.</h2>
      </div>
    </main>
  );
}
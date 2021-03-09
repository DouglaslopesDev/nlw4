import styles from '../styles/pages/Login.module.css'


export default function Login() {
  return(
    <div className={styles.LoginContainer}>
      <div className={styles.logo}>
        <img src="icons/favicon.svg" alt="Favicon"/>
      </div>
      <section>
        <div className={styles.login}>
          <img src="icons/LogoLogin.svg" alt="Logo"/>
          <h1><strong>Bem Vindo</strong></h1>
          <p>
            <img src="icons/github.svg" alt="Github"/>
            Faça login com seu GitHub para começar
          </p>
          <p>
          <input type="text" placeholder="Digite seu username"/>
          <button type="submit">
            <img src="icons/play_arrow_login.svg" alt="play_arrow"/>
          </button>
          </p>
        </div>
      </section>
    </div>
  );
}
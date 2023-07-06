import Header from '../components/Header'
import styles from '../styles/pages/sobre.module.css'

import sobre from '../assets/sobre.7b03fc56.svg'
import euImg from '../assets/ledinemax.jpg'


const Sobre = () => {
  return (
    <>
      <Header
        title='Sobre Ledine'
        image={sobre}
      />
      <div className={styles.sobreContainer}>
        <img className={styles.sobreImg} src={euImg} />
        <div className={styles.sobreCard}>
          <h1 className={styles.sobreTitle}> Pode me chamar de Ledine</h1>
          <p className={styles.cardText}>
            Sou nascida e criada no estado de São Paulo, com um
            background em Marketing Comercial, mas que em 2020, na pré-pandemia
            já pensava em migrar para area de tecnlogia. Sonho em me tornar dev full stack,
            e quem sabe num futuro proximo, poder ajudar outras mulheres que assim como eu
            tenham esse sonho.
          </p>
          <div className={styles.cardCurisidades}>
            <h3 className={styles.curiosidadesTitle}>4 curiosidades sobre mim</h3>
            <li>Aprendi inglês sozinha</li>
            <li>Sou a quarta de cinco irmãos a se tornar desenvolvedora</li>
            <li>Redescobri minha paixão por livros durante a pandemia</li>
            <li>Adoro passar raiva em jogos online</li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobre
import Header from '../components/Header'
import home from '../assets/home.svg'

import styles from '../styles/pages/home.module.css'

import { Code, Butterfly, AddressBook } from 'phosphor-react'

const Home = () => {
  return (
    <>
      <Header
        title="Meu cantinho"
        image={home}
        text='Aqui vou falar um poquinho sobre quem sou, do que
        gosto, e como começou e está sendo minha trajetória com
        front-end e meu projetinhos.'
      />

      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>SOBRE MIM</h2>
          <Butterfly size={65} color="#fad499" weight="duotone" />
          <p className={styles.cardDescription}>Aqui conto um poquinho sobre quem sou, 
          minha formação, como vim parar na area da tecnologia, 
          e um pouco mais sobre meus sonhos,
          meus gostos e algumas curiosidades.</p>
        </div>

        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>CÓDIGOS</h2>
          <Code size={64} color="#fad499" weight="duotone" />
          <p className={styles.cardDescription}> Aqui mostro meus projetos do GitHub enquando
          estudo na Front-End Reprograma, dando destaque para alguns 
          dos meus projetos favoritos. 
          </p>
        </div>

        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>VEM HABLAR</h2>
          <AddressBook size={65} color="#fad499" weight="duotone" />
          <p className={styles.cardDescription}>Entre em contato comigo. 
          Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
        </div>
      </div>
    </>
  )
}

export default Home
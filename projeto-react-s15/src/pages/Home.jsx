import Header from '../components/Header'
import home from '../assets/home.svg'

import styles from '../styles/pages/home.module.css'

import { Code, Butterfly, AddressBook } from 'phosphor-react'

const Home = () => {
  return (
    <>
      <Header
        title="Site da Lê"
        image={home}
        text='Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Neque facilis qui dignissimos
        blanditiis vel eius nobis autem? Officiis optio,  sed dolore debitis enim
        perferendis aperiam nobis voluptate harum quae officia'
      />

      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Sobre</h2>
          <Butterfly size={65} color="#B2D6B5" weight="duotone" />
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Neque facilis qui dignissimos
            blanditiis vel eius nobis autem? Officiis optio,  sed dolore debitis enim
            perferendis aperiam nobis voluptate harum quae officia.</p>
        </div>

        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Códigos</h2>
          <Code size={64} color="#B2D6B5" weight="duotone" />
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Neque facilis qui dignissimos
            blanditiis vel eius nobis autem? Officiis optio,  sed dolore debitis enim
            perferendis aperiam nobis voluptate harum quae officia.</p>
        </div>

        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Vem Hablar</h2>
          <AddressBook size={65} color="#B2D6B5" weight="duotone" />
          <p className={styles.cardDescription}>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Neque facilis qui dignissimos
            blanditiis vel eius nobis autem? Officiis optio,  sed dolore debitis enim
            perferendis aperiam nobis voluptate harum quae officia.</p>
        </div>
      </div>
    </>
  )
}

export default Home
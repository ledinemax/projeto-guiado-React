import Header from '../components/Header'

import home from '../assets/home.svg'

const Home = () => {
  return (
    <>
      <Header title="Site da Lê" image={home} />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>Eu, eu e eu</h2>
          <p className={styles.cardDescription}>asd</p>
        </div>
      </div>
    </>
  )
}

export default Home
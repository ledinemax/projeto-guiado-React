import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { ArrowBendDownRight } from 'phosphor-react'
import porfolioIMG from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'


const favList = [
  {
    id: 1,
    name: 'GitHub Search',
    description: 'Site modelo em react para pesquisa de repositório no GitHub',
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3hod24zM25uMTIyeGprb2NyOTdlYjhjano1bjlvaHFsOHdjYWJyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wbPxvzmRJ2flvWrWLs/giphy.gif',
    link: 'https://reprograma-on23-santander-s14-react-2-o19s.vercel.app/'
  },
  {
    id: 2,
    name: 'TODO List',
    description: 'Site modelo em JavaScript de uma To Do List',
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHAxeWxqbWRpY21qYjM2OW9pN294MG10azEzN2Y1Ym91bGdwbWw2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eBUaElKRfOwfA7hGjE/giphy.gif',
    link: ''
  },
  {
    id: 3,
    name: 'GitHub Search',
    description: 'Site modelo em JavaScript para  ',
    image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHI1bTMzc21hNGVtbHIwc252OWtkdWx3bDd4Z2xpOG90c3B5bGV1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qYRWxlMCyzihfzVYkO/giphy.gif',
    link: ''
  }
]


const Portfolio = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const getRepositories = async () => {
      try {
        const response = await Axios.get('https://api.github.com/users/ledinemax/repos')
        setRepos(response.data)
      }
      catch (error) {
        console.error('Erro capturado: ' + error)
      }
    }
    getRepositories()
  }, [])


  return (
    <>
      <Header
        title="Meus projetos"
        image={porfolioIMG}
      />
      <div className={styles.repoContainer}>
        <h2 className={styles.cardRepoTitle}>Favoritos</h2>
        <div className={styles.cardFavContainer}>
          {favList.map(favoritos => {
            return (
              <div className={styles.card} key={favoritos.id}>
                  <h3>{favoritos.name}</h3>
                  <img src={favoritos.image} className={styles.cardImage}/>
                  <p className={styles.cardText}>{favoritos.description}</p>
                  <a href={favoritos.link} className={styles.cardLink}>
                    Bisbilhotar
                  </a>

              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.repoContainer}>
        <h2 className={styles.repoTitle}>Outros projetos no GitHub</h2>
        <div className={styles.cardContainer}>
          {repos.map((repo) => {
            return (
              <div key={repo.id} className={styles.cardRepo}>
                <h4 className={styles.cardRepoTitle}>{repo.name}</h4>
                <p className={styles.cardRepoText}>{repo.description}</p>
                <a className={styles.cardRepoLink}
                  href={repo.html_url} target="_blank"
                  rel="noreferrer">
                  <ArrowBendDownRight size={28} color="#131313" weight="duotone" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Portfolio
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Axios from 'axios'

import { ArrowBendDownRight } from 'phosphor-react'

import porfolioIMG from '../assets/portfolio.svg'

import styles from '../styles/pages/portfolio.module.css'

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
     <div className={styles.cardContainer}>
        {repos.map((repo) => {
          return (
            <div className={styles.cardRepo}>
              <h3 className={styles.cardRepoTitle} key={repo.id}>{repo.name}</h3>
              <p className={styles.cardRepoText}>{repo.description}</p>
              <a className={styles.cardRepoLink} 
              href={repo.html_url} target="_blank" 
              rel="noreferrer">
                <ArrowBendDownRight size={32} weight="thin" color="#fff"/>
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
import Header from '../components/Header'
import styles from '../styles/pages/contato.module.css'
import contato from '../assets/contato.svg'
import { useState } from 'react'

const Contato = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')


  function handleInputName(e) {
    setNome(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(nome, email, mensagem)
  }

  return (
    <>
      <Header className={styles.headerContato}
        title="Vamos hablar?"
        image={contato}
      />
      
      <main className={styles.formContainer}>

        <form className={styles.form} onSubmit={handleSubmit}>

          <input className={styles.formInput}
            type="text"
            placeholder='Digite seu nome'
            onChange={handleInputName}
            value={nome}
          />
          <input className={styles.formInput}
            type="email"
            placeholder='Digite seu email'
            onChange={handleInputEmail}
            value={email}
          />
          <textarea className={styles.formInput}
            placeholder='Digite sua mensagem'
            onChange={handleInputMensagem}
            value={mensagem}
          />
          <button className={styles.formButton}
            type='submit'>Enviar mensagem
          </button>
        </form>
      </main>

    </>
  )
}

export default Contato
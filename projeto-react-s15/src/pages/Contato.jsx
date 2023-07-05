import { useState } from 'react'

//FIREBASE
import database from '../services/firebase'
import { ref, push, set} from 'firebase/database'

import Header from '../components/Header'
import styles from '../styles/pages/contato.module.css'

import contato from '../assets/contato.svg'

const Contato = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  function handleInputName(e) {
    setName(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMessage(e) {
    setMessage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    const messageListRef = ref(database, 'messages') //cria coleção no DB do Firebase
    const newMessageRef = push(messageListRef) // cria e envia nova mensagem na coleção
    set(newMessageRef, {
      name: name,
      email: email,
      text: message
    }) 
    
    setName('')
    setEmail('')
    setMessage('')
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
            value={name}
          />
          <input className={styles.formInput}
            type="email"
            placeholder='Digite seu email'
            onChange={handleInputEmail}
            value={email}
          />
          <textarea className={styles.formInput}
            placeholder='Digite sua mensagem'
            onChange={handleInputMessage}
            value={message}
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
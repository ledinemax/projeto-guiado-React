import styles from '../styles/components/header.module.css'

const Header = ({ title, image, text }) => {
  return (
    <div className={styles.headerContainer}>
      <header>
        <h1 className={styles.headerTitle}>{title}</h1>
        <p className={styles.headerText}>{text}</p>
      </header>
      <img className={styles.headerImage} src={image} alt="" />
    </div>
  )
}

export default Header
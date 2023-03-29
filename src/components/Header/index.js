import logo from '../../assets/images/logo_SPLAT.svg'
import styles from './style.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <a href="/" className={styles.header__logo}>
          <img src={logo} alt="spalt" />
        </a>
      </div>
    </header>
  )
}

export default Header

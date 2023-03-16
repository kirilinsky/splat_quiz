import styles from './style.module.css'

const StatusBar = ({ length, currentCard }) => {
  return (
    <div className={styles.status__progress__bar}>
      <div className={styles.status__bar}>
        <span style={{ width: (100 / length) * currentCard + '%' }}></span>
      </div>
      <div className={styles.status__counter}>
        {currentCard}/{length}
      </div>
    </div>
  )
}

export default StatusBar

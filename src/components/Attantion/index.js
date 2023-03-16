import attentionImage from '../../assets/images/attention.svg'
import styles from './style.module.css'

export default function Attantion() {
  return (
    <div className={styles.information}>
      <img src={attentionImage} alt="attention" />
      <p>
        Тест построен на основе клинических рекомендаций Стоматологической
        ассоциации России (СтАР), не является средством постановки диагноза и
        советом по медицинскому вопросу. По всем вопросам, имеющим отношение к
        состоянию здоровья, врачебной и медицинской помощи, необходимо
        проконсультироваться со специалистом.
      </p>
    </div>
  )
}

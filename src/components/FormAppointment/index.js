import styles from './style.module.css'

import { useDispatch } from 'react-redux'
import { recommendationAppointment } from '../../actions/routingApp'

const FormAppointment = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.reception}>
      <p>Запишитесь к специалисту, чтобы получить квалифицированную помощь</p>
      <div
        className={styles.button}
        onClick={() => {
          dispatch(recommendationAppointment())
        }}
      >
        Записаться к специалисту
      </div>
    </div>
  )
}

export default FormAppointment

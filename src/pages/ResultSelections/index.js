import styles from './style.module.css'
import {  ScaleHygiene,   HygieneStatusText } from './scale'
import Title from '../../components/Title'

import { useDispatch } from 'react-redux'
import { resultScore } from '../../actions/routingApp'

const ResultSelection = () => {
  const dispatch = useDispatch()

  return (
    <>
      <Title text="Оценка состояния полости рта" />
      <div className="container">
        <div className={styles.result_selection}>
          <div className={styles.result_selection__item}>
            <div className={styles.scale}>
              <ScaleHygiene />
            </div>
            <div className={styles.title}>
              Оценка вашего уровня
              <br />
              гигиены
            </div>
            <HygieneStatusText />
            <div
              className={styles.button}
              onClick={() => {
                dispatch(resultScore())
              }}
            >
              Получить рекомендации
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default ResultSelection

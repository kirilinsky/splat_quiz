import React from 'react'
 import styles from './style.module.css'
import { recommendations } from '../../../data/firstQuestions'
import Title from '../../../components/Title'

import { useSelector, useDispatch } from 'react-redux'
import {
  recommendationAppointment,
  initialPage,
} from '../../../actions/routingApp'

const RecommendationProducts = () => {
  const count = useSelector((state) => state.number.recommendationValue)
  const dispatch = useDispatch()

  return (
    <>
      <Title text="Оценка состояния полости рта" />
      <div className="container">
        <div
          className="quiz-prev-page form-send-prev"
          onClick={() => {
            dispatch(recommendationAppointment())
          }}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
              fill="#CACFD1"
            />
          </svg>
          <p>Назад</p>
        </div>
        <div className={styles.recommendation}>
          <div className={styles.title}>Продуктовая рекомендация</div>
          <div className={styles.description}>
            {recommendations[count].textRecommendation}
          </div>
          <div className={styles.list}>
           {/*  {ToothpasteRecommendation[count].map((item) => (
              <React.Fragment key={item.id}>
                <div className={styles.description}>{item.description}</div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.item}>
                  <img src={item.image} alt="NAME" />
                  <section>
                    <span>{item.type}</span>
                    <p>{item.name}</p>
                  </section>
                </a>
              </React.Fragment>
            ))} */}
          </div>
          <button
            onClick={() => {
              dispatch(initialPage())
            }}
          >
            Пройти тест заново
          </button>
        </div>
      </div>
    </>
  )
}

export default RecommendationProducts

import { useState } from 'react'
import styles from './style.module.css'
import { recommendations } from '../../data/firstQuestions'

import SendEmail from '../../components/SendEmail'
import FormAppointment from '../../components/FormAppointment'

import { useSelector } from 'react-redux'
import ScrollToTop from '../../components/ScrollToTop'

const Recommendation = () => {
  const index = useSelector((state) => state.number.recommendationValue)

  return (
    <>
      <div className="quiz-wrapper">
        <div className="quiz">
          <div className="quiz-container">
            <div className="quiz-title">{recommendations[index].title}</div>
            <SendEmail buttonText="Отправить на почту" />
            <FormAppointment />
            <div className={styles.recommendation__text}>
              {recommendations[index].description.map((item) => (
                <div key={item.title}>
                  <p>{item.title}</p>
                  {typeof item.text === 'string' ? (
                    <span>{item.text}</span>
                  ) : (
                    <ul>
                      {item.text.map((el, index) => (
                        <li key={index}>{el}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <FormAppointment />
            {recommendations[index].warning && (
              <>
                <div className={styles.second__text}>
                  {recommendations[index].warning}
                </div>
                <a
                  className={styles.second__text__link}
                  href="https://e-stomatology.ru/director/protokols/"
                  target="_blank"
                >
                  https://e-stomatology.ru/director/protokols/
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  )
}

export default Recommendation

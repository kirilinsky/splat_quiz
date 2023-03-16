import React, { useState } from 'react'
import { Navigation } from 'swiper'
import { useDispatch } from 'react-redux'
import { resultSelection } from '../../actions/routingApp'

import { Swiper, SwiperSlide } from 'swiper/react'
import { cardList } from '../../data/foodRecommendation'

import sliderArrowImage from '../../assets/images/slider-arrow.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './style.module.css'

import OpenCard from './OpenCard'
import Title from '../../components/Title'

const FoodPage = () => {
  const [openCard, setOpenCard] = useState(false)
  const [numberCard, setNumberCard] = useState(1)
  const dispatch = useDispatch()

  return (
    <>
      {!openCard && (
        <>
          <Title text="Оценка вашего питания" />
          <div className="container">
            <div className="quiz-wrapper">
              <div
                className="quiz-prev-page"
                onClick={() => {
                  dispatch(resultSelection())
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
              <div className={styles.wrapper}>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView={5}
                  navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.2,
                      spaceBetween: 16,
                    },
                    375: {
                      slidesPerView: 1.7,
                    },
                    500: {
                      slidesPerView: 2.3,
                    },
                    640: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 24,
                    },
                    1200: {
                      slidesPerView: 5,
                    },
                    1400: {
                      slidesPerView: 6,
                    },
                  }}
                  className={styles.list}
                >
                  {cardList.map((card) => (
                    <SwiperSlide
                      style={{ backgroundImage: `url('${card.imageMobile}')` }}
                      className={styles.card}
                      key={card.id}
                      onClick={() => {
                        setNumberCard(card.id)
                        setOpenCard(true)
                      }}
                    >
                      <div className={styles.card_name}>
                        <p>{card.name}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={styles.navigation}>
                <div className={styles.prev + ' ' + styles.arrow + ' prev'}>
                  <img src={sliderArrowImage} alt="prev" />
                </div>
                <div className={styles.next + ' ' + styles.arrow + ' next'}>
                  <img src={sliderArrowImage} alt="next" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {openCard && (
        <OpenCard
          cardList={cardList}
          cardId={numberCard}
          closeCard={setOpenCard}
          // bmiNum={bmi}
        />
      )}
    </>
  )
}

export default FoodPage

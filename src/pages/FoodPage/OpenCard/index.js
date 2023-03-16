import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resultScore } from '../../../actions/routingApp'

import styles from './style.module.css'
import { foodRecommendation } from '../../../data/foodRecommendation'

import sliderArrowImage from '../../../assets/images/slider-arrow.svg'

const OpenCard = ({ cardId, cardList, closeCard }) => {
  const dispatch = useDispatch()
  const bmi = useSelector((state) => state.score.bmiNumber)
  const [indexPage, setIndexPage] = useState(cardId - 1)

  const decrement = () => {
    if (indexPage === 0) return setIndexPage(5)
    setIndexPage(indexPage - 1)
  }

  const increment = () => {
    if (indexPage === 5) return setIndexPage(0)
    setIndexPage(indexPage + 1)
  }

  const TextFoodRecommendations = () => {
    if (bmi <= 18)
      return foodRecommendation.recommendationLow[indexPage].map((item) => (
        <p style={{pointerEvents:'none'}} key={item}>{item}</p>
      ))
    if (bmi > 18 && bmi <= 24)
      return foodRecommendation.recommendationMedium[indexPage].map((item) => (
        <p style={{pointerEvents:'none'}} key={item}>{item}</p>
      ))
    if (bmi >= 25)
      return foodRecommendation.recommendationHight[indexPage].map((item) => (
        <p style={{pointerEvents:'none'}} key={item}>{item}</p>
      ))
  }

  const [screen, setScreen] = useState({ width: window.innerWidth })

  // Y
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [swipeY, setSwipeY] = useState(false)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientY)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd

    const isTopSwipe = distance > minSwipeDistance
    const isBottomSwipe = distance < -minSwipeDistance
    if (isTopSwipe || isBottomSwipe) {
      setSwipeY(isTopSwipe)
    }
  }

  // X
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)
  const [swipeX, setSwipeX] = useState(false)

  const onTouchStartX = (e) => {
    setTouchStartX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const onTouchMoveX = (e) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const onTouchEndX = () => {
    if (!touchStartX || !touchEndX) return
    const distance = touchStartX - touchEndX
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) {
      setSwipeX(isRightSwipe)

      if (isRightSwipe) {
        decrement()
        setSwipeY(false)
      } else {
        increment()
        setSwipeY(false)
      }
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="splat-title">Оценка вашего питания</h2>
        <div
          style={{
            backgroundImage:
              screen.width <= 425
                ? `url(${cardList[indexPage].mobileBackground})`
                : '',
          }}
          className={`${styles.wrapper} ${
            styles[cardList[indexPage].colorBackgroundClass]
          }`}
          onTouchStart={onTouchStartX}
          onTouchMove={onTouchMoveX}
          onTouchEnd={onTouchEndX}
        >
          {screen.width > 425 && (
            <img
              src={cardList[indexPage].imageDesktop}
              className={styles.imageBackground}
              alt=""
            />
          )}
          <div
            className={`${styles.count_slides} ${
              styles['slide_count_' + indexPage]
            }`}
          >
            {cardList.map((item) => (
              <span
                key={item.id}
                style={{
                  backgroundColor: cardList[indexPage].colorText,
                }}
              ></span>
            ))}
          </div>
          <div className={styles.button_close} onClick={() => closeCard(false)}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6668 5.33337L5.3335 26.6667"
                stroke={cardList[indexPage].colorText}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.3335 5.33337L26.6668 26.6667"
                stroke={cardList[indexPage].colorText}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.content}>
            <div
              className={`${styles.textContent} ${swipeY ? styles.open : ''}`}
              style={{
                background:
                  screen.width <= 425
                    ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${cardList[indexPage].colorBg} 20%)`
                    : '',
              }}
              onTouchStartCapture={onTouchStart}
              onTouchMoveCapture={onTouchMove}
              onTouchEndCapture={onTouchEnd}
            >
              <div
                className={styles.title}
                style={{ color: cardList[indexPage].colorText }}
              >
                {cardList[indexPage].name}
              </div>
              <div
                className={styles.description}
                style={{ color: cardList[indexPage].colorText }}
              >
                <TextFoodRecommendations />
              </div>
            </div>
            <div
              className={`btn-red ${styles.button}`}
              onClick={() => {
                dispatch(resultScore())
              }}
            >
              Получить продуктовую рекомендацию
            </div>
          </div>
          <nav>
            <div
              className={`${styles.btn} ${styles.btn_prev}`}
              onClick={decrement}
            >
              <img src={sliderArrowImage} alt="prev" />
            </div>
            <div
              className={`${styles.btn} ${styles.btn_next}`}
              onClick={increment}
            >
              <img src={sliderArrowImage} alt="next" />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default OpenCard

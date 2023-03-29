import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { secondQuestions } from '../../data/secondQuestions'
import { navigate } from './utils/navigate'
import { descriptionAnswer } from '../../actions/secondQuiz'

import StatusBar from './components/StatusBar'
import Questions from './components/Questions'
import Navigation from './components/Navigation'
import { useEffect } from 'react'

const SecondQuiz = () => {
  const [questions, setQuestions] = useState(secondQuestions)
  const [currentCard, setCurrentCard] = useState(1)
  const descriptionAnswer = useSelector(
    (state) => state.score.descriptionAnswer
  )
  const descriptionAnswerColor = useSelector(
    (state) => state.score.colorDescription
  )

  const handleCardChange = (cardIndex) => {
    setCurrentCard(cardIndex)
  }

  const cardCrop = navigate(questions, currentCard)

  // вынести повторяющиеся элементы из функции selectAnswer
  // const answerChoiceMode = () => {}

  const selectAnswer = (answerID, questionID) => {
    setQuestions(
      questions.map((el) => {
        if (el.isSingleAnswer) {
          el.answers.map((item) => {
            if (item.questionId === questionID) {
              item.status = false
              if (item.id === answerID) {
                item.status = !item.status
              }
            }
          })
        } else {
          el.answers.map((item) => {
            if (item.questionId === questionID) {
              if (item.id === answerID) {
                item.status = !item.status
              }
            }
          })
        }

        return el
      })
    )
  }

  const countingPoints = (
    sensitivity,
    caries,
    inflammationAndBleeding,
    hygieneLevel,
    id,
    questionId
  ) => {
    setQuestions(
      questions.map((item) => {
        if (item.id === questionId) {
          item.pointSensitivity = sensitivity
          item.pointCaries = caries
          item.pointInflammationAndBleeding = inflammationAndBleeding
          item.pointHygieneLevel = hygieneLevel
        }

        return item
      })
    )
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth)
    })
  }, [isMobile])

  return (
    <div style={{ background: '#F7F8FC' }}>
      <div className="container" >
        <div className="quiz-wrapper" style={{ display: 'flex' }}>
          {isMobile <= 1200 ? (
            <>
              <div className="quiz">
                <div className="quiz-container">
                  <StatusBar
                    length={questions.length}
                    currentCard={currentCard}
                  />
                  {cardCrop.map((card) => (
                    <Questions
                      key={card.id}
                      question={card}
                      onSelectAnswer={selectAnswer}
                      onCountingPoints={countingPoints}
                    />
                  ))}
                  <Navigation
                    questionLength={questions.length}
                    currentCard={currentCard}
                    questions={questions}
                    onChangeCard={handleCardChange}
                    currentQuestion={cardCrop}
                  />
                  <div className="quiz-image">
                    {cardCrop.map((image) => (
                      <img src={image.sourceImage} alt="" key={image.id} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="quiz">
                <div className="quiz-container">
                  <StatusBar
                    length={questions.length}
                    currentCard={currentCard}
                  />
                  {cardCrop.map((card) => (
                    <Questions
                      key={card.id}
                      question={card}
                      onSelectAnswer={selectAnswer}
                      onCountingPoints={countingPoints}
                    />
                  ))}
                  <Navigation
                    questionLength={questions.length}
                    currentCard={currentCard}
                    questions={questions}
                    onChangeCard={handleCardChange}
                    currentQuestion={cardCrop}
                  />
                  {/* <div className="quiz-image">
          {cardCrop.map((image) => (
            <img src={image.sourceImage} alt="" key={image.id} />
          ))}
        </div> */}
                </div>
              </div>
              {/*  <div className="quiz">
              <div className="quiz-container">
                <StatusBar
                  length={questions.length}
                  currentCard={currentCard}
                />
                <div
                  className={`quiz-desktop ${
                    descriptionAnswerColor ? 'green' : 'red'
                  }`}
                >
                  {descriptionAnswer}
                </div>
                <div className="quiz-image">
                  {cardCrop.map((image) => (
                    <img src={image.sourceImage} alt="" key={image.id} />
                  ))}
                </div>
              </div>
            </div> */}
            </>
          )}
        </div>
      </div>
      </div>
  )
}

export default SecondQuiz

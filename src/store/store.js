import { configureStore } from '@reduxjs/toolkit'
import routingApp from '../actions/routingApp'
import firstQuiz from '../actions/firstQuiz'
import secondQuiz from '../actions/secondQuiz'
import thirdQuiz from '../actions/thirdQuiz'

export default configureStore({
  reducer: {
    routing: routingApp,
    number: firstQuiz,
    score: secondQuiz,
    data: thirdQuiz,
  },
})

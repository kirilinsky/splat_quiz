import { configureStore } from '@reduxjs/toolkit'
import routingApp from '../actions/routingApp'
import secondQuiz from '../actions/secondQuiz'
import personal from '../actions/personal'

export default configureStore({
  reducer: {
    routing: routingApp,
    score: secondQuiz,
    personal
  },
})

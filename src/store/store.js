import { configureStore } from '@reduxjs/toolkit'
import routingApp from '../actions/routingApp'
 import secondQuiz from '../actions/secondQuiz'
 
export default configureStore({
  reducer: {
    routing: routingApp, 
    score: secondQuiz,
    
  },
})

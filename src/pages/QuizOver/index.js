import SendEmail from '../../components/SendEmail'

const QuizOver = () => {
  return (
    <div className="quiz quiz-over">
      <div className="quiz-title">Поздравляем!</div>
      <div className="quiz-text">
        Вы успешно прошли тест и мы можем порекомендовать вам несколько наших
        продуктов, подходящих именно вам! Оставьте свой e-mail и мы пришлем вам
        письмо с набором продуктов именно для вас.
      </div>
      <SendEmail buttonText="Отправить на почту" visible={true} />
    </div>
  )
}

export default QuizOver

import FinalForm from "../../../components/v2/FinalForm"


const FinalFormPage = () => {
  return (
    <div className="quiz quiz-over">
      <div className="quiz-title">Поздравляем!</div>
      <div className="quiz-text">
        Вы успешно прошли тест и мы можем порекомендовать вам несколько наших
        продуктов, подходящих именно вам! Оставьте свой e-mail и мы пришлем вам
        письмо с набором продуктов именно для вас.
      </div>
      <FinalForm />
    </div>
  )
}

export default FinalFormPage

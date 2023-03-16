import styles from "./style.module.css";

import { useDispatch } from "react-redux";
import { secondQuiz } from "../../actions/routingApp";
import Title from "../../components/Title";

const StartPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Title text="Оценка состояния полости рта" />
      <div className="quiz-wrapper">
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.hero__text}>
              <div className={styles.hero__line}>
                <span></span>
              </div>
              <div className={styles.hero__title}>
                <h2>
                  РАССКАЖИТЕ, ЧТО ВАС БЕСПОКОИТ, ПОЛУЧИТЕ РЕКОМЕНДАЦИИ И
                  ПРОКОНСУЛЬТИРУЙТЕСЬ СО СТОМАТОЛОГОМ, ОДОБРЕННЫМ SPLAT GLOBAL
                </h2>
              </div>
              <div className={styles.hero__button}>
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    dispatch(secondQuiz());
                  }}
                >
                  Начать
                </button>
              </div>
              <div className={styles.hero__description}>
                <p>
                  Дифференциально-диагностический опросник разработан совместно
                  с Вице-президентом "СтАР", доктором медицинских наук, врачем
                  высшей категории Кузнецовым Сергеем Владимировичем. Тест
                  построен на основе клинических рекомендаций Стоматологической
                  ассоциации России (СтАР) e-stomatology.ru, не является
                  средством постановки диагноза и советом по медицинскому
                  вопросу. По всем вопросам, имеющим отношение к состоянию
                  здоровья, врачебной и медицинской помощи, необходимо
                  проконсультироваться со специалистом
                </p>
              </div>
            </div>
            <div className={styles.hero__image}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;

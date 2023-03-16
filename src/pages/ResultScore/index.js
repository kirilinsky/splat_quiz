import styles from './style.module.css'
import Title from '../../components/Title'

import {useDispatch, useSelector} from 'react-redux'
import {resultSelection} from '../../actions/routingApp'

import {
  colorLineBleeding,
  colorLineCaries,
  colorLineHygieneLevel,
  colorLineRemineralizing,
  recommendation,
  ResultItem,
} from './settings'
import {Toothpaste, ToothpasteNotFluorine} from '../../data/toothpaste'

const ResultScore = () => {
  const remineralizing = useSelector((state) => state.score.sensitivity)
  const caries = useSelector((state) => state.score.caries)
  const bleeding = useSelector((state) => state.score.inflammationAndBleeding)
  const hygieneLevel = useSelector((state) => state.score.hygieneLevel)
  const ftor = useSelector((state) => state.score.ftor)
  const dispatch = useDispatch()

  // console.log('TOTAL POINTS:', remineralizing, caries, bleeding, hygieneLevel)

  const Value1 = () => {
    if (remineralizing <= 5) return 'Low'
    if (remineralizing > 6 && remineralizing <= 9) return 'Medium'
    if (remineralizing > 10) return 'High'

    return 'Low'
  }

  const Value2 = () => {
    if (caries <= 3) return 'Low'
    if (caries >= 4 && caries <= 9) return 'Medium'
    if (caries >= 10) return 'High'

    return 'Low'
  }

  const Value3 = () => {
    if (bleeding <= 3) return 'Low'
    if (bleeding >= 4 && bleeding <= 6) return 'Medium'
    if (bleeding >= 7) return 'High'

    return 'Low'
  }

  const Value4 = () => {
    if (hygieneLevel <= 5) return 'Low'
    if (hygieneLevel >= 6 && hygieneLevel <= 9) return 'Medium'
    if (hygieneLevel >= 10) return 'High'

    return 'Low'
  }

  const Products = ({array}) => {
    return array[
      `${Value1()}-${Value2()}-${Value3()}-${Value4()}`
      ].map((item) => (
      <div className={styles.products_item} key={item.id}>
        <div className={styles.product_img}>
          <img src={item.image} alt={item.name}/>
        </div>
        <div className={styles.product_text}>
          <div className={styles.description}>
            <span>Splat® professional</span>
            <p>{item.name}</p>
          </div>
          <a   href={item.link} className="button" target="_blank">
            Купить на aliexpress
          </a>
        </div>
      </div>
    ))
  }

  return (
    <>
      <Title text="Опрос от SPLAT Global"/>
      <div className="quiz-wrapper">
        <div className="container">
          <div
            className="quiz-prev-page"
            onClick={() => dispatch(resultSelection())}
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
        </div>
        <div className="container">
          <div className={styles.result_wrap}>
            <div className="quiz">
              <div className="quiz-container">
                <div className="quiz-title">Результат опроса</div>
                <div className={styles.result}>
                  <ResultItem
                    problemsCount={remineralizing}
                    range={[5, [6, 9], [9, 13]]}
                    objectName={recommendation.rem}
                    rangeLength={13}
                    colorLine={colorLineRemineralizing}
                    title="Реминерализация и укрепление"
                  />
                  <ResultItem
                    problemsCount={caries}
                    range={[3, [4, 9], [9, 12]]}
                    objectName={recommendation.caries}
                    rangeLength={12}
                    colorLine={colorLineCaries}
                    title="Кариес"
                  />
                  <ResultItem
                    problemsCount={bleeding}
                    range={[3, [4, 6], [7, 8]]}
                    objectName={recommendation.bleeding}
                    rangeLength={8}
                    colorLine={colorLineBleeding}
                    title="Воспаление и кровоточивость"
                  />
                  <ResultItem
                    problemsCount={hygieneLevel}
                    range={[3, [4, 6], [7, 8]]}
                    objectName={recommendation.hygieneLevel}
                    rangeLength={7}
                    colorLine={colorLineHygieneLevel}
                    title="Гигиена"
                  />
                </div>
              </div>
            </div>
            <div className={styles.products}>
              <div className={`quiz-title ` + styles.title}>
                Рекомендуем продукты
              </div>
              {/* дополнить фтор и написать ftor === yes */}
              {ftor === 'yes' ? <Products array={ToothpasteNotFluorine}/> : <Products array={Toothpaste}/>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultScore

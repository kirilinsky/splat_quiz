import styles from './style.module.css'
import Title from '../../components/Title'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { resultSelection } from '../../actions/routingApp'


import { Toothpaste, requiredProduts } from '../../data/toothpaste'
import tooth from './assets/tooth.png'
import wb from './assets/wb.png'
import ozon from './assets/ozon.png'
import ali from './assets/aliexpress.png'
import tyan from './assets/tyan.png'
import { useEffect, useState } from 'react'

const ResultScore = () => {
  const remineralizing = useSelector((state) => state.score.sensitivity)
  const caries = useSelector((state) => state.score.caries)
  const bleeding = useSelector((state) => state.score.inflammationAndBleeding)
  const hygieneLevel = useSelector((state) => state.score.hygieneLevel)
  const ftor = useSelector((state) => state.score.ftor)
  const name = useSelector((state) => state.personal.name)



  const percentage = (value, max) => {
    if (value == 0) {
      value = 1
    }
    return Math.ceil((value / max) * 100)
  }

  const Value1 = () => {
    if (remineralizing <= 5) return 'Low'
    if (remineralizing >= 6 && remineralizing <= 9) return 'Medium'
    if (remineralizing >= 10) return 'High'

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
    if (hygieneLevel <= 3) return 'Low'
    if (hygieneLevel >= 4 && hygieneLevel <= 5) return 'Medium'
    if (hygieneLevel >= 6) return 'High'

    return 'Low'
  }

  console.log('TOTAL POINTS:', 'remineralizing', Value1(), 'caries', Value2(), 'bleeding', Value3(), 'hygieneLevel', Value4())


  const Products = ({ additional = false, array, ftor = false, type = false }) => {
    const [productsArray, setProductsArray] = useState([])
    const [itemKey, setItemKey] = useState('')

    useEffect(() => {
      if (!type) {
        setProductsArray(array)
        return
      }
      let a = itemKey && array[
        `${Value1()}-${Value2()}-${Value3()}-${Value4()}`
      ]

      if (itemKey) {
        a = a.filter(x => x[itemKey].type === type)
      }

      setProductsArray(a)
      return () => {
        setProductsArray([])
      };
    }, [array, itemKey]);

    useEffect(() => {
      setItemKey(ftor ? 'ftorItem' : 'item')
    }, [ftor])

    console.log(ftor, 'ftor');

    return !productsArray.length ? '' : productsArray.map((item) => (
      <div className='product' key={item.id}>
        <div className="product_img"><img src={item[itemKey].image} alt={item[itemKey].name} /></div>
        <div className="product_body">
          <div className="product_body_copy">SPLAT® PROFESSIONAL</div>
          <div className="product_body_title">{item[itemKey].name}</div>


          <p className="product_body_desc">
            {/* description debug */}
          </p>
          <div className="product_body_buttons">
            <a href={item[itemKey].link} className="product_body_buttons_link" target="_blank">
              <img src={ali} alt="aliexpress" />
            </a>
            <a href={item[itemKey].link} className="product_body_buttons_link" target="_blank">
              <img src={ozon} alt="ozon" />
            </a>
            <a href={item[itemKey].link} className="product_body_buttons_link" target="_blank">
              <img src={wb} alt="wb" />
            </a>
          </div>
        </div>
      </div>
    ))
  }



  return (
    <>
      <div className="score_section">
        <div className="container">
          <div className="score_section_title">
            <div className="score_section_title_content">
              <h1>Спасибо за прохождение опроса{name ? ', ' + name.split(' ')[0] : ''}!</h1>
              <p>Мы провели для вас персональную оценку здоровья полости рта.
                Она включает четыре индикатора: гигиена, воспаление и кровоточивость, кариес, реминерализация и укрепление. Индикаторы помогают получить полную картину состояния полости рта и определить, что требует внимания и ухода</p>
              <span>*Информация в опроснике не может быть использована для назначения лечения и не заменяет прием врача. По всем вопросам, имеющим отношение к состоянию здоровья, врачебной и медицинской помощи, необходимо проконсультироваться со специалистом</span>
            </div>
            <div className="score_section_title_image">
              <img src={tooth} alt="tooth" />
            </div>
          </div>
        </div>

        <div className="score_section_result">
          <div className="score_section_result_wrap">
            <div className="score_section_result_item">
              <h4>Гигиена</h4>
              <h2>{percentage(hygieneLevel, 7)}%</h2>

              <div className="score_section_result_item_progress">
                <span style={{ width: `${percentage(hygieneLevel, 7)}%` }} className={Value4()}></span>
              </div>
              <p>
                Индикатор гигиены - оценивает риск развития заболеваний полости рта, которые связаны с нарушением гигиены зубов. Например, вероятность образования зубного налета и камня, кариеса и пародонтоза
              </p>
            </div>

            <div className="score_section_result_item">
              <h4>Воспаление и кровоточивость</h4>
              <h2>{percentage(bleeding, 8)}%</h2>
              <div className="score_section_result_item_progress"><span style={{ width: `${percentage(bleeding, 8)}%` }} className={Value3()}></span></div>
              <p>
                Индикатор воспаления
                и кровоточивости - оценивает риск развития заболеваний десен, которые связаны с воспалением
                и кровоточивостью при чистке зубов,
                а также общее состояние десен
                и вероятность пародонтоза
              </p>
            </div>

            <div className="score_section_result_item">
              <h4>Кариес</h4>
              <h2>{percentage(caries, 13)}%</h2>
              <div className="score_section_result_item_progress"><span style={{ width: `${percentage(caries, 13)}%` }} className={Value2()}></span></div>
              <p>
                Индикатор кариеса - оценивает риск развития кариеса зубов
              </p>
            </div>

            <div className="score_section_result_item">
              <h4>Реминерализация и укрепление</h4>
              <h2>{percentage(remineralizing, 12)}%</h2>

              <div className="score_section_result_item_progress"><span style={{ width: `${percentage(remineralizing, 12)}%` }} className={Value1()}></span></div>
              <p>
                Индикатор чувствительности - оценивает текущий уровень и риск развития повышенной чувствительности зубов. Индикатор учитывает болевые ощущения при контакте с холодной, горячей, сладкой или кислой пищей
              </p>
            </div>
          </div>
        </div>

      </div>



      <div className="products_section">

        <div className="container">
          <div className="products_section_title">
            <h2>Рекомендуем </h2>
            <p>На основе полученных ответов мы подобрали продукты SPLAT,
              которые соответствуют вашим потребностям по уходу за зубами и полостью рта:</p>
          </div>
          <div className="products_section_items">
            <Products type="product" array={Toothpaste} ftor={ftor} />
          </div>
          <div className="products_section_title">
            <p>Для более эффективного и комплексного ухода наши эксперты рекомендуют ежедневно использовать специализированные средства гигиены: ополаскиватель, зубную нить и очищающую пенку</p>
          </div>
          <div className="products_section_items">
            <Products type="accessories" array={Toothpaste} ftor={ftor} />
            <Products additional array={requiredProduts} />
          </div>
        </div>
      </div>


      <div className="feedback_section">
        <div className="container">
          <div className="feedback_section_wrapper">
            <div className="feedback_section_picture">
              <img src={tyan} alt="girl" />
            </div>
            <div className="feedback_section_content">
              <h2>Запишитесь к специалисту,
                чтобы получить квалифицированную помощь</h2>
              <button>Записаться к стоматологу</button>
              <p>Не забывайте регулярно посещать стоматолога и проводить профессиональную чистку зубов. Регулярные консультации специалиста и ежедневный домашний уход помогут сохранить здоровье зубов и десен на долгие годы</p>
              <p>Уход за полостью рта — важная часть повседневной заботы о здоровье. Если вас беспокоят какие-либо симптомы, или вы хотите пройти профилактический осмотр — вы можете записаться к нашим стоматологам. Все специалисты прошли отбор по критериям образования, опыта и отзывов клиентов, и получили одобрение компании SPLAT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultScore

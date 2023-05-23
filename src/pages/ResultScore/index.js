
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'

import { Toothpaste, bleedProduts, requiredProduts } from '../../data/toothpaste'
import tooth from './assets/tooth.png'


import ozonBig from './assets/ozon_big.png'
import disc from './assets/disc.png';

import pdf from './assets/pdf.svg'
import emailIcon from './assets/email.svg'

import { useEffect, useRef, useState } from 'react'
import axios from 'axios'


import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';



const ResultScore = () => {



  const remineralizing = useSelector((state) => state.score.sensitivity)
  const caries = useSelector((state) => state.score.caries)
  const bleeding = useSelector((state) => state.score.inflammationAndBleeding)
  const hygieneLevel = useSelector((state) => state.score.hygieneLevel)
  const bleed = useSelector((state) => state.score.bleed)
  const ftor = useSelector((state) => state.score.ftor)
  const name = useSelector((state) => state.personal.name)
  const email = useSelector((state) => state.personal.email)
  const dispatch = useDispatch()
  const [success, setSuccess] = useState(false)
  const [appError, setAppError] = useState(false)

  const [modalIsOpen, setIsOpen] = useState(false);
  const printRef = useRef();
  const printRef2 = useRef();
  const printRef3 = useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const element2 = printRef2.current;
    const element3 = printRef3.current;
    const canvas = await html2canvas(element);
    const canvas2 = await html2canvas(element2);
    const canvas3 = await html2canvas(element3);
    const data = canvas.toDataURL('image/png');
    const data2 = canvas2.toDataURL('image/png');
    const data3 = canvas3.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const imgProperties2 = pdf.getImageProperties(data2);
    const imgProperties3 = pdf.getImageProperties(data3);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    const pdfHeight2 =
      (imgProperties2.height * pdfWidth) / imgProperties2.width;
    const pdfHeight3 =
      (imgProperties3.height * pdfWidth) / imgProperties3.width;
    pdf.addImage(data, 'PNG', 3, 0, pdfWidth, pdfHeight);
    pdf.addPage();
    pdf.addImage(data2, 'PNG', 3, 0, pdfWidth, pdfHeight2);
    pdf.addImage(data3, 'PNG', 3, pdfHeight2, pdfWidth, pdfHeight3);

    pdf.link(pdfWidth / 2 - (imgProperties3.width / 2), pdfHeight2, imgProperties3.width, pdfHeight3, { url: 'https://www.example.com/' });

    pdf.save('print.pdf');
  };

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  const setAppointment = () => {
    setAppError(false)
    axios
      .post("/wp-content/themes/promo/inc/hygiene/ajax.php", { email, appointment: true })
      .then((r) => {
        window.ym && window.ym(92962183, 'reachGoal', 'specialist')
        window.gtag && window.gtag('event', 'specialist')
        setSuccess(true)
        openModal()
      })
      .catch((e) => {

        console.log("error");
        console.error(e.message);
        setSuccess(false)
        setAppError(true)

      });

  }


  const percentage = (value, max) => {
    if (value === 0) {
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

  //console.log('TOTAL POINTS:', 'remineralizing', Value1(), 'caries', Value2(), 'bleeding', Value3(), 'hygieneLevel', Value4())



  const Products = ({ additional = false, bleed = false, array, ftor = false, type = false }) => {
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

      if (a[0] && bleed) {
        a[0] = bleedProduts[0]
      }

      setProductsArray(a)
      return () => {
        setProductsArray([])
      };
    }, [array, itemKey]);

    const handleClickTracking = (e) => {
      let { name } = e.target

      window.ym && window.ym(92962183, 'reachGoal', name)
      window.gtag && window.gtag('event', name)
    }




    useEffect(() => {
      setItemKey(ftor ? 'ftorItem' : 'item')
    }, [ftor])

    return !productsArray.length ? '' : productsArray.map((item) => (
      <div className={`product  `} key={item.id}>
        <div className='product_desc'>
          <p>
            {item[ftor ? 'ftorRec' : 'rec']}
            {item[itemKey]?.rec}
          </p>
        </div>

        <div className="product_body">
          <div className="product_img"><img src={item[itemKey].image} alt={item[itemKey].name} /></div>
          <div className="product_body_content">
            <div className="product_body_copy">SPLAT® PROFESSIONAL</div>
            <div className="product_body_title">{item[itemKey].name}</div>
          </div>




          {/*  <div className="product_body_buttons"> 
           <a name={`${item[itemKey].yaIndex ?? '1'}_OZON`} onClick={handleClickTracking} href={item[itemKey].ozon} className="product_body_buttons_link ozon" target="_blank" rel="noreferrer noopener">
              Купить на OZON
            </a>  
          </div>*/}
        </div>
      </div>
    ))
  }



  return (
    <> 
      <div className="score_section">
        <div className='pdf_1' ref={printRef}>
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

          <div className="score_section_result" >
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


      </div>
      <div className="share_section">
        <div className="container">
          <div className="share_section_wrap">
            <h3>Поделиться результатом: </h3>
            <div className="share_section_links">
              <div className="share_section_link" onClick={handleDownloadPdf}>
                <img src={pdf} alt="pdf" />
                <span>Скачать в PDF</span>
              </div>
              {/*  <a target='_blank' rel='noopener noreferrer' href="https://telegram.me/share/url?url=promo.splatglobal.com/hygiene&text=я прошел тест" className="share_section_link">
                <img src={telegram} alt="telegram" />
                <span>   Отправить в Telegram</span>
              </a> 
              <div className="share_section_link">
                <img src={emailIcon} alt="email" />
                <span>   Отправить на почту</span>
              </div>*/}
            </div>
          </div>
        </div>
      </div>


      <div className="products_section" ref={printRef2}>

        <div className="container">

          <div className="products_section_title">
            <img src={ozonBig} alt="Ozon" />
            <h2> А это ваш персональный набор за уходом полости рта <span>со скидкой 15%</span></h2>

          </div>

          <div className="products_section_items">
            <Products type="product" array={Toothpaste} ftor={ftor} />

            <Products type="accessories" bleed={bleed} array={Toothpaste} ftor={ftor} />

            <Products additional array={requiredProduts} />

          </div>
        </div>

      </div>
      <div ref={printRef3} className="back_section">
        <div className="container">
          <a className='ozon_btn final_back_btn'>Купить со скидкой на OZON</a>
        </div>
      </div>

      {/* <div className="back_section">
        <div className="container">
          <button onClick={() => dispatch(backFromForm())} className='final_back_btn'>Назад</button>

        </div>
      </div> */}

      <div className="disc_section">
        <div className="container">
          <div className="disc_section_wrap">
            <img src={disc} alt="зубам полезно" />

            <p>Данный опросник не является средством постановки диагноза, не является советом по медицинскому вопросу. Информация в опроснике не может быть использована для назначения лечения и не заменяет прием врача. По всем вопросам, имеющим отношение к состоянию здоровья, врачебной и медицинской помощи, необходимо проконсультироваться со специалистом
              <br />
              <br />
              <span>
                Опросник разработан при поддержке Президента Профессионального общества гигиенистов стоматологических
              </span> </p>

          </div>
        </div>

      </div>
      {/* <div className="feedback_section">
        <div className="container">
          <div className="feedback_section_wrapper">
            <div className="feedback_section_picture">
              <img src={tyan} alt="girl" />
            </div>
            <div className="feedback_section_content">
              <p>Не забывайте регулярно посещать стоматолога и проводить профессиональную чистку зубов. Регулярные консультации специалиста и ежедневный домашний уход помогут сохранить здоровье зубов и десен на долгие годы</p>
              <p>Уход за полостью рта — важная часть повседневной заботы о здоровье. Если вас беспокоят какие-либо симптомы, или вы хотите пройти профилактический осмотр — вы можете записаться к нашим стоматологам. Все специалисты прошли отбор по критериям образования, опыта и отзывов клиентов, и получили одобрение компании SPLAT</p>

              <h2>Запишитесь к специалисту,
                чтобы получить квалифицированную помощь</h2>

              <button onClick={setAppointment} disabled={success}>{success ? 'Вы успешно записаны' : 'Записаться к стоматологу'}</button>
              <span className={`${appError ? '' : 'hidden'} error-app`}>что-то пошло не так, попробуйте еще раз</span>
            </div>
          </div>
        </div>

        <ModalSuccess onClose={closeModal} isOpen={modalIsOpen}
        />
      </div> */}
    </>
  )
}

export default ResultScore

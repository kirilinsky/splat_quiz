import { useEffect, useState } from "react";
import politic from "../../assets/pol.pdf";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { backFromForm, changeQuizPage, resultScore, secondQuiz } from "../../actions/routingApp";
import InputMask from "react-input-mask";
import { setPersonalAction } from "../../actions/personal";
import { setClearProducts, setOzonLink, setPercents, setProducts, setResultString } from "../../actions/secondQuiz";
import { links } from "../../data/ozonLinks";
import { Toothpaste, bleedProduts, requiredProduts } from "../../data/toothpaste";


const FinalForm = () => {
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);
  //const [info, setInfo] = useState(false);

  const sensitivity_indicator = useSelector((state) => state.score.sensitivity)
  const caries_indicator = useSelector((state) => state.score.caries)
  const inflammation_indicator = useSelector((state) => state.score.inflammationAndBleeding)
  const hygiene_indicator = useSelector((state) => state.score.hygieneLevel)
  const city = useSelector(state => state.personal.city)
  const bleed = useSelector((state) => state.score.bleed)
  const ftor = useSelector((state) => state.score.ftor)
  const ozonLink = useSelector((state) => state.score.ozonLink)
  const products = useSelector((state) => state.score.products)
  const percents = useSelector((state) => state.score.percents)
  const [errorSend, setErrorSend] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const Value1 = () => {
    if (sensitivity_indicator <= 5) return 'Low'
    if (sensitivity_indicator >= 6 && sensitivity_indicator <= 9) return 'Medium'
    if (sensitivity_indicator >= 10) return 'High'

    return 'Low'
  }

  const Value2 = () => {
    if (caries_indicator <= 3) return 'Low'
    if (caries_indicator >= 4 && caries_indicator <= 9) return 'Medium'
    if (caries_indicator >= 10) return 'High'

    return 'Low'
  }

  const Value3 = () => {
    if (inflammation_indicator <= 3) return 'Low'
    if (inflammation_indicator >= 4 && inflammation_indicator <= 6) return 'Medium'
    if (inflammation_indicator >= 7) return 'High'

    return 'Low'
  }

  const Value4 = () => {
    if (hygiene_indicator <= 3) return 'Low'
    if (hygiene_indicator >= 4 && hygiene_indicator <= 5) return 'Medium'
    if (hygiene_indicator >= 6) return 'High'

    return 'Low'
  }

  const percentage = (value, max) => {
    if (value === 0) {
      value = 1
    }
    return Math.ceil((value / max) * 100)
  }

  const createProducts = (array, bleed = false, ftor = false, type = false, resultString) => {

    if (!type) {
      return array.map(x => {
        return { item: x.item, rec: x.rec }
      })
    }
    let itemKey = ftor !== 'not' ? 'ftorItem' : 'item'
    let a = array[resultString]
    if (itemKey) {
      a = a.filter(x => x[itemKey].type === type).map(x => {
        if (ftor === 'not') {
          
          return { item: x.item, rec: x.rec }
        } else {
          return { item: x.ftorItem, rec: x.ftorRec }
        }
      })
    }

    if(type ==='accessories'  && bleed){
      a[0] = bleedProduts.map(x => {
        return { item: x.item, rec: x.rec }
      })[0]
    }
 
    return a
  }

  const countPercentage = () => {
    let finalString = `${Value1()}-${Value2()}-${Value3()}-${Value4()}`
    dispatch(setResultString(finalString))
    dispatch(setOzonLink(links[finalString]))
    dispatch(setClearProducts())
    dispatch(setProducts(createProducts(Toothpaste, bleed, ftor, 'product', finalString)))
    dispatch(setProducts(createProducts(Toothpaste, bleed, ftor, 'accessories', finalString)))
    dispatch(setProducts(createProducts(requiredProduts, bleed, ftor, '', finalString)))


    dispatch(setPercents({
      sensitivity: percentage(sensitivity_indicator, 12),
      caries: percentage(caries_indicator, 13),
      inflammationAndBleeding: percentage(inflammation_indicator, 8),
      hygieneLevel: percentage(hygiene_indicator, 7),
    }))

  }


  useEffect(() => { countPercentage() }, [sensitivity_indicator, caries_indicator, inflammation_indicator, hygiene_indicator])

  const handleInput = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value.trim() });
  };


  const submitForm = (e) => {
    dispatch(setPersonalAction(formdata))
    window.ym && window.ym(92962183, 'reachGoal', 'specialist_recommendations_open')
    window.gtag && window.gtag('event', 'specialist_recommendations_open')
    setAgree(false);
    //setInfo(false);
    setErrorSend(false)
    e.preventDefault();
    //dispatch(resultScore())
    axios
      .post("/wp-content/themes/promo/inc/hygiene/ajax.php", { ...formdata, city, products, ozonLink, sensitivity_indicator, percents, caries_indicator, hygiene_indicator, inflammation_indicator })
      .then((r) => {
        window.ym && window.ym(92962183, 'reachGoal', 'specialist_success')
        window.gtag && window.gtag('event', 'specialist_success')
        dispatch(resultScore())
      })
      .catch((e) => {
        console.log("error");
        console.error(e.message);
        setAgree(true);
        //setInfo(true);
        setErrorSend(true)
      });
  };


  useEffect(() => {
    window.ym && window.ym(92962183, 'reachGoal', 'specialist_open')
    window.gtag && window.gtag('event', 'specialist_open')
  }, [])
  return (
    <div className="form">
      <div className="form-title">
        Заполните форму, чтобы получить рекомендацию специалиста
      </div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={formdata.name}
          name="name"
          onChange={handleInput}
          className="form-input"
          placeholder="Ваше имя*"
          required
        />
        <div className="form-contact">
          <InputMask
            formatChars={{ '8': '[0-9]' }}
            value={formdata.phone}
            name="phone"
            onChange={handleInput}
            className="form-input"
            type="text"
            placeholder="Телефон"
            mask="+7988 8888888"
            maskChar=" "
            pattern="\+[79]{2][0-9]{9}"
          />


          <input
            type="email"
            onChange={handleInput}
            value={formdata.email}
            name="email"
            className="form-input"
            placeholder="E-mail*"
            required
          />
        </div>
        <div className="form-politic">
          <div className="line">
            <input
              value={agree}
              onChange={(e) => setAgree(e.target.checked)}
              type="checkbox"
              id="checkbox-mail"
            />
            <label htmlFor="checkbox-mail">
              Я принимаю условия{" "}
              <a href={politic} target="_blank">
                Политики о конфиденциальности
              </a>
            </label>
          </div>
          {/*  <div className="line">
            <input
              value={info}
              onChange={(e) => setInfo(e.target.checked)}
              type="checkbox"
              id="checkbox-info"
            />
            <label htmlFor="checkbox-info">
              Нажимая на кнопку, я даю согласие на информационную рассылку
            </label>
          </div> */}
        </div>
     {/*    <button
          className="form-send"
          onClick={() => {
            dispatch(setPersonalAction(formdata))
            dispatch(resultScore())
          }}
        >
          debug next
        </button> */}

        {errorSend && <span className="send-error">        что-то пошло не так, попробуйте еще раз
        </span>}
        <input
          disabled={!agree}
          type="submit"
          className="form-send"
          value="Отправить"
        />
      </form>
      <button
        className="form-send"
        onClick={() => dispatch(backFromForm())}
      >
        Назад
      </button>
    </div>
  );
};

export default FinalForm;

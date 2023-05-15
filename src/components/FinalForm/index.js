import { useEffect, useState } from "react";
import politic from "../../assets/pol.pdf";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { resultScore, secondQuiz } from "../../actions/routingApp";
import InputMask from "react-input-mask";
import { setPerosonalAction } from "../../actions/personal";


const FinalForm = () => {
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);
  //const [info, setInfo] = useState(false);

  const sensitivity_indicator = useSelector((state) => state.score.sensitivity)
  const caries_indicator = useSelector((state) => state.score.caries)
  const inflammation_indicator = useSelector((state) => state.score.inflammationAndBleeding)
  const hygiene_indicator = useSelector((state) => state.score.hygieneLevel)

  const [errorSend, setErrorSend] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleInput = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value.trim() });
  };


  const submitForm = (e) => {
    dispatch(setPerosonalAction(formdata))
    window.ym && window.ym(92962183, 'reachGoal', 'specialist_recommendations_open')
    window.gtag && window.gtag('event', 'specialist_recommendations_open')
    setAgree(false);
    //setInfo(false);
    setErrorSend(false)
    e.preventDefault();
    //dispatch(resultScore())
    axios
      .post("/wp-content/themes/promo/inc/hygiene/ajax.php", { ...formdata, sensitivity_indicator, caries_indicator, hygiene_indicator, inflammation_indicator })
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
        <button
          className="form-send"
          onClick={() => dispatch(resultScore())}
        >
          debug next
        </button>
        <button
          className="form-send"
          onClick={() => dispatch(secondQuiz())}
        >
          назад
        </button>
        {errorSend && <span className="send-error">        что-то пошло не так, попробуйте еще раз
        </span>}
        <input
          disabled={!agree}
          type="submit"
          className="form-send"
          value="Отправить"
        />
      </form>
    </div>
  );
};

export default FinalForm;

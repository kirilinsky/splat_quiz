import { useEffect, useState } from "react";
import politic from "../../assets/Политика_конфиденциальности_WEB_2208.pdf";
import axios from "axios";
import { useDispatch } from "react-redux";
import { resultScore } from "../../actions/routingApp";
import InputMask from "react-input-mask";
import { setPerosonalAction } from "../../actions/personal";

const FinalForm = () => {
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);
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
    window.ym(92962183, 'reachGoal', 'specialist_recommendations_open')
    window.gtag('event', 'specialist_recommendations_open')
    setAgree(false);
    e.preventDefault();
    dispatch(resultScore())
    axios
      .post("/wp-content/themes/promo/inc/hygiene/ajax.php", formdata)
      .then((r) => {
        window.ym(92962183, 'reachGoal', 'specialist_success')
        window.gtag('event', 'specialist_success')
        //debug post
        //dispatch(resultScore())
      })
      .catch((e) => {
        console.log("error");
        console.error(e.message);
        setAgree(true);
      });
  };

  useEffect(() => {
    window.ym(92962183, 'reachGoal', 'specialist_open')
    window.gtag('event', 'specialist_open')
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
              Нажимая на кнопку, я принимаю{" "}
              <a href={politic} target="_blank">
                условия соглашения
              </a>
            </label>
          </div>
        </div>
        {/*   <button
          className="form-send"
          onClick={() => dispatch(resultScore())}
        >
          debug next
        </button> */}
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

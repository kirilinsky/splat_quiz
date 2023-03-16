import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resultSelection } from '../../../actions/routingApp'
import politic from '../../assets/Политика_конфиденциальности_WEB_2208.pdf'
import axios from 'axios'
const SendEmail = ({ buttonText, visible = false }) => {
  const [checked, setChecked] = useState(false)
  const [sended, setSended] = useState(false)

  const [agree, setAgree] = useState(false)
  const [subscribe, setSubscribe] = useState(false)
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const reset = () => {
    setEmail('')
    setAgree(false)
    setSubscribe(false)
    setChecked(false)
    setSended(true)
  }

  const { number: { recommendationValue: rec } } = useSelector(state => state)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sendInfo = (e) => {
    e.preventDefault()
    setAgree(false)
    axios.post('/wp-content/themes/promo/inc/diagnostics/mail.php', {
      email, subscribe, rec
    }).then(r => {
      reset()
    }).catch(e => {
      console.log('error');
      console.error(e.message);
      setSended(false)
      setAgree(false)
    })
  }

  return (
    <div className="quiz-email">
      {!sended ?
        <div className="quiz-email-line">
          <div className="quiz-email-checkbox">
            <input
              type="checkbox"
              className="switch"
              id="checkbox"
              defaultChecked={checked}
              onChange={() => {
                setChecked(!checked)
              }}
            />
            <label htmlFor="checkbox"></label>
          </div>
          <div className="quiz-email-text">Отправить результат на почту</div>
        </div> : <div className="quiz-email-line">
          <div className="quiz-email-checkbox">
            <input checked="checked" disabled type="checkbox" id="sended-mail" />
            <label htmlFor="sended-mail">
              Результат отправлен на почту
            </label>
          </div>
        </div>}
      {
        !sended && checked && (
          <form
            onSubmit={(e) => {
              console.log('send')
            }}
          >
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" className="input-text" />
            <div className="line">
              <input onChange={e => setSubscribe(e.target.checked)} value={subscribe} type="checkbox" id="checkbox-mail" />
              <label htmlFor="checkbox-mail">
                Подписаться на рассылку новостей и акций
              </label>
            </div>
            <div className="line">
              <input onChange={e => setAgree(e.target.checked)} value={agree} type="checkbox" id="checkbox-conf" />
              <label htmlFor="checkbox-conf">
                Нажимая на кнопку, я принимаю условия{' '}
                <a href={politic}>соглашения конфиденциальности</a>
              </label>
            </div>
            <button onClick={sendInfo} disabled={!agree || !email || !validateEmail(email)} className="quiz-email-button">{buttonText}</button>
          </form>
        )
      }
      {/* при нажатии на кнопку показать результат, сделать событие отправки на почту */}
      {
        visible && !checked && (
          <div
            className="quiz-email-button"
            onClick={() => {
              dispatch(resultSelection())
            }}
          >
            {checked ? 'Отправить на почту' : 'Узнать рекомендации'}
          </div>
        )
      }
    </div >
  )
}

export default SendEmail

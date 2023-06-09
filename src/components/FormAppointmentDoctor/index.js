import { useState } from 'react'
import politic from '../../assets/Политика_конфиденциальности_WEB_2208.pdf'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { startPage } from '../../actions/routingApp'

const FormAppointmentDoctor = () => {
  const dispatch = useDispatch()
  const [agree, setAgree] = useState(false)
  const [formdata, setFormdata] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const handleInput = e => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    setAgree(false)
    e.preventDefault()
     axios.post('/wp-content/themes/promo/inc/diagnostics/ajax.php', formdata).then(r => {

      dispatch(startPage())
    }).catch(e => {
      console.log('error');
      console.error(e.message);
      setAgree(true)
    })
  }
  return (
    <div className="form">
      <div className="form-title">
        Заполните форму, чтобы получить рекомендацию специалиста
      </div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={formdata.name}
          name="name" onChange={handleInput}

          className="form-input"
          placeholder="Ваше имя*"
          required
        />
        <div className="form-contact">
          <input value={formdata.phone}
            name="phone" onChange={handleInput}
            type="text" className="form-input" placeholder="Телефон" />
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
            <input value={agree} onChange={(e) => setAgree(e.target.checked)} type="checkbox" id="checkbox-mail" />
            <label htmlFor="checkbox-mail">
              Нажимая на кнопку, я принимаю{' '}
              <a href={politic} target="_blank">
                условия соглашения
              </a>
            </label>
          </div>
        </div>
        <input disabled={!agree} type="submit" className="form-send" value="Отправить" />
      </form>
    </div>
  )
}

export default FormAppointmentDoctor

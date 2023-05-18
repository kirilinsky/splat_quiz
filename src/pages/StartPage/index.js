
import { useDispatch } from "react-redux";
import { secondQuiz } from "../../actions/routingApp";
import Tilt from 'react-parallax-tilt';

import './style.scss'
/* asset */
import bg from './assets/bg.png';
import tooth from './assets/tooth.png';
import disc from './assets/disc.png';

const StartPage = () => {
  const dispatch = useDispatch();
  return (

    <>
      <div className="mainscreen_grid">
        <div className="mainscreen_content">
          <h1>Узнайте о состоянии полости рта без посещения стоматолога</h1>
          <p>Пройдите бесплатную оценку полости рта и получите персональные рекомендации по уходу за зубами и дёснами</p>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
              dispatch(secondQuiz());
            }}
          >
            Начать
          </button>

        </div>
        <div className="mainscreen_picture">
          <div className="hero_desktop">
            <div className="hero_desktop_wrapper">
              <img className="desktop" alt="circle" src={bg} />
              <div className="hero_desktop_parallax">
                <Tilt className="hero_desktop_shadow" tiltMaxAngleX={30}
                  tiltMaxAngleY={22}
                  perspective={800}
                  transitionSpeed={1500}
                  gyroscope={true}>
                  <img className="tooth" src={tooth} alt="tooth" />
                </Tilt>
              </div>
            </div>
          </div>

        </div>


      </div>
      <div className="mainscreen_disc">
        <div className="mainscreen_disc_wrap">
          <img src={disc} alt="зубам полезно" />

          <p>Данный опросник не является средством постановки диагноза, не является советом по медицинскому вопросу. Информация в опроснике не может быть использована для назначения лечения и не заменяет прием врача. По всем вопросам, имеющим отношение к состоянию здоровья, врачебной и медицинской помощи, необходимо проконсультироваться со специалистом
            <br />
            <br />
            Опросник разработан при поддержке Президента Профессионального общества гигиенистов стоматологических</p>

        </div>
      </div>

    </>

  );
};

export default StartPage;

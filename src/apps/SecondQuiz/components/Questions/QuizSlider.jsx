import React, { useState } from "react";
import "./style.scss";

//assets
import right from "./right.svg";
import left from "./left.svg";
import rightDisabled from "./rightDisabled.svg";
import leftDisabled from "./leftDisabled.svg";

const QuizSlider = ({ arr }) => {
  const [currentText, setCurrentText] = useState(0);

  const navigateNext = () => {
    if (currentText +1 === arr.length) return;
    setCurrentText(currentText + 1);
  };
  const navigateBack = () => {
    if(currentText === 0) return
    setCurrentText(currentText - 1);
  };

  
  return (
    <div className="quiz_slider">
      <div className="quiz_slider-text">{arr[currentText]}</div>

      {arr.length >= 2 && (
        <div className="quiz_slider-controls">
          <button onClick={navigateBack}>
            <img src={currentText === 0 ? leftDisabled: left} alt="" />
          </button>
          <div className="quiz_slider-controls_dots">
            {currentText + 1} из {arr.length}
          </div>
          <button onClick={navigateNext}>
            <img src={currentText +1 === arr.length ? rightDisabled:  right} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizSlider;

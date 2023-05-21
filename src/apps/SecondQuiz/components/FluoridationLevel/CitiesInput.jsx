import React, { useEffect, useState } from "react";
import "./style.scss";
import loadingGif from "./loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { setCityAction } from "../../../../actions/personal";
import { setFtor } from "../../../../actions/secondQuiz";

let ftorCities = [
  "Тверь",
  "Томск",
  "Одинцово",
  "Егорьевск",
  "Красногорск",
  "Сердобск",
  "Сява",
  "Каракулино",
  "Игра",
  "Кез",
];

const CitiesInput = () => {
  const citySaved = useSelector((s) => s.personal.city);
  const [cityString, setCityString] = useState(citySaved || "");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [hiddenList, setHiddenList] = useState(true);
  const [selected, setSelected] = useState(false);
  const [disableSearch, setDisableSearch] = useState(citySaved ? true : false);

  const dispatch = useDispatch();

  const handleCityString = (e) => {
    setSelected(false);
    setCityString(e.target.value);
    setHiddenList(false);
    setDisableSearch(false);
  };

  const handleFocus = () => {
    setHiddenList(false);
  };

  const handleBlur = () => {
    setHiddenList(true);
  };

  const fetchDataAsync = async (str) => {
    try {
      const response = await fetch(
        `https://geohelper.info/api/v1/cities?apiKey=0tF315VZpXMUe7fjM9c2MT0YxstKWt0K&locale%5Blang%5D=ru&locale%5BfallbackLang%5D=ru&filter[name]="${str}"&filter[countryIso]=RU`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setData(data.result);
    } catch (error) {
      setError(error.message);
    }
  };

  const selectCity = (name) => {
    const ftor = ftorCities.includes(name) ? "yes" : "not";
    dispatch(setFtor(ftor));
    dispatch(setCityAction(name));

    setSelected(true);
    setCityString(name);
    setData(null);
    setDisableSearch(true);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (cityString !== "" && !disableSearch) {
        fetchDataAsync(cityString);
      } else {
        setData(null);
      }
    }, 500);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [cityString]);

  useEffect(() => {
    !selected && dispatch(setCityAction(""));
  }, [selected]);

  return (
    <div
      tabIndex={0}
      className="cities_input_wrap"
      onFocusCapture={handleFocus}
      onBlurCapture={handleBlur}
    >
      <input
        onInput={handleCityString}
        value={cityString}
        type="text"
        className="quiz-region-input"
      />

      {!hiddenList && !error && data && (
        <div className="cities_input_list">
          {data?.length > 0 ? (
            data.map((x) => (
              <div
                key={x.id}
                className="cities_input_list_item"
                onMouseDown={() => selectCity(x.name)}
              >
                {x.name}
                <span>{x.area}</span>
              </div>
            ))
          ) : (
            <div
              onClick={() => selectCity("")}
              title="сбросить"
              className="cities_input_list_item disabled"
            >
              ничего не найдено
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CitiesInput;

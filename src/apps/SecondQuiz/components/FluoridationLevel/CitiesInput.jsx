import React, { useEffect, useState } from "react";
import "./style.scss";
import loadingGif from "./loading.gif";

const CitiesInput = () => {
  const [cityString, setCityString] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [disableSearch, setDisableSearch] = useState(false);

  const handleCityString = (e) => {
    setCityString(e.target.value);
    setDisableSearch(false);
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
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const selectCity = (name) => {
    setCityString(name);
    setData(null);
    setDisableSearch(true);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (cityString !== "" && !disableSearch) {
        fetchDataAsync(cityString);
      }
    }, 500);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [cityString]);
  return (
    <div className="cities_input_wrap">
      <input
        onChange={handleCityString}
        value={cityString}
        type="text"
        className="quiz-region-input"
      />
      {console.log(data)}
      {!error && data && (
        <div className="cities_input_list">
          {isLoading ? (
            <img src={loadingGif} />
          ) : data?.length > 0 ? (
            data.map((x) => (
              <div
                className="cities_input_list_item"
                onClick={() => selectCity(x.name)}
              >
                {x.name}

                <span>{x.area}</span>
              </div>
            ))
          ) : (
            <div
              onClick={() => selectCity("")} title="сбросить"
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

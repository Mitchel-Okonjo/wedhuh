const Display = (() => {
  const setIcon = (data) => {
    const weatherMessage = document.querySelector(".weather-message");
    if (weatherMessage.children.length > 1)
      weatherMessage.removeChild(weatherMessage.lastChild);
    const image = document.createElement("img");
    image.src = data.current.condition.icon;
    weatherMessage.appendChild(image);
  };

  const setComment = (data) => {
    const text = document.querySelector(".weather-message .text");
    text.textContent = data.current.condition.text;
  };

  const setCountry = (data) => {
    const country = document.querySelector(".country .value");
    country.textContent = data.location.country;
  };

  const setRegion = (data) => {
    const region = document.querySelector(".region .value");
    region.textContent = data.location.region;
  };

  const setTime = (data) => {
    const time = document.querySelector(".time .value");
    const arr = data.location.localtime.split(" ");
    time.textContent = arr[1];
  };

  const setTimeZone = (data) => {
    const timeZone = document.querySelector(".time-zone .value");
    timeZone.textContent = data.location.tz_id;
  };

  const setTemp = (data, metric) => {
    const temp = document.querySelector(".temp .value");
    metric === "c"
      ? (temp.innerHTML = `${data.current.temp_c}&deg;C`)
      : (temp.innerHTML = `${data.current.temp_f}&deg;F`);
  };

  const setFeelsLike = (data, metric) => {
    const feelsLike = document.querySelector(".feels-like .value");
    metric === "c"
      ? (feelsLike.innerHTML = `${data.current.feelslike_c}&deg;C`)
      : (feelsLike.innerHTML = `${data.current.feelslike_f}&deg;F`);
  };

  const setHumidity = (data) => {
    const humidity = document.querySelector(".humidity .value");
    humidity.innerHTML = `${data.current.humidity}%`;
  };

  const setWindDir = (data) => {
    const windDir = document.querySelector(".wind-dir .value");
    windDir.textContent = data.current.wind_dir;
  };

  const clearInput = () => {
    const searchBar = document.querySelector(".search-input");
    searchBar.value = "";
  };

  const changeTemp = (data, temp) => {
    const tempBtn = document.querySelector(".temp-change button");
    const tempName = document.querySelector(".temp-change span");
    if (temp === "c") {
      tempBtn.innerHTML = `&deg;F`;
      tempName.textContent = "Farenheit";
      setTemp(data, "f");
      setFeelsLike(data, "f");
    } else {
      tempBtn.innerHTML = `&deg;C`;
      tempName.textContent = "Celcius";
      setTemp(data, "c");
      setFeelsLike(data, "c");
    }
  };

  const setCity = (data) => {
    const city = document.querySelector(".your-search button");
    city.textContent = data.location.name;
  };
  return {
    setIcon,
    setComment,
    setCountry,
    setRegion,
    setTime,
    setTimeZone,
    setTemp,
    setFeelsLike,
    setHumidity,
    setWindDir,
    clearInput,
    changeTemp,
    setCity,
  };
})();

export { Display };

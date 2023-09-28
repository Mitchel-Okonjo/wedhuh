/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Data: () => (/* binding */ Data)\n/* harmony export */ });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./src/error.js\");\n\n\nconst Data = (() => {\n  const loadJson = async (query) => {\n    const response = await fetch(\n      `http://api.weatherapi.com/v1/current.json?key=6fa9bd8888834bd589d202014232309&q=${query}`\n    );\n    if (response.status == 200) {\n      return response.json();\n    } else {\n      throw new _error__WEBPACK_IMPORTED_MODULE_0__.BadRequest(response);\n    }\n  };\n\n  return { loadJson };\n})();\n\n\n\n\n//# sourceURL=webpack://wedhuh/./src/data.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display)\n/* harmony export */ });\nconst Display = (() => {\n  const setIcon = (data) => {\n    const weatherMessage = document.querySelector(\".weather-message\");\n    if (weatherMessage.children.length > 1)\n      weatherMessage.removeChild(weatherMessage.lastChild);\n    const lastChild = weatherMessage.lastChild;\n    const image = document.createElement(\"img\");\n    image.src = data.current.condition.icon;\n    weatherMessage.appendChild(image);\n  };\n\n  const makeComment = (data) => {\n    const text = document.querySelector(\".weather-message .text\");\n    text.textContent = data.current.condition.text;\n  };\n\n  const setCountry = (data) => {\n    const country = document.querySelector(\".country .value\");\n    country.textContent = data.location.country;\n  };\n\n  const setRegion = (data) => {\n    const region = document.querySelector(\".region .value\");\n    region.textContent = data.location.region;\n  };\n\n  const setTime = (data) => {\n    const time = document.querySelector(\".time .value\");\n    const arr = data.location.localtime.split(\" \");\n    time.textContent = arr[1];\n  };\n\n  const setTimeZone = (data) => {\n    const timeZone = document.querySelector(\".time-zone .value\");\n    timeZone.textContent = data.location.tz_id;\n  };\n\n  const setTemp = (data, metric) => {\n    const temp = document.querySelector(\".temp .value\");\n    metric === \"c\"\n      ? (temp.innerHTML = `${data.current.temp_c}&deg;C`)\n      : (temp.innerHTML = `${data.current.temp_f}&deg;F`);\n  };\n\n  const setFeelsLike = (data, metric) => {\n    const feelsLike = document.querySelector(\".feels-like .value\");\n    metric === \"c\"\n      ? (feelsLike.innerHTML = `${data.current.feelslike_c}&deg;C`)\n      : (feelsLike.innerHTML = `${data.current.feelslike_f}&deg;F`);\n  };\n\n  const setHumidity = (data) => {\n    const humidity = document.querySelector(\".humidity .value\");\n    humidity.innerHTML = `${data.current.humidity}%`;\n  };\n\n  const setWindDir = (data) => {\n    const windDir = document.querySelector(\".wind-dir .value\");\n    windDir.textContent = data.current.wind_dir;\n  };\n\n  const clearInput = () => {\n    const searchBar = document.querySelector(\".search-input\");\n    searchBar.value = \"\";\n  };\n\n  const changeTemp = (data, temp) => {\n    const tempBtn = document.querySelector(\".temp-change button\");\n    const tempName = document.querySelector(\".temp-change span\");\n    if (temp === \"c\") {\n      tempBtn.innerHTML = `&deg;F`;\n      tempName.textContent = \"Farenheit\";\n      setTemp(data, \"f\");\n      setFeelsLike(data, \"f\");\n    } else {\n      tempBtn.innerHTML = `&deg;C`;\n      tempName.textContent = \"Celcius\";\n      setTemp(data, \"c\");\n      setFeelsLike(data, \"c\");\n    }\n  };\n\n  const setCity = (data) => {\n    const city = document.querySelector(\".your-search button\");\n    city.textContent = data.location.name;\n  };\n  return {\n    setIcon,\n    makeComment,\n    setCountry,\n    setRegion,\n    setTime,\n    setTimeZone,\n    setTemp,\n    setFeelsLike,\n    setHumidity,\n    setWindDir,\n    clearInput,\n    changeTemp,\n    setCity,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://wedhuh/./src/display.js?");

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BadRequest: () => (/* binding */ BadRequest)\n/* harmony export */ });\nclass BadRequest extends Error {\n  constructor(err) {\n    super(`This is a ${err.statusText}`);\n    this.status = err.status;\n    this.errName = err.statusText;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://wedhuh/./src/error.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ \"./src/error.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\n\nconst submitBtn = document.querySelector(\".search-btn\");\nconst input = document.querySelector(\".search-input\");\nconst tempBtn = document.querySelector(\".temp-change button\");\n\nlet currentData;\nlet currentTemp = \"c\";\nlet pageJustOpened = true;\n\nexecute();\n\nsubmitBtn.addEventListener(\"click\", (e) => {\n  execute();\n  e.preventDefault();\n});\n\ntempBtn.addEventListener(\"click\", () => {\n  _display__WEBPACK_IMPORTED_MODULE_0__.Display.changeTemp(currentData, currentTemp);\n  currentTemp === \"c\" ? (currentTemp = \"f\") : (currentTemp = \"c\");\n});\n\ninput.addEventListener(\"keyup\", (e) => {\n  if (e.key === \"Enter\") execute();\n  return;\n});\n\nasync function execute(query = \"Abuja\") {\n  try {\n    let data;\n    if (pageJustOpened) {\n      data = await _data__WEBPACK_IMPORTED_MODULE_2__.Data.loadJson(query);\n      pageJustOpened = false;\n    } else {\n      data = await _data__WEBPACK_IMPORTED_MODULE_2__.Data.loadJson(input.value);\n    }\n    // const data = await Data.loadJson(input.value);\n    currentData = data;\n\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.setIcon(data);\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.makeComment(data);\n\n    // set location details\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.setCountry(data);\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.setRegion(data);\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.setTime(data);\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.setTimeZone(data);\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.setCity(data);\n\n    // set current weather details\n    if (currentTemp === \"c\") {\n      _display__WEBPACK_IMPORTED_MODULE_0__.Display.setTemp(data, \"c\");\n      _display__WEBPACK_IMPORTED_MODULE_0__.Display.setFeelsLike(data, \"c\");\n    } else {\n      _display__WEBPACK_IMPORTED_MODULE_0__.Display.setTemp(data, \"f\");\n      _display__WEBPACK_IMPORTED_MODULE_0__.Display.setFeelsLike(data, \"f\");\n    }\n\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.setHumidity(data);\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.setWindDir(data);\n    _display__WEBPACK_IMPORTED_MODULE_0__.Display.clearInput();\n  } catch (err) {\n    if (err instanceof _error__WEBPACK_IMPORTED_MODULE_1__.BadRequest && err.status == 400) {\n      alert(\"Plese put in a valid city name\");\n    } else {\n      throw err;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://wedhuh/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
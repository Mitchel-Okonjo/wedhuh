import { Display } from "./display";
import { BadRequest } from "./error";
import { Data } from "./data";

const submitBtn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");
const tempBtn = document.querySelector(".temp-change button");

let currentData;
let currentTemp = "c";
let pageJustOpened = true;

execute();

submitBtn.addEventListener("click", (e) => {
  execute();
  e.preventDefault();
});

tempBtn.addEventListener("click", () => {
  Display.changeTemp(currentData, currentTemp);
  currentTemp === "c" ? (currentTemp = "f") : (currentTemp = "c");
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") execute();
  return;
});

async function execute(query = "Abuja") {
  try {
    let data;
    if (pageJustOpened) {
      data = await Data.loadJson(query);
      pageJustOpened = false;
    } else {
      data = await Data.loadJson(input.value);
    }

    currentData = data;

    Display.setIcon(data);
    Display.setComment(data);

    // set location details
    Display.setCountry(data);
    Display.setRegion(data);
    Display.setTime(data);
    Display.setTimeZone(data);
    Display.setCity(data);

    // set current weather details
    if (currentTemp === "c") {
      Display.setTemp(data, "c");
      Display.setFeelsLike(data, "c");
    } else {
      Display.setTemp(data, "f");
      Display.setFeelsLike(data, "f");
    }

    Display.setHumidity(data);
    Display.setWindDir(data);
    Display.clearInput();
  } catch (err) {
    if (err instanceof BadRequest && err.status == 400) {
      alert("PLEASE PUT IN A VALID CITY NAME!");
    } else {
      throw err;
    }
  }
}

import { BadRequest } from "./error";

const Data = (() => {
  const loadJson = async (query) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=6fa9bd8888834bd589d202014232309&q=${query}`
    );
    if (response.status == 200) {
      return response.json();
    } else {
      throw new BadRequest(response);
    }
  };

  return { loadJson };
})();

export { Data };

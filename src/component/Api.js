import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID g1ThKlkeQ2Pj_aquXQxhokBfBwnULsjyhA8fmPp0b2E",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImage;

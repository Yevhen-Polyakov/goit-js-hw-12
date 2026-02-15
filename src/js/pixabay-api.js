import axios from "axios";

const API_KEY = '54664427-262e44dbf661b4ce462360251';
const URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios(URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    }
  }).then((response) => response.data);
}

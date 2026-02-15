import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery, clearGallery, refreshLitBox } from "./render-functions";

const list = document.querySelector('.gallery');

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
  })
    .then((response) => {
      const images = response.data.hits || [];
      clearGallery();
      if (images.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        refreshLitBox();
        return [];
      }
      list.insertAdjacentHTML("beforeend", createGallery(images));
      refreshLitBox();
      return images;
    })
    .catch((error) => {
      console.log(error.message);
      return [];
    });
}

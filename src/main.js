import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);


function handleSubmit(e){
    e.preventDefault();
    const input = e.target.elements['search-text'].value.trim();

    if (!input) {
        iziToast.error({
            message: 'Please enter a search query.',
        });
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(input)
        .then((data) => {
            const images = data.hits || [];

            if (images.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                return;
            }

            createGallery(images);
        })
        .catch(() => {
            iziToast.error({
                message: 'Something went wrong. Please try again later.',
            });
        })
        .finally(() => {
            hideLoader();
        });

    e.target.reset();
}


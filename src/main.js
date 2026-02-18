import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery,} from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions';

const form = document.querySelector('.form');
const loadBtn = document.querySelector('.load-more')

let currentPage = 1;
const PER_PAGE = 15;
let currentQuery = "";

form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.elements['search-text'].value.trim();

    if (input.length === 0) {
        iziToast.error({
            message: 'Please enter a search query.',
        });
        return;
    }

    clearGallery();
    hideLoadMoreButton(); 
    showLoader();
    currentQuery = input;
    currentPage = 1;

    try {
        const data = await getImagesByQuery(currentQuery, currentPage, PER_PAGE);
        const images = data.hits || [];
        const totalPages = Math.ceil(data.totalHits / PER_PAGE);

        if (images.length === 0) {
            hideLoadMoreButton();
            iziToast.error({
                message: "We're sorry, но you' ve reached the end  of  search results."
            });
            return
        } 
            createGallery(images);

            if (totalPages === 1) {
                hideLoadMoreButton();
                iziToast.error({
                    message: "We're sorry, но you' ve reached the end  of  search results."
                });
                return
            } 
                showLoadMoreButton();
            
        
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
        });
    } finally {
        hideLoader();
    }

    e.target.reset();
}

loadBtn.addEventListener("click", loadSubmit)

async function loadSubmit(e) {
    e.preventDefault();
    currentPage += 1;
    hideLoadMoreButton(); 
    showLoader();

    try {
        const data = await getImagesByQuery(currentQuery, currentPage, PER_PAGE);
        const images = data.hits || [];
        const totalPages = Math.ceil(data.totalHits / PER_PAGE);

        if (images.length === 0) {
            hideLoadMoreButton();
            iziToast.error({
                message: "We're sorry, но you' ve reached the end  of  search results."
            });
            return
        }  
            createGallery(images);

            const firstCard = document.querySelector('.item-gallery');
            if (firstCard) {
                const { height: cardHeight } = firstCard.getBoundingClientRect();
                window.scrollBy({
                    top: cardHeight * 2,
                    behavior: 'smooth'
                });
            }
            if (currentPage >= totalPages) {
                hideLoadMoreButton();
                iziToast.error({
                    message: "We're sorry, но you' ve reached the end  of  search results."
                });
                return
            }  
                showLoadMoreButton();
            
        
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.'
        });
    } finally {
        hideLoader();
    }
}
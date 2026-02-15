import {getImagesByQuery} from './js/pixabay-api'
import { showLoader,hideLoader } from './js/render-functions'

const form = document.querySelector('.form')

form.addEventListener("submit", handleSubmit)


function handleSubmit(e){
    e.preventDefault()
    const input = e.target.elements["search-text"].value.trim()
    showLoader()
    getImagesByQuery(input).finally(()=>{
       hideLoader() 
    })
    
    e.target.reset()
}


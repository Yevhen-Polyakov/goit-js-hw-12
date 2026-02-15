import{S as u,a as f,i as d}from"./assets/vendor-qbZl2uZI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.querySelector(".loader"),p=new u(".gallery-link",{captions:!0,captionDelay:250});function m(s){return s.map(({webformatURL:r,largeImageURL:n,tags:i,likes:e,views:t,comments:o,downloads:l})=>`<li class="item-gallery">
                <a class="gallery-link" href="${n}">
                    <img src="${r}" alt="${i}">
                </a>
                <div class="info">
                    <div class="wrap-info">
                        <p class="info-text">Likes</p>
                        <span class="info-number">${e}</span>
                    </div>
                    <div class="wrap-info">
                        <p class="info-text">Views</p>
                        <span class="info-number">${t}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Comments</p>
                        <span class="info-number">${o}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Downloads</p>
                        <span class="info-number">${l}</span>
                    </div> 
                </div>   
            </li>`).join("")}function y(){const s=document.querySelector(".gallery");return s.innerHTML=""}function a(){p.refresh()}function g(){c.classList.remove("is-hidden")}function h(){c.classList.add("is-hidden")}const v=document.querySelector(".gallery"),L="54664427-262e44dbf661b4ce462360251",b="https://pixabay.com/api/";function x(s){return f(b,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{const n=r.data.hits||[];return y(),n.length===0?(d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),a(),[]):(v.insertAdjacentHTML("beforeend",m(n)),a(),n)}).catch(r=>(console.log(r.message),[]))}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();g(),x(r).finally(()=>{h()}),s.target.reset()}
//# sourceMappingURL=index.js.map

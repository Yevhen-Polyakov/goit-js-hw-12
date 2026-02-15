import{a as d,S as p,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="54664427-262e44dbf661b4ce462360251",y="https://pixabay.com/api/";function g(s){return d(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new p(".gallery-link",{captions:!0,captionDelay:250});function v(s){const r=s.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:o,comments:u,downloads:f})=>`<li class="item-gallery">
                <a class="gallery-link" href="${n}">
                    <img src="${i}" alt="${e}">
                </a>
                <div class="info">
                    <div class="wrap-info">
                        <p class="info-text">Likes</p>
                        <span class="info-number">${t}</span>
                    </div>
                    <div class="wrap-info">
                        <p class="info-text">Views</p>
                        <span class="info-number">${o}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Comments</p>
                        <span class="info-number">${u}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Downloads</p>
                        <span class="info-number">${f}</span>
                    </div> 
                </div>   
            </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const x=document.querySelector(".form");x.addEventListener("submit",S);function S(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search query."});return}b(),L(),g(r).then(i=>{const n=i.hits||[];if(n.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}v(n)}).catch(()=>{a.error({message:"Something went wrong. Please try again later."})}).finally(()=>{w()}),s.target.reset()}
//# sourceMappingURL=index.js.map

import{a as P,S,i as a}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const q="54664427-262e44dbf661b4ce462360251",x="https://pixabay.com/api/";async function f(o,r=1,s=15){return(await P(x,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector(".load-more"),$=new S(".gallery-link",{captions:!0,captionDelay:250});function y(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:c,comments:w,downloads:b})=>`<li class="item-gallery">
                <a class="gallery-link" href="${n}">
                    <img src="${s}" alt="${e}">
                </a>
                <div class="info">
                    <div class="wrap-info">
                        <p class="info-text">Likes</p>
                        <span class="info-number">${t}</span>
                    </div>
                    <div class="wrap-info">
                        <p class="info-text">Views</p>
                        <span class="info-number">${c}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Comments</p>
                        <span class="info-number">${w}</span>
                    </div>    
                    <div class="wrap-info">
                        <p class="info-text">Downloads</p>
                        <span class="info-number">${b}</span>
                    </div> 
                </div>   
            </li>`).join("");m.insertAdjacentHTML("beforeend",r),$.refresh()}function B(){m.innerHTML=""}function g(){h.classList.remove("is-hidden")}function v(){h.classList.add("is-hidden")}function L(){p.classList.remove("is-hidden")}function i(){p.classList.add("is-hidden")}const M=document.querySelector(".form"),E=document.querySelector(".load-more");let l=1;const d=15;let u="";M.addEventListener("submit",O);async function O(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(r.length===0){a.error({message:"Please enter a search query."});return}B(),i(),g(),u=r,l=1;try{const s=await f(u,l,d),n=s.hits||[],e=Math.ceil(s.totalHits/d);if(n.length===0){i(),a.error({message:"We're sorry, но you' ve reached the end  of  search results."});return}if(y(n),e===1){i(),a.error({message:"We're sorry, но you' ve reached the end  of  search results."});return}L()}catch{a.error({message:"Something went wrong. Please try again later."})}finally{v()}o.target.reset()}E.addEventListener("click",H);async function H(o){o.preventDefault(),l+=1,i(),g();try{const r=await f(u,l,d),s=r.hits||[],n=Math.ceil(r.totalHits/d);if(s.length===0){i(),a.error({message:"We're sorry, но you' ve reached the end  of  search results."});return}y(s);const e=document.querySelector(".item-gallery");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}if(l>=n){i(),a.error({message:"We're sorry, но you' ve reached the end  of  search results."});return}L()}catch{a.error({message:"Something went wrong. Please try again later."})}finally{v()}}
//# sourceMappingURL=index.js.map

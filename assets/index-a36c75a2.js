(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();new Swiper(".productsSwiper",{direction:"horizontal",slidesPerView:"auto",freeMode:!0,spaceBetween:18,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0}});new Swiper(".mySwiper",{direction:"horizontal",slidesPerView:"auto",spaceBetween:0,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0}});(()=>{const o={openModalBtn:document.querySelector("[data-modal-buy-open]"),closeModalBtn:document.querySelector("[data-modal-buy-close]"),modal:document.querySelector("[data-modal-buy]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-subscribe-open]"),closeModalBtn:document.querySelector("[data-modal-subscribe-close]"),modal:document.querySelector("[data-modal-subscribe]")};o.openModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t);function t(){o.modal.classList.toggle("is-hidden")}})();

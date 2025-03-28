(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelector(".video__button").addEventListener("click",function(){const r=document.querySelector(".video");r.innerHTML='<iframe class="video--play" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>'});document.querySelectorAll(".product__button, .product-card__button").forEach(r=>{r.addEventListener("click",()=>{document.body.insertAdjacentHTML("beforeend",`
      <div class="modal">
        <div class="modal__content">
        <div class="modal__name">
          <p>Оставьте заявку</p>
          <button class="modal__close"><img src="./src/assets/close.png"></button>
        </div>
        <div class="modal__inputs"> 
          <input type="text" placeholder="Ваше имя*">
          <p class="error-text">Поле не заполнено</p>
          <input type="tel" placeholder="Номер телефона*" id="phone">
          <p class="error-text">Поле не заполнено</p>
        </div>
          <div class="modal__footer">
            <div class="modal__checkbox">
              <input type="checkbox">Я соглашаюсь на обработку персональных данных</input>
            </div>
            <button class="modal__button">Отправить</button>
          </div>
        </div>
      </div>
    `);const o=document.querySelector(".modal"),l=o.querySelector(".modal__close"),s=o.querySelector(".modal__button"),e=o.querySelectorAll("input[type='text'], input[type='tel']");s.addEventListener("click",()=>{let t=!0;e.forEach(c=>{const n=c.nextElementSibling;c.value.trim()===""?(c.classList.add("error"),n.style.display="block",t=!1):(c.classList.remove("error"),n.style.display="none")}),t&&o.remove()}),l.addEventListener("click",()=>o.remove())})});document.addEventListener("input",function(r){r.target.id==="phone"&&(r.target.value=r.target.value.replace(/\D/g,"").slice(0,11))});

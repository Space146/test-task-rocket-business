
document.querySelector(".video__button").addEventListener("click", function() {
  const videoContainer = document.querySelector(".video");
  videoContainer.innerHTML = `<iframe class="video--play" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>`;
});

document.querySelectorAll(".product__button, .product-card__button").forEach(button => {
  button.addEventListener("click", () => {
    document.body.insertAdjacentHTML("beforeend", `
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
    `);

    const modal = document.querySelector(".modal");
    const closeButton = modal.querySelector(".modal__close");
    const sendButton = modal.querySelector(".modal__button");
    const inputs = modal.querySelectorAll("input[type='text'], input[type='tel']");
    
    sendButton.addEventListener("click", () => {
      let isValid = true;

      inputs.forEach(input => {
        const errorText = input.nextElementSibling;

        if (input.value.trim() === "") {
          input.classList.add("error");
          errorText.style.display = "block";
          isValid = false;
        } else {
          input.classList.remove("error");
          errorText.style.display = "none";
        }
      });

      if (isValid) {
        modal.remove();
      }
    });

    closeButton.addEventListener("click", () => modal.remove());
  });
});


document.addEventListener("input", function(e) {
  if (e.target.id === "phone") {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 11);
  }
});
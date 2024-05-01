export const addAnoterCard = (e) => {
  if (e.target.classList.value !== "card-add") return;
  if (document.querySelector(".card-conteiner-textarea"))
    return alert("Завершите добавление заметки");
  e.target.parentNode.insertAdjacentHTML(
    "beforebegin",
    `<div class="card-conteiner-textarea"><textarea class='card-textarea' autofocus placeholder='Enter a title for this card...' required></textarea></div>`
  );
  e.target.parentNode.innerHTML = `<button class="add">Add Card</button><div class="close">X</div>`;
  const add = document.querySelector(".add");
  const cardTextarea = document.querySelector(".card-textarea");
  add.addEventListener("click", (event) => {
    if (!cardTextarea.value) return alert("Заметка не должна быть пустой");
    cardTextarea.parentNode.innerHTML = `${cardTextarea.value}<span class="card-delete">X</span><div class="card-navigation">&#9776</div>`;
    const cardConteinerTextarea = document.querySelector(
      ".card-conteiner-textarea"
    );
    cardConteinerTextarea.classList.remove("card-conteiner-textarea");
    cardConteinerTextarea.classList.add("card-conteiner");
    event.target.parentNode.innerHTML = `<div class="card-add">+Add another card</div>`;
  });
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    cardTextarea.parentNode.remove();
    add.parentNode.innerHTML = `<div class="card-add">+Add another card</div>`;
  });
};

export const mouseoverOnCardConteiner = (e) => {
  if (e.target.classList.value !== "card-conteiner") return;
  const cardDelete = e.target.querySelector(".card-delete");
  cardDelete.style.display = "flex";
  cardDelete.addEventListener("click", () => {
    cardDelete.parentNode.remove();
  });
  e.target.addEventListener("mouseleave", () => {
    cardDelete.style.display = "none";
  });
};

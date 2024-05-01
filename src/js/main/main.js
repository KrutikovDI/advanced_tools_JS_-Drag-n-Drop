// const colomns = document.querySelectorAll('.colomn');

// const addAnoterCard = (e) => {
//   if (e.target.classList.value !== 'card-add') return
//   if (document.querySelector('.card-conteiner-textarea')) return alert("Завершите добавление заметки")
//   e.target.parentNode.insertAdjacentHTML('beforebegin', `<div class="card-conteiner-textarea"><textarea class='card-textarea' autofocus placeholder='Enter a title for this card...' required></textarea></div>`);
//   e.target.parentNode.innerHTML = `<button class="add">Add Card</button><div class="close">X</div>`
//   const add = document.querySelector('.add')
//   const cardTextarea = document.querySelector('.card-textarea')
//   add.addEventListener('click', (event) => {
//       if (!cardTextarea.value) return alert("Заметка не должна быть пустой")
//       cardTextarea.parentNode.innerHTML = `${cardTextarea.value}<span class="card-delete">X</span><div class="card-navigation">&#9776</div>`
//       const cardConteinerTextarea = document.querySelector('.card-conteiner-textarea');
//       cardConteinerTextarea.classList.remove('card-conteiner-textarea');
//       cardConteinerTextarea.classList.add('card-conteiner')
//       event.target.parentNode.innerHTML = `<div class="card-add">+Add another card</div>`
//   })
//   const close = document.querySelector('.close');
//   close.addEventListener('click', (ev) => {
//       cardTextarea.parentNode.remove();
//       add.parentNode.innerHTML = `<div class="card-add">+Add another card</div>`
//   })
// }

// const mouseoverOnCardConteiner = (e) => {
//     if (e.target.classList.value !== 'card-conteiner') return
//     const cardDelete = e.target.querySelector('.card-delete')
//     cardDelete.style.display = "flex"
//     cardDelete.addEventListener('click', () => {
//         cardDelete.parentNode.remove();
//     })
//     e.target.addEventListener('mouseleave', (event) => {
//         cardDelete.style.display = "none"
//     })
// }

// colomns.forEach(function(colomn) {
//   colomn.addEventListener('click', this)}, addAnoterCard
// )

// colomns.forEach(function(colomn) {
//     colomn.addEventListener('mouseover', this)}, mouseoverOnCardConteiner)

// let actualElement
// let shadow
// let captureСoordinates
// let elemBelow

// const mousedownOnCardConteiner = (e) => {
//   e.preventDefault();
//   if (e.target.classList.value !== 'card-conteiner') return
//   actualElement = e.target;
//   shadow = document.createElement('div')
//   shadow.id = "shadow"
//   shadow.style.height = actualElement.offsetHeight + 7 + 'px'
//   actualElement.nextSibling.before(shadow)
//   actualElement.style.cursor = "grabbing";
//   actualElement.classList.add('dragged');
//   captureСoordinates = {
//       shiftX: e.clientX - actualElement.getBoundingClientRect().left,
//       shiftY: e.clientY - actualElement.getBoundingClientRect().top
//   }
//   document.documentElement.addEventListener('mouseup', MouseUpOnCardConteiner);
//   document.documentElement.addEventListener('mouseover', MouseOverOnCardConteiner);
// };

// const MouseOverOnCardConteiner = (e) => {
//   actualElement.style.left = e.clientX - captureСoordinates.shiftX + 'px';
//   actualElement.style.top = e.clientY - captureСoordinates.shiftY + 'px';
//   actualElement.style.display = 'none';
//   elemBelow = document.elementFromPoint(e.clientX, e.clientY);
//   actualElement.style.display = 'block';
//   if (!elemBelow.closest('.colomn')) return;
//   elemBelow.before(shadow)
// };

// const MouseUpOnCardConteiner = (e) => {
//     if(elemBelow.closest('.colomn') == null) return
//     console.log(elemBelow.closest('.colomn'));
//     actualElement.classList.remove('dragged');
//     actualElement.style.cursor = "pointer";
//     shadow.before(actualElement);
//     shadow.remove();
//     actualElement.style.left = '';
//     actualElement.style.top = '';
//     actualElement = undefined;
//     document.documentElement.removeEventListener('mouseup', MouseUpOnCardConteiner);
//     document.documentElement.removeEventListener('mouseover', MouseOverOnCardConteiner);
// };

// colomns.forEach(function(colomn) {
//     colomn.addEventListener('mousedown', this)}, mousedownOnCardConteiner)

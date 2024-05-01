import { addAnoterCard, mouseoverOnCardConteiner } from "./main/addCard";
import { mousedownOnCardConteiner } from "./main/movingElement";

const colomns = document.querySelectorAll(".colomn");

colomns.forEach(function (colomn) {
  colomn.addEventListener("click", this);
}, addAnoterCard);

colomns.forEach(function (colomn) {
  colomn.addEventListener("mouseover", this);
}, mouseoverOnCardConteiner);

colomns.forEach(function (colomn) {
  colomn.addEventListener("mousedown", this);
}, mousedownOnCardConteiner);

let actualElement;
let shadow;
let captureСoordinates;
let elemBelow;

export const mousedownOnCardConteiner = (e) => {
  e.preventDefault();
  if (e.target.classList.value !== "card-conteiner") return;
  actualElement = e.target;
  shadow = document.createElement("div");
  shadow.id = "shadow";
  shadow.style.height = actualElement.offsetHeight + 7 + "px";
  actualElement.nextSibling.before(shadow);
  actualElement.style.cursor = "grabbing";
  actualElement.classList.add("dragged");
  captureСoordinates = {
    shiftX: e.clientX - actualElement.getBoundingClientRect().left,
    shiftY: e.clientY - actualElement.getBoundingClientRect().top,
  };
  document.documentElement.addEventListener("mouseup", MouseUpOnCardConteiner);
  document.documentElement.addEventListener(
    "mouseover",
    MouseOverOnCardConteiner
  );
};

export const MouseOverOnCardConteiner = (e) => {
  actualElement.style.left = e.clientX - captureСoordinates.shiftX + "px";
  actualElement.style.top = e.clientY - captureСoordinates.shiftY + "px";
  actualElement.style.display = "none";
  elemBelow = document.elementFromPoint(e.clientX, e.clientY);
  actualElement.style.display = "block";
  if (!elemBelow.closest(".colomn")) return;
  elemBelow.before(shadow);
};

export const MouseUpOnCardConteiner = () => {
  if (elemBelow.closest(".colomn") == null) return;
  console.log(elemBelow.closest(".colomn"));
  actualElement.classList.remove("dragged");
  actualElement.style.cursor = "pointer";
  shadow.before(actualElement);
  shadow.remove();
  actualElement.style.left = "";
  actualElement.style.top = "";
  actualElement = undefined;
  document.documentElement.removeEventListener(
    "mouseup",
    MouseUpOnCardConteiner
  );
  document.documentElement.removeEventListener(
    "mouseover",
    MouseOverOnCardConteiner
  );
};

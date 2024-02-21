let input = document.querySelector(".thingamajig");
let button = document.querySelector("button");
let space = document.querySelector(".emptySpace");

button.onclick = function() {
  let val = input.value;
  space.insertAdjacentHTML("beforeend", `${val}`);
};
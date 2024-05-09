"use strict";
const element = document.querySelector(".nav-li");
document.querySelector(".nav-li").addEventListener("click", function () {
  element.classList.add("active::after");
});

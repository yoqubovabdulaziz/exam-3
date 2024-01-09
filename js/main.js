const btn = document.querySelector(".basket__btn");
const span = document.querySelector(".plus");
btn.addEventListener("click", () => {
  span.innerHTML++;
});

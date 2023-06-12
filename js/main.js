function truncateCardTitle() {
  const cardList = document.getElementsByClassName("card-title");
  const arr = Array.from(cardList);
  arr.forEach((e) => {
    let newStr = trunscateString(e.innerHTML.trimStart().trimEnd(), 50);
    e.innerHTML = newStr;
  });
}
function trunscateString(str, num) {
  const newStr = str.length > num ? str.slice(0, num).concat("...") : str;
  return newStr;
}
window.addEventListener("load", truncateCardTitle());
// Side bar mini
const toggleBtn = document.querySelector(".sideBarMini__button");
const sidebarMini = document.querySelector(".sideBarMini");
const switchBtn = document.querySelector("#checkbox");
toggleBtn.addEventListener("click", function () {
  sidebarMini.classList.toggle("is-opened");
});
switchBtn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("darkMode");
});

const btn = document.querySelector(".btn");
const messDiv = document.querySelector(".mess-div");
const closeMess = document.querySelector(".close-code");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  messDiv.classList.add("active");
});

closeMess.addEventListener("click", () => {
  messDiv.classList.remove("active");
});

const forMe = document.querySelector("#for-me");
const other = document.querySelector("#else");

forMe.addEventListener("click", () => {
  if (forMe.checked == true) {
    other.checked = false;
    forMe.checked = true;
  }
});
other.addEventListener("click", () => {
  if (other.checked == true) {
    forMe.checked = false;
    other.checked = true;
  }
});

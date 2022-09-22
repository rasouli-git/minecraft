const btn = document.querySelector(".btn");
const messDiv = document.querySelector(".mess-div");
const closeMess = document.querySelector(".close-code");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   messDiv.classList.add("active");
// });

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

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const fullName = document.querySelector("#fullName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const fullNameValue = fullName.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === "") {
    setError(username, "فیلد مورد نظر را تکمیل نمایید");
  } else {
    setSuccess(username);
  }

  if(passwordValue === ''){
    setError(password, "فیلد مورد نظر را تکمیل نمایید")
  }else{
    setSuccess(password)
  }

  if(fullNameValue === ''){
    setError(fullName, "فیلد مورد نظر را تکمیل نمایید")
  }else{
    setSuccess(fullName)
  }

  if(phoneValue === ''){
    setError(phone, "فیلد مورد نظر را تکمیل نمایید")
  }else{
    setSuccess(phone)
  }

  if(emailValue === ''){
    setError(email, "فیلد مورد نظر را تکمیل نمایید")
  }else{
    setSuccess(email)
  }
}

function setError(input, message) {
  const item = input.parentElement;
  const span = item.querySelector("span");
  item.className = "item error";
  span.innerText = message;
}

function setSuccess(input) {
  const form = input.parentElement;
  form.className = "item success";
}

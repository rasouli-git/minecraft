const btn = document.querySelector(".btn");
const messDiv = document.querySelector(".mess-div");
const closeMess = document.querySelector(".close-code");
const items = document.querySelectorAll(".item");
const codeInput = document.querySelector(".code-input");

const forMe = document.querySelector("#for-me");
const other = document.querySelector("#else");

const policy = document.querySelector("#policy");

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const fullName = document.querySelector("#fullName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
let index = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
  index = 0;
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

  if (passwordValue === "") {
    setError(password, "فیلد مورد نظر را تکمیل نمایید");
  } else {
    setSuccess(password);
  }

  if (fullNameValue === "") {
    setError(fullName, "فیلد مورد نظر را تکمیل نمایید");
  } else {
    setSuccess(fullName);
  }

  if (phoneValue === "") {
    setError(phone, "فیلد مورد نظر را تکمیل نمایید");
  } else if (!isPhone(phoneValue)) {
    setError(phone, "شماره را درست وارد نمایید");
  } else {
    setSuccess(phone);
  }

  if (emailValue === "") {
    setError(email, "فیلد مورد نظر را تکمیل نمایید");
  } else if (!isEmail(emailValue)) {
    setError(email, "ایمیل وارد شده معتبر نمیباشد");
  } else {
    setSuccess(email);
  }

  items.forEach((item) => {
    if (item.classList.contains("success")) {
      index++;
      if ((policy.checked === true && index === 5)) {
        messDiv.classList.add("active");
        codeInput.focus();
      }
    }
  });
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

const patternPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/;
function isPhone(phone) {
  return patternPhone.test(phone);
}

const patternEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email) {
  return patternEmail.test(email);
}

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

closeMess.addEventListener("click", () => {
  messDiv.classList.remove("active");
});

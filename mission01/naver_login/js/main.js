const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const userEmail = document.querySelector(".user-email-input");
const userPassword = document.querySelector(".user-password-input");
const loginForm = document.querySelector(".login-form");

// 1. email 정규표현식을 사용한 validation

function checkEmail() {
  let value = userEmail.value;
  if (!emailReg(value)) {
    userEmail.classList.add("is--invalid");
  } else {
    userEmail.classList.remove("is--invalid");
  }
}

userEmail.addEventListener("keydown", checkEmail);

// 2. pw 정규표현식을 사용한 validation

function checkPassword() {
  let value = userPassword.value;
  if (!pwReg(value)) {
    userPassword.classList.add("is--invalid");
  } else {
    userPassword.classList.remove("is--invalid");
  }
}

userPassword.addEventListener("keydown", checkPassword);

// 3. 상태 변수 관리
/*
범쌤 안녕하세요.. 상태 변수 관리가 무엇인지 잘 모르겠어요.. ㅠㅠ 
오늘도 화이팅입니다!
*/

// 4. 로그인 버튼을 클릭시 조건처리

function clickLogin(e) {
  e.preventDefault();
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    window.location.href = "welcome.html";
    // console.log("success");
  } else {
    alert("아이디와 비밀번호를 다시 확인해주세요.");
    // console.log("fail");
  }
}

loginForm.addEventListener("submit", clickLogin);

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

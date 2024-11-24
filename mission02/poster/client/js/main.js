/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const body = document.querySelector("body");
const navigation = document.querySelector("nav ul");
const text = document.querySelector(".nickName");
const img = document.querySelector(".visual img");

function setBgColor(color1, color2 = "#000") {
  body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
}

function setImage(imgName, imgAlt) {
  img.src = imgName;
  img.alt = imgAlt;
}

function setNameText(name) {
  text.textContent = name;
}

function handler(e) {
  e.preventDefault();

  const target = e.target.closest("li");
  const list = [...this.children];

  if (!target) return;

  const index = target.dataset.index;
  const dataIndex = data[index - 1];

  list.forEach((li) => li.classList.remove("is-active"));

  setBgColor(dataIndex.color[0], dataIndex.color[1]);

  setImage(`./assets/${dataIndex.name}.jpeg`, dataIndex.alt);

  setNameText(`${dataIndex.name}`);

  target.classList.add("is-active");
}

navigation.addEventListener("click", handler);

const careers = ["web devlopment", "react devloper", "fullstack devloper"];
const containerEl = document.querySelector(".container");
let careerIndex = 0;
let startIndex = 0;
updateIndex();

function updateIndex() {
  startIndex += 1;
  containerEl.innerHTML = `<h1> i am a ${careers[careerIndex].slice(
    0,
    startIndex
  )}</h1>`;

  setTimeout(() => {
    updateIndex();
    // console.log(startIndex);
    if (startIndex === careers[careerIndex].length) {
      careerIndex += 1;
      startIndex = 0;
    }

    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
  }, 400);
}

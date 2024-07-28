const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  // console.log(event);
  const xPosition = event.offsetX;
  const yPosition = event.offsetY;
  // console.log(xPosition, yPosition);
  const spanEl = document.createElement("span");
  spanEl.style.left = xPosition + "px";
  spanEl.style.top = yPosition + "px";
  const random = Math.random() * 100;
  // console.log(random);
  spanEl.style.width = random + "px";
  spanEl.style.height = random + "px";

  spanEl.style.size = setTimeout(() => {
    spanEl.remove();
  }, 2000);
  bodyEl.appendChild(spanEl);
});

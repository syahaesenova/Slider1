const topBtn = document.querySelector(".top-button");
const bottomBtn = document.querySelector(".bottom-button");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

topBtn.addEventListener("click", () => {
  moveSlide("top");
});
bottomBtn.addEventListener("click", () => {
  moveSlide("bottom");
});

function moveSlide(direction) {
  if (direction === "bottom") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "top") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
}

const images = document.querySelectorAll('.slider-img');
const leftarrow = document.querySelector('.left-arrow')
const rightarrow = document.querySelector('.right-arrow')
let currentIndex=0;

function showImg(index) {
  images.forEach((image, i) => {
      if (i === index) {
          image.style.display = 'block';
      } else {
          image.style.display = 'none';
      }
  });
}

function prevImg() {
  currentIndex--;
  if (currentIndex < 0) {
      currentIndex = images.length - 1;
  }
  showImg(currentIndex);
}

function nextImg() {
  currentIndex++;
  if (currentIndex >= images.length) {
      currentIndex = 0;
  }
  showImg(currentIndex);
}

leftarrow.addEventListener('click',prevImg);
rightarrow.addEventListener('click',nextImg);

showImg(currentIndex);
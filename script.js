const images = [
  {
    url: "https://picsum.photos/id/1015/900/550",
    title: "Mountain River"
  },
  {
    url: "https://picsum.photos/id/1016/900/550",
    title: "Beautiful Forest"
  },
  {
    url: "https://picsum.photos/id/1025/900/550",
    title: "Cute Dog"
  },
  {
    url: "https://picsum.photos/id/1035/900/550",
    title: "Green Mountains"
  },
  {
    url: "https://picsum.photos/id/1043/900/550",
    title: "Ocean View"
  }
];

let currentIndex = 0;
let slideInterval;

const mainImage = document.getElementById("mainImage");
const caption = document.getElementById("caption");
const thumbnails = document.getElementById("thumbnails");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

function showSlide(index) {
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = index;
  }

  mainImage.src = images[currentIndex].url;
  mainImage.alt = images[currentIndex].title;
  caption.textContent = images[currentIndex].title;

  const allThumbnails = document.querySelectorAll(".thumbnail");

  allThumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle("active", i === currentIndex);
  });
}

function createThumbnails() {
  images.forEach((image, index) => {
    const thumbnail = document.createElement("img");

    thumbnail.src = image.url;
    thumbnail.alt = image.title;
    thumbnail.classList.add("thumbnail");

    thumbnail.addEventListener("click", () => {
      showSlide(index);
    });

    thumbnails.appendChild(thumbnail);
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function previousSlide() {
  showSlide(currentIndex - 1);
}

function playSlideshow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

function pauseSlideshow() {
  clearInterval(slideInterval);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", previousSlide);
playBtn.addEventListener("click", playSlideshow);
pauseBtn.addEventListener("click", pauseSlideshow);

createThumbnails();
showSlide(0);

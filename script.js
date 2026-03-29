document.addEventListener("DOMContentLoaded", () => {

    const images = [
      "images/venue1.png",
      "images/venue2.png",
      "images/venue3.png",
      "images/venue4.png",
      "images/venue5.png",
      "images/venue6.png"
    ];
  
    let currentIndex = 0;
  
    const imgElement = document.getElementById("carouselImage");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
  
    if (!imgElement || !nextBtn || !prevBtn) {
      console.log("Carousel elements not found");
      return;
    }
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      imgElement.src = images[currentIndex];
    });
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      imgElement.src = images[currentIndex];
    });
  
  });
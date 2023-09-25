// JavaScript for Image Carousel

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const images = document.querySelectorAll(".carousel-image");

let currentIndex = 0;

// Show the first image initially
showImage(currentIndex);

// Event listener for the previous button
prevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

// Function to display the image at the given index
function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

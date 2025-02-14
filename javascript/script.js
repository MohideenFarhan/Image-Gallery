const sliderImg = document.getElementById("slider-img");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");
const galleryContainer = document.getElementById("gallery-container");
const galleryPrevBtn = document.getElementById("gallery-prev");
const galleryNextBtn = document.getElementById("gallery-next");

let images = [];
let index = 0;
let galleryIndex = 0;

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        images = data.map(product => product.image);
        if (images.length > 0) {
            sliderImg.src = images[0];
            updateGallery();
        }
    });

function showImage(n) {
    if (n < 0) index = images.length - 1;
    else if (n >= images.length) index = 0;
    else index = n;

    sliderImg.src = images[index];

    if (index < galleryIndex || index >= galleryIndex + 4) {
        galleryIndex = Math.floor(index / 4) * 4;
    }

    updateGallery(); 
}

function updateGallery() {
    galleryContainer.innerHTML = ""; 
    for (let i = galleryIndex; i < galleryIndex + 4 && i < images.length; i++) {
        const img = document.createElement("img");
        img.src = images[i];
        img.classList.add("gallery-img");

        if (i === index) {
            img.classList.add("active-img");
        }

        img.onclick = () =>{
            showImage(i);

        } 
        galleryContainer.appendChild(img);
    }
}

prevBtn.addEventListener("click", () => showImage(index - 1));
nextBtn.addEventListener("click", () => showImage(index + 1));

galleryNextBtn.addEventListener("click", () => {
    if (galleryIndex + 4 < images.length) {
        galleryIndex += 4;
        updateGallery();
        showImage(galleryIndex); 
    }
});

galleryPrevBtn.addEventListener("click", () => {
    if (galleryIndex - 4 >= 0) {
        galleryIndex -= 4;
        updateGallery();
        showImage(galleryIndex); 
    }
});

const sliderImg = document.getElementById("slider-img");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let images = [];
let index = 0;


fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        images = data.map((product) => product.image);
        
        if (images.length > 0) {
            sliderImg.src = images[0]; 
        }
    });


function showImage(n) {
    if (n < 0) index = images.length - 1;
    else if (n >= images.length) index = 0;
    else index = n;

    sliderImg.src = images[index];
}


prevBtn.addEventListener("click", () => showImage(index - 1));
nextBtn.addEventListener("click", () => showImage(index + 1));

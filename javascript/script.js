const images = document.querySelectorAll(".items img"); 
const lightbox = document.createElement("div");
const lightboxImg = document.createElement("img");
const prevBtn = document.createElement("div");
const nextBtn = document.createElement("div");

lightbox.classList.add("lightbox");
prevBtn.classList.add("fa-solid", "fa-arrow-left", "lightbox-prev");
nextBtn.classList.add("fa-solid", "fa-arrow-right", "lightbox-next");

lightbox.append(lightboxImg, prevBtn, nextBtn);
document.body.appendChild(lightbox);

let index = 0;

function showImage(n) {
    if (n < 0) index = images.length - 1;
    else if (n >= images.length) index = 0;
    else index = n;
    
    lightboxImg.src = images[index].src;
    lightbox.style.display = "block";
}

images.forEach((img, i) => img.addEventListener("click", () => showImage(i)));

prevBtn.addEventListener("click", () => showImage(index - 1));
nextBtn.addEventListener("click", () => showImage(index + 1));
lightbox.addEventListener("click", (e) => e.target === lightbox && (lightbox.style.display = "none"));

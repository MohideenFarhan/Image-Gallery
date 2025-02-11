const gallery = document.querySelector(".items"); 

const lightbox = document.createElement("div");
const lightboxImg = document.createElement("img");
const prevBtn = document.createElement("div");
const nextBtn = document.createElement("div");

lightbox.classList.add("lightbox");
prevBtn.classList.add( "lightbox-prev");
nextBtn.classList.add("lightbox-next");

lightbox.append(lightboxImg, prevBtn, nextBtn);
document.body.appendChild(lightbox);

let images=[]
let index = 0;

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((data) =>{
        images=data.map((product) => product.image);

        images.forEach((src,i)=>{
           const img=document.createElement("img");
            img.src=src;
            img.classList.add("gallery-img");
            img.addEventListener("click",()=>showImage(i));
            gallery.appendChild(img);
        });

});

function showImage(n) {
    if (n < 0) index = images.length - 1;
    else if (n >= images.length) index = 0;
    else index = n;
    
    lightboxImg.src = images[index];
    lightbox.style.display = "flex"; 
}

prevBtn.addEventListener("click", () => showImage(index - 1));
nextBtn.addEventListener("click", () => showImage(index + 1));

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
});


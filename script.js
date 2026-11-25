let imgEL = document.querySelector("img");

imgEL.addEventListener('mouseover', () => {
    imgEL.src = "logo2.png";
});

imgEL.addEventListener('mouseout', () => {
    imgEL.src = "logo.png";
});



const imageSwaps = {
    "bread.png": "gbprice.png",
    "calamari.png": "calamariprice.png",
    "salad.png": "saladprice.png",
    "pesto.png": "pestoprice.png",
    "rigatoni.png": "rigatoniprice.png",
    "sandwhich.png": "sandwhichprice.png"
};

document.querySelectorAll(".menu-container img").forEach((img) => {
    const originalSrc = img.getAttribute("src");
    const filename = originalSrc.split("/").pop();
    const priceImage = imageSwaps[filename];

    if (!priceImage) return;

    img.addEventListener("mouseenter", () => {
        img.src = priceImage;
    });

    img.addEventListener("mouseleave", () => {
        img.src = originalSrc;
    });
});

const townImage = document.querySelector('img[src="town.png"]');

if (townImage) {
    const originalSrc = townImage.getAttribute("src");

    townImage.addEventListener("mouseenter", () => {
        townImage.src = "oldcouple.png";
    });

    townImage.addEventListener("mouseleave", () => {
        townImage.src = originalSrc;
    });
}

let imgEL = document.querySelector("img");

imgEL.addEventListener('mouseover', () => {
    imgEL.src = "logo2.png";
});

imgEL.addEventListener('mouseout', () => {
    imgEL.src = "logo.png";
});
let index = 0;
function image() {
    const imagesLg = ["images/figure0-lg.webp", "images/figure1-lg.webp", "images/figure2-lg.webp"];
    const imagesSm = ["images/figure0-lg.webp", "images/figure1-lg.webp", "images/figure2-lg.webp"];
    const figureImageLg = imagesLg[index];
    const figureImageSm = imagesSm[index];
    document.documentElement.setAttribute("style", `--figureImageSm: url(${figureImageSm}); --figureImageLg: url(${figureImageLg});`);
}
image();

const element = document.querySelector("#container");
let timer;

element.addEventListener("mouseout", () => {
    index = index === 2 ? 0 : index + 1;
    clearTimeout(timer);
    timer = setTimeout(() => {
        image();
    }, 333);
});
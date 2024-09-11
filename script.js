let image= document.querySelector(".image");

let icon= document.querySelector("i");

image.addEventListener("dblclick", () => {
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    icon.style.opacity = 0.9;

    setTimeout(() => {
        icon.style.opacity = 0;
    },1500);
    setTimeout(() => {
        icon.style.transform = "translate(-50%, -50%) scale(0)";
    },2000);
})

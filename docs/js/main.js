function togglePixelFont() {
    const htmlTag = document.getElementsByTagName("html")[0];
    pixelFontToggle = document.getElementById("pixelfont-toggle");
    if (htmlTag.hasAttribute("data-theme")) {
        if (typeof(Storage) !== "undefined") {
            sessionStorage.pixelFontToggle = 0;
        }
        htmlTag.removeAttribute("data-theme");
        pixelFontToggle.classList.add("text-gray");
        pixelFontToggle.classList.remove("text-light");
        return
    }
    htmlTag.setAttribute("data-theme", "pixel")
    pixelFontToggle.classList.add("text-light");
    pixelFontToggle.classList.remove("text-gray");
    if (typeof(Storage) !== "undefined") {
        sessionStorage.pixelFontToggle = 1;
    }
}

function setPixelFont(){
    if (typeof(Storage) !== "undefined" && sessionStorage.pixelFontToggle) {
        const htmlTag = document.getElementsByTagName("html")[0];
        pixelFontToggle = document.getElementById("pixelfont-toggle");
        if (Number(sessionStorage.getItem("pixelFontToggle")) === 1) {
            pixelFontToggle.classList.add("text-light");
            pixelFontToggle.classList.remove("text-gray");
            htmlTag.setAttribute("data-theme", "pixel");
        }
        else {
            htmlTag.removeAttribute("data-theme");
	        pixelFontToggle.classList.add("text-gray");
            pixelFontToggle.classList.remove("text-light");
        }
    }
}

document.getElementById("pixelfont-toggle").addEventListener("click", togglePixelFont);

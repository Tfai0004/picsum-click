let img = null;

function getRandomId(min=100, max=500) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getPicsumUrl(id) {
    return `https://picsum.photos/id/${id}/200/300`;
}

function onImgLoad() {
    if (img != null)
    {
        document.getElementById("main").appendChild(img);
        img = null;
    }
}

function onImgError() {
    alert("No image could be loaded. Please click again.");
}

function createImgElement(src) {
    let elem = document.createElement("IMG");
    elem.src = src;
    elem.alt = "random img";
    elem.addEventListener("load", onImgLoad);
    elem.addEventListener("error", onImgError);
    return elem;
}

function onBodyClick() {
    img = createImgElement(getPicsumUrl(getRandomId()));
}

function onLoad() {
    document.body.addEventListener("click", onBodyClick);
}

window.addEventListener('DOMContentLoaded', onLoad);

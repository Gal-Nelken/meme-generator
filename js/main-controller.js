'use strict'

function init() {
    renderImgs();
}


function renderImgs() {
    const elGallery = document.querySelector('.gallery-container');
    const imgs = getImgs();
    var strHTMLs = imgs.map(img => {
        return `
        <img src="${img.url}" alt="" onclick="onSelectImg(this)" data-id="${img.id}">
        `
    });
    elGallery.innerHTML = strHTMLs.join('');
}


function onSelectImg(elImg) {
    let imgId = elImg.getAttribute('data-id');
    memeGene(imgId);
}



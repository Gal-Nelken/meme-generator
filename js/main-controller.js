'use strict'

var gIsOpenMenu = false;

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

function toggleScreen() {
    if (gIsOpenMenu) toggleMenu();
}

function toggleMenu() {
    const elMainNav = document.querySelector('.main-nav-links');
    const elScreen = document.querySelector('.main-screen');
    const elBody = document.querySelector('body');
    const elMainBtn = document.querySelector('.main-nav-btn');
    if (!gIsOpenMenu) {
        gIsOpenMenu = true;
        elMainNav.style.transform = 'translateY(0)';
        elScreen.style.display = 'block';
        elMainBtn.innerHTML = 'X';
        elBody.style.overflow = 'hidden';
    } else {
        gIsOpenMenu = false;
        elMainNav.style.transform = 'translateY(-120%)';
        elScreen.style.display = 'none';
        elMainBtn.innerText = '☰';
        elBody.style.overflow = 'visible';
    }
}



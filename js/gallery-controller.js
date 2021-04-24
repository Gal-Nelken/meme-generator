'use strict'

function init() {
    renderImgs();
}


function renderImgs() {
    const elGallery = document.querySelector('.gallery-container');
    const imgs = getImgs();
    var strHTMLs = imgs.map(img => {
        return `
        <a href="#meme-box">
<img src="${img.url}" alt="" onclick="onSelectImg(this)" data-id="${img.id}">
</a>
`
    });
    elGallery.innerHTML = strHTMLs.join('');
}


function onSelectImg(elImg) {
    let imgId = elImg.getAttribute('data-id');
    memeGene(imgId);
}

function toggleScreen() {
    let gallery = getGalleryInfo()
    if (gallery.isNavMenuOpen) toggleMenu();
}

function toggleMenu() {
    const elMainNav = document.querySelector('.main-nav-links');
    const elScreen = document.querySelector('.main-screen');
    const elBody = document.querySelector('body');
    const elMainBtn = document.querySelector('.main-nav-btn');
    let gallery = getGalleryInfo()
    if (!gallery.isNavMenuOpen) {
        gallery.isNavMenuOpen = true;
        elMainNav.style.transform = 'translateY(0)';
        elScreen.style.display = 'block';
        elMainBtn.innerHTML = 'X';
        elBody.style.overflow = 'hidden';
    } else {
        gallery.isNavMenuOpen = false;
        elMainNav.style.transform = 'translateY(-100%)';
        elScreen.style.display = 'none';
        elMainBtn.innerText = '☰';
        elBody.style.overflow = 'visible';
    }
}

// // TODO: LET USER ADD IMAGE
// function onAddImg (elAddImg) {
//   let elImg =  createNewImage(elAddImg);
//   onSelectImg(elImg)
// }

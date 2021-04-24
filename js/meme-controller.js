'use strict'

const gElMemeBox = document.querySelector('.meme-box');
const gElGallery = document.querySelector('.gallery-container');
const gElCanvas = document.getElementById('my-canvas');
const gCtx = gElCanvas.getContext('2d');

function memeGene(id) {
    gElGallery.style.display = 'none';
    gElMemeBox.style.display = 'block';
    setMemeImg(id);
    renderMeme();
}



function renderMeme() {
    const meme = getMeme(gElCanvas);
    const img = getImg(meme.selectedImgId);
    const elImg = new Image();
    elImg.src = img.url;
    elImg.onload = () => {
        let canvasNewHeight = (elImg.width * gElCanvas.width) / elImg.width;
        gElCanvas.height = canvasNewHeight;
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, canvasNewHeight);
        drawText(meme);
    }
    isNewMeme(false);
    isLinesRemain(meme);
    
}

function drawText(meme) {
    meme.lines.map(line => {
        gCtx.strokeStyle = line.strokeColor;
        gCtx.fillStyle = line.fillColor;
        gCtx.lineWidth = 2;
        gCtx.font = `${line.fontSize}px ${line.fontFamily}`;
        gCtx.textAlign = line.align;
        gCtx.strokeText(line.txt, line.x, line.y, gElCanvas.width);
        if (line.isFill) gCtx.fillText(line.txt, line.x, line.y, gElCanvas.width);
    });
}

function onChangeTxt(txt) {
    changeTxt(txt);
    renderMeme();
}

function onChangeStrokeColor(color) {
    setStrokeColor(color);
    renderMeme();
}

function onChangeFillColor(color) {
    setFillColor(color);
    renderMeme();
}

function onFillTxt() {
    isFillTxt();
    renderMeme();
}

function onChangeTxtSize(num) {
    ChangeTxtSize(num);
    renderMeme();
}


function onChangeFontSize(num) {
    ChangeTxtSize(num);
    renderMeme();
}

function onAlignTxt(align) {
    setAlignTxt(align);
    renderMeme();
}

function onSetLineX(num) {
    setLineX(num);
    renderMeme();
}
function onSetLineY(num) {
    setLineY(num);
    renderMeme();
}

function onSwitchLines() {
    switchLines();
    renderMeme();
}

function onAddLine() {
    addLine();
    renderMeme();
}

function onRemoveLine() {
    removeLine();
    renderMeme();
}

function onSelectFont (fontFamily){
    setFontFamily(fontFamily)
    renderMeme();
}


function isLinesRemain(meme) {
    const elTrash = document.querySelector('.remove-line-btn');
    if (meme.lines.length > 0) {
        elTrash.style.backgroundColor = '#DA2E37';
    } else elTrash.style.backgroundColor = 'gray';
}

function downloadMeme(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme.jpg';
}

function closeMemeEdit() {
    const meme = getMeme();
    meme.lines.splice(0, meme.lines.length);
    gElGallery.style.display = 'grid';
    gElMemeBox.style.display = 'none';
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    isNewMeme(true);
}

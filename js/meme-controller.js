'use strict'

const gElCanvasContainer = document.querySelector('.meme-container');
const gElCanvas = document.getElementById('my-canvas');
const gCtx = gElCanvas.getContext('2d');


function memeGene(id) {
    gElCanvasContainer.style.transform = 'translateY(0)';
    setMemeImg(id);
    renderMeme();
}



function renderMeme() {
    const meme = getMeme();
    const img = getImg(meme.selectedImgId);
    const elImg = new Image();
    elImg.src = img.url;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0);
        drawText(meme);
    }
    console.log(meme.isNewMeme);
    isNewMeme(false);
}

function drawText(meme) {
    meme.lines.map(line => {
        gCtx.strokeStyle = line.strokeColor;
        gCtx.fillStyle = line.fillColor;
        gCtx.lineWidth = 1;
        gCtx.font = `${line.fontSize}px impact`;
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

function downloadMeme(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme.jpg';
}

function closeMemeEdit() {
    gElCanvasContainer.style.transform = 'translateY(-100%)';
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    isNewMeme(true);
}


'use strict'

const KEY = 'meme';
const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    isNewMeme: false,

    lines: [
        {
            isFill: false,
            txt: 'your text',
            fontSize: 30,
            align: 'center',
            strokeColor: 'gray',
            fillColor: 'white',
            x: 200,
            y: 50
        },
        {
            isFill: true,
            txt: 'Bla Bla Bla',
            fontSize: 50,
            align: 'center',
            strokeColor: 'green',
            fillColor: 'blue',
            x: 200,
            y: 350
        }
    ]
    }


function setMemeImg(id) {
    gMeme.selectedImgId = id;
}

// ---  MEME FEATURES ---

function changeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function ChangeTxtSize(num) {
    if (gMeme.lines[gMeme.selectedLineIdx].fontSize < 2 && num < 0) return
    if (gMeme.lines[gMeme.selectedLineIdx].fontSize > 119 && num > 0) return
    gMeme.lines[gMeme.selectedLineIdx].fontSize += num;
}

function setAlignTxt(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align;
}

function setLineX(num) {
    gMeme.lines[gMeme.selectedLineIdx].x += num
}

function setLineY(num) {
    gMeme.lines[gMeme.selectedLineIdx].y += num
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color;
}

function isFillTxt() {
    const elFill = document.querySelector('.text-fill');
    if (!gMeme.lines[gMeme.selectedLineIdx].isFill) {
        gMeme.lines[gMeme.selectedLineIdx].isFill = true;
        elFill.style.backgroundColor = 'red';
    }
    else {
        gMeme.lines[gMeme.selectedLineIdx].isFill = false;
        elFill.style.backgroundColor = '#FFFFFF';
    }
}

function switchLines() {
    gMeme.selectedLineIdx += 1;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0;
    renderMeme();
}

function addLine() {
    gMeme.lines.push({
        isFill: false,
        txt: 'this is a new line',
        fontSize: 35,
        align: 'center',
        strokeColor: 'black',
        fillColor: 'white',
        x: 200,
        y: 200
    });
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    switchLines()
}



function getMeme() {
    if (gMeme.isNewMeme === true && gMeme.lines.length < 1) {
        gMeme.lines.push({
            isFill: false,
            txt: 'your text',
            fontSize: 30,
            align: 'center',
            strokeColor: 'gray',
            fillColor: 'white',
            x: 200,
            y: 50
        },
            {
                isFill: true,
                txt: 'Bla Bla Bla',
                fontSize: 50,
                align: 'center',
                strokeColor: 'green',
                fillColor: 'blue',
                x: 200,
                y: 350
            });
    }
    return gMeme;
}

function isNewMeme(bollean) {
    gMeme.isNewMeme = bollean;
}
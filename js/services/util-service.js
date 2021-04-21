'use strict'

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function imgSize(img){
    const myImg = document.querySelector(img);
    let size = {
        height: myImg.naturalHeight,
        Width: myImg.naturalWidth
    }
    return size;
  
}
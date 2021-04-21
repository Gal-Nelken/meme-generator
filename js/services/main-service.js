'use strict'

var gImgs = [
    { id: makeId(), url: '../img/1.jpg', keywords: ['politics', 'trump'] },
    { id: makeId(), url: '../img/2.jpg', keywords: ['house', 'friendship', 'love', 'dogs', 'animals', 'cute'] },
    { id: makeId(), url: '../img/3.jpg', keywords: ['friendship', 'baby', 'dogs', 'house', 'sleep', 'animals', 'cute'] },
    { id: makeId(), url: '../img/4.jpg', keywords: ['sleep', 'cats', 'house', 'animals', 'cute'] },
    { id: makeId(), url: '../img/5.jpg', keywords: ['success', 'baby', 'cute'] },
    { id: makeId(), url: '../img/6.jpg', keywords: ['tv', 'science'] },
    { id: makeId(), url: '../img/7.jpg', keywords: ['cute', 'baby'] },
    { id: makeId(), url: '../img/8.jpg', keywords: ['tv', 'almost'] },
    { id: makeId(), url: '../img/9.jpg', keywords: ['happy', 'baby', 'funny'] },
    { id: makeId(), url: '../img/10.jpg', keywords: ['politics', 'happy', 'funny', 'obama'] },
    { id: makeId(), url: '../img/11.jpg', keywords: ['love', 'friendship', 'happy'] },
    { id: makeId(), url: '../img/12.jpg', keywords: ['tv', 'almost'] },
    { id: makeId(), url: '../img/13.jpg', keywords: ['tv', 'happy', 'success', 'cheers', 'congrats'] },
    { id: makeId(), url: '../img/14.jpg', keywords: ['tv', 'matrix'] },
    { id: makeId(), url: '../img/15.jpg', keywords: ['tv', 'game of thrones', 'almost'] },
    { id: makeId(), url: '../img/16.jpg', keywords: ['happy', 'funny', 'tv', 'science'] },
    { id: makeId(), url: '../img/17.jpg', keywords: ['politics', 'success'] },
    { id: makeId(), url: '../img/18.jpg', keywords: ['friendship', 'cartoons', 'dream', 'tv'] },
    { id: makeId(), url: '../img/19.jpg', keywords: [''] },
    { id: makeId(), url: '../img/20.jpg', keywords: [''] },
];

var gKeywords = {
    'happy': 10,
    'animals': 7,
    'dogs': 7,
    'cats': 4,
    'funny': 10,
    'cartoons': 3,
    'friendship': 8,
    'trump': 1,
    'house': 4,
    'baby': 4,
    'politics': 4,
    'cute': 4,
    'cheers': 4,
    'love': 4,
    'tv': 4,
    'sleep': 2,
    'congrats': 1,
    'obama': 1,
    'science': 1,
    'success': 1,
    'dream': 1,
    'almost': 6,
    'matrix': 3,
    'game of thrones': 3,
}


function getImgs (){
    return gImgs;
}

function getImg(imgId) {
    return gImgs.find(img => img.id === imgId);
}


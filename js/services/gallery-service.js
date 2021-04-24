'use strict'

const gGallery = {
    isNavMenuOpen: false,
}

const gImgs = [
    { id: makeId(), url: 'img/1.jpg', keywords: ['all','politics', 'trump'] },
    { id: makeId(), url: 'img/2.jpg', keywords: ['all','house', 'friendship', 'love', 'dogs', 'animals', 'cute'] },
    { id: makeId(), url: 'img/3.jpg', keywords: ['all','friendship', 'baby', 'dogs', 'house', 'sleep', 'animals', 'cute'] },
    { id: makeId(), url: 'img/4.jpg', keywords: ['all','sleep', 'cats', 'house', 'animals', 'cute'] },
    { id: makeId(), url: 'img/5.jpg', keywords: ['all','success', 'baby', 'cute'] },
    { id: makeId(), url: 'img/6.jpg', keywords: ['all','tv', 'science'] },
    { id: makeId(), url: 'img/7.jpg', keywords: ['all','cute', 'baby'] },
    { id: makeId(), url: 'img/8.jpg', keywords: ['all','tv', 'almost'] },
    { id: makeId(), url: 'img/9.jpg', keywords: ['all','happy', 'baby', 'funny'] },
    { id: makeId(), url: 'img/10.jpg', keywords: ['all','politics', 'happy', 'funny', 'obama'] },
    { id: makeId(), url: 'img/11.jpg', keywords: ['all','love', 'friendship', 'happy'] },
    { id: makeId(), url: 'img/12.jpg', keywords: ['all','tv', 'almost'] },
    { id: makeId(), url: 'img/13.jpg', keywords: ['all','tv', 'happy', 'success', 'cheers', 'congrats'] },
    { id: makeId(), url: 'img/14.jpg', keywords: ['all','tv', 'matrix'] },
    { id: makeId(), url: 'img/15.jpg', keywords: ['all','tv', 'game of thrones', 'almost'] },
    { id: makeId(), url: 'img/16.jpg', keywords: ['all','happy', 'funny', 'tv', 'science'] },
    { id: makeId(), url: 'img/17.jpg', keywords: ['all','politics', 'success'] },
    { id: makeId(), url: 'img/18.jpg', keywords: ['all','friendship', 'cartoons', 'dream', 'tv'] },
    { id: makeId(), url: 'img/19.jpg', keywords: ['all',''] },
    { id: makeId(), url: 'img/20.jpg', keywords: ['all',''] },
];

const gKeywords = {
    'all': 10,
    'happy': 8,
    'animals': 7,
    'dogs': 7,
    'cats': 4,
    'funny': 9,
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


function getGalleryInfo() {
    return gGallery;
}

function getImgs() {
    return gImgs;
}

function getImg(imgId) {
    return gImgs.find(img => img.id === imgId);
}

// function createNewImage(elAddImg) {
//     elAddImg.addEventListener ('click', function () {
//         let reader = new FileReader ();
//         reader.onload = function (){
//             let img = new Image;
//             img.src = reader.result;
//            gImgs.push({
//              id: makeId(),
//               url: img.src,
//                keywords: ['']
//            })
//         } 
//         reader.readAsDataURL(imageInput.files[0]);
//        })
//        return gImgs[gImgs.length - 1];
// }




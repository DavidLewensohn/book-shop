'use strict'

function makeId(length = 4) {
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt +=  getRandomIntInclusive(0, 9)
    }
    return txt
}

function makeLorem(wordCount = 3) {
    const words = ['the', 'sky', 'above', 'port', 'was', 'color' ,'of', 'television', 'tuned', 'to', 'a' ,'dead ' ,'channel',  'all', 'this' ,' happened', 'more', 'less',  'the' ,' story', 'bit ' ,'by ', 'from' ,' various ' ,'people', 'and', 'as ' ,'generally', 'happens', 'in ' ,'such ' ,'cases', 'each time', 'it', 'was', 'a different ' ,'story',  'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    txt =  txt[0].toUpperCase() + txt.slice(1)
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}
'use strict'

function saveToStorage(storageKey, value) {
    localStorage.setItem(storageKey, JSON.stringify(value))
}

function loadFromStorage(storageKey){
    var value = localStorage.getItem(storageKey)
    return JSON.parse(value)
}
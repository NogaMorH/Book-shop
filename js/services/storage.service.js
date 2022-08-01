'use strict'

// function saveToStorage(key, val) {
//     localStorage.setItem(key, JSON.stringify(val))
// }

// function loadFromStorage(key) {
//     var val = localStorage.getItem(key)
//     return JSON.parse(val)
// }

function saveToStorage(key, val) {
    const str = JSON.stringify(val)
    localStorage.setItem(key, str)
}

function loadFromStorage(key) {
    const str = localStorage.getItem(key)
    const val = JSON.parse(str)
    return val
}

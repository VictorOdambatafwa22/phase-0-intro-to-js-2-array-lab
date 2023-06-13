// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    cats.push(cat)
}

function destructivelyPrependCat(cat) {
    cats.unshift(cat)
}

function destructivelyRemoveLastCat(cat) {
    cats.pop(cat)
}

function destructivelyRemoveFirstCat(cat) {
    cats.shift(cat)
}

function appendCat(cat) {
    const newcats=[...cats]
    newcats.push(cat)
    return newcats
}

function prependCat(cat) {
    const newcats=[...cats]
    newcats.unshift(cat)
    return newcats
}

function removeLastCat(cat) {
    const newcats=[...cats]
    newcats.pop(cat)
    return newcats
}

function removeFirstCat(cat) {
    const newcats=[...cats]
    newcats.shift(cat)
    return newcats
}
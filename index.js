const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const newCat = [...cats, name];
    return newCat;
}

function prependCat(name) {
    const newCat = [name, ...cats];
    return newCat;
}

function removeLastCat() {
    const newCat = [...cats];
    newCat.pop();
    return newCat;
}

function removeFirstCat() {
    const newCat = [...cats];
    newCat.shift();
    return newCat;
}
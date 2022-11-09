export const aLength = (array) => {
    let cont = 0;
    for (let i = 0; array[i] !== undefined; i++) {
        cont++;
    }
    return cont;
};

export const aPush = (array, item) => {
    array[aLength(array)] = item;
    return aLength(array);
};

export const aPop = (array) => {
    let lastElem = array[aLength(array) - 1];
    array.aLength = array.aLength - 1;
    return lastElem;
};

export const aIndexOf = (array, item) => {
    for (let i = 0; i < aLength(array); i++) {
        if (array[i] === item) {
            return i;
        }
    }
};

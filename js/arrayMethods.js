export const aLength = (array) => {
    let cont = 0;
    for (let i = 0; array[i] !== undefined || null; i++) {
        cont++;
    }
    return cont;
};

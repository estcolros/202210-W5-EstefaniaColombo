import { aLength, aPush, aPop, aIndexOf } from "./arrayMethods";

describe("Given array length function", () => {
    const testLength = ["e", "s", "t", "e", "f", "a", "n", "i", "a", null, NaN];
    test(`When it is run ${testLength}, the length of the array should be ${testLength.length}`, () => {
        const result = aLength(testLength);
        const expectResult = testLength.length;
        expect(result).toBe(expectResult);
    });
});

describe("Given array push function", () => {
    const testPush = [1, 2, 3];
    const expectResult = [1, 2, 3, 13];
    test(`Given array ${testPush}, expected length of ${aLength(
        expectResult
    )}`, () => {
        aPush(testPush, 13);
        expect(testPush).toStrictEqual(expectResult);
    });
});

describe("Given array pop function", () => {
    const testPop = [1, 2, 3, "four"];
    const expectResult = "four";
    test(`When the pop method is executed, the last element ${testPop} of the array is removed ${expectResult}`, () => {
        expect(aPop(testPop)).toBe(expectResult);
    });
});

describe("Given array indexOf function", () => {
    const testIndexOf = [1, 2, 3];
    const expectResult = 2;
    test(`When the array parameter is ${testIndexOf[2]}, the index result has the value of ${expectResult}`, () => {
        const result = aIndexOf(testIndexOf, 3);
        expect(result).toBe(expectResult);
    });
});

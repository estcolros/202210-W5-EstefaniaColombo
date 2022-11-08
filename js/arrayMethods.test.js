import { aLength } from "./arrayMethods";

describe("Given length function", () => {
    describe("When it is run estefania", () => {
        test("Then it should return estefania.length", () => {
            const name = [8];
            const result = aLength(name);
            expect(result).toBe(name.length);
        });
    });
});

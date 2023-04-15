import { BaseAlgorithm } from "./base";

export class PlayFair implements BaseAlgorithm {
    init() {}

    encrypt(plainText: string, key: string): string {
        console.log("::: PlayFair Encrypt :::");

        if (!this.isValidKey(key)) {
            throw new Error("Play Fair: Invalid format string of key");
        }

        if (!this.isValidKey(plainText)) {
            throw new Error("Play Fair: Only allowed alphabet");
        }

        const keyMatrix = this.generateMatrixKey(key);
        const strProcessed = this.pre(plainText);

        console.log(keyMatrix);

        const result = [];

        for (const strArr of strProcessed) {
            const [first, second] = strArr;
            const row = [];
            const firstPosition = this.searchMatrix(
                first.toUpperCase(),
                keyMatrix
            );
            const secondPosition = this.searchMatrix(
                second.toUpperCase(),
                keyMatrix
            );

            const isUpperFirst = first === first.toUpperCase();
            const isUpperSecond = second === second.toUpperCase();

            if (firstPosition.row === secondPosition.row) {
                firstPosition.col =
                    firstPosition.col === 4 ? 0 : firstPosition.col + 1;
                secondPosition.col =
                    secondPosition.col === 4 ? 0 : secondPosition.col + 1;
            } else if (firstPosition.col === secondPosition.col) {
                firstPosition.row =
                    firstPosition.row === 4 ? 0 : firstPosition.row + 1;
                secondPosition.row =
                    secondPosition.row === 4 ? 0 : secondPosition.row + 1;
            } else {
                const firstCol = firstPosition.col;
                const secondCol = secondPosition.col;
                firstPosition.col = secondCol;
                secondPosition.col = firstCol;
            }
            const newStrFirst = isUpperFirst
                ? keyMatrix[firstPosition.row][firstPosition.col]
                : keyMatrix[firstPosition.row][
                      firstPosition.col
                  ].toLocaleLowerCase();
            const newStrSecond = isUpperSecond
                ? keyMatrix[secondPosition.row][secondPosition.col]
                : keyMatrix[secondPosition.row][
                      secondPosition.col
                  ].toLocaleLowerCase();
            row.push([newStrFirst, newStrSecond]);
            result.push(row);
        }

        return result.flat(2).join("");
    }
    decrypt(cipherText: string, key: string): string {
        console.log("::: PlayFair Decrypt :::");

        if (!this.isValidKey(key)) {
            throw new Error("Play Fair: Invalid format string of key");
        }

        if (!this.isValidKey(cipherText)) {
            throw new Error("Play Fair: Only allowed alphabet");
        }

        const keyMatrix = this.generateMatrixKey(key);
        const strProcessed = this.pre(cipherText);

        const result = [];

        for (const strArr of strProcessed) {
            const [first, second] = strArr;
            const row = [];
            const firstPosition = this.searchMatrix(
                first.toUpperCase(),
                keyMatrix
            );
            const secondPosition = this.searchMatrix(
                second.toUpperCase(),
                keyMatrix
            );

            const isUpperFirst = first === first.toUpperCase();
            const isUpperSecond = second === second.toUpperCase();

            if (firstPosition.row === secondPosition.row) {
                firstPosition.col =
                    firstPosition.col === 0 ? 4 : firstPosition.col - 1;
                secondPosition.col =
                    secondPosition.col === 0 ? 4 : secondPosition.col - 1;
            } else if (firstPosition.col === secondPosition.col) {
                firstPosition.row =
                    firstPosition.row === 0 ? 4 : firstPosition.row - 1;
                secondPosition.row =
                    secondPosition.row === 0 ? 4 : secondPosition.row - 1;
            } else {
                const firstCol = firstPosition.col;
                const secondCol = secondPosition.col;
                firstPosition.col = secondCol;
                secondPosition.col = firstCol;
            }
            const newStrFirst = isUpperFirst
                ? keyMatrix[firstPosition.row][firstPosition.col]
                : keyMatrix[firstPosition.row][
                      firstPosition.col
                  ].toLocaleLowerCase();
            const newStrSecond = isUpperSecond
                ? keyMatrix[secondPosition.row][secondPosition.col]
                : keyMatrix[secondPosition.row][
                      secondPosition.col
                  ].toLocaleLowerCase();
            row.push([newStrFirst, newStrSecond]);
            result.push(row);
        }

        return result.flat(2).join("");
    }

    generateMatrixKey(key: string) {
        const keyArr = key.toUpperCase().split("");
        const base = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
        const matrix = [];
        let indexKey = 0;
        for (let i = 0; i < 5; i++) {
            const row = [];
            for (let j = 0; j < 5; j++) {
                let isLoop = true;
                if (indexKey === keyArr.length) {
                    const newStr = base.splice(0, 1)[0];
                    if (newStr === "J") {
                        continue;
                    }

                    if (newStr === "I") {
                        base.splice(0, 1);
                    }
                    row.push(newStr);
                    continue;
                }
                while (isLoop) {
                    const charKey = keyArr[indexKey];
                    if (indexKey === keyArr.length) {
                        isLoop = false;
                        break;
                    }
                    const indexRemove = base.findIndex(
                        (baseStr) => baseStr === charKey
                    );
                    if (indexRemove === -1) {
                        ++indexKey;
                        continue;
                    } else if (["I", "J"].includes(charKey)) {
                        const indexI = base.findIndex(
                            (baseStr) => baseStr === "I"
                        );
                        base.splice(indexI, 2);
                        row.push(charKey);
                        ++indexKey;
                        isLoop = false;
                        continue;
                    }
                    const newStr = base.splice(indexRemove, 1)[0];
                    row.push(newStr);
                    ++indexKey;
                    isLoop = false;
                }
            }
            matrix.push(row);
        }

        return matrix;
    }

    pre(input: string) {
        const inputArr = input.split("");
        const result = [];
        while (inputArr.length) {
            if (inputArr.length === 1) {
                result.push([inputArr[0], "X"]);
                break;
            }
            const newArr = inputArr.splice(0, 2);
            if (newArr[0] === newArr[1]) {
                result.push([newArr[0], "X"]);
                inputArr.unshift(newArr[0]);
                continue;
            }

            result.push(newArr);
        }

        return result;
    }

    searchMatrix(char: string, matrix: string[][]) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (
                    matrix[i][j] === char ||
                    (["I", "J"].includes(matrix[i][j]) &&
                        ["I", "J"].includes(char))
                ) {
                    return {
                        col: j,
                        row: i,
                    };
                }
            }
        }

        return {
            row: -1,
            col: -1,
        };
    }

    isValidKey(k: string): boolean {
        return /^[a-zA-Z]+$/.test(k);
    }
}

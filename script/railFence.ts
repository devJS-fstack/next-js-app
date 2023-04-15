import { BaseAlgorithm } from "./base";

export class RailFence implements BaseAlgorithm {
    init() {}

    encrypt(pt: string, k: number): string {
        console.log("::: Rail Fence Encrypt :::");

        if (!this.isValidKey(k)) {
            throw new Error("Rail Fence: Invalid format number of key");
        }

        const rail = new Array(k)
            .fill("")
            .map(() => new Array(pt.length).fill("\n"));

        let dirDown = false;
        let row = 0;
        let col = 0;

        for (let i = 0; i < pt.length; i++) {
            if (row === 0 || row === k - 1) {
                dirDown = !dirDown;
            }

            rail[row][col++] = pt[i];
            dirDown ? row++ : row--;
        }

        let result = "";
        for (let i = 0; i < k; i++) {
            for (let j = 0; j < pt.length; j++) {
                if (rail[i][j] != "\n") {
                    result += rail[i][j];
                }
            }
        }

        return result;
    }

    decrypt(ct: string, k: number): string {
        console.log("::: Rail Fence Decrypt :::");

        if (!this.isValidKey(k)) {
            throw new Error("Rail Fence: Invalid format number of key");
        }

        const rail = new Array(k)
            .fill("")
            .map(() => new Array(ct.length).fill("\n"));

        let dirDown = false;
        let row = 0;
        let col = 0;

        for (let i = 0; i < ct.length; i++) {
            if (row === 0 || row === k - 1) {
                dirDown = !dirDown;
            }

            rail[row][col++] = "*";
            dirDown ? row++ : row--;
        }

        let index = 0;
        for (let i = 0; i < k; i++) {
            for (let j = 0; j < ct.length; j++) {
                if (rail[i][j] == "*" && index < ct.length) {
                    rail[i][j] = ct[index++];
                }
            }
        }

        let result = "";
        row = 0;
        col = 0;
        dirDown = false;
        for (let i = 0; i < ct.length; i++) {
            if (row === 0 || row === k - 1) {
                dirDown = !dirDown;
            }

            result += rail[row][col++];
            dirDown ? row++ : row--;
        }

        return result;
    }

    generateMatrix(t: string, k: number) {
        const matrix = [];
        let iStr = 0;
        const tArr = t.split("");
        while (iStr < tArr.length) {
            const row = [];
            for (let i = 0; i < k; i++) {
                row.push(tArr[iStr]);
                ++iStr;
            }

            matrix.push(row);
        }

        return matrix;
    }

    isValidKey(k: number): boolean {
        return /^[\d]+$/.test(k.toString()) && k != 0;
    }
}

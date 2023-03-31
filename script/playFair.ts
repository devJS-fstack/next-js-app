import { BaseAlgorithm } from "./base";

export class PlayFair implements BaseAlgorithm {
    private BASE_STORE: string[] = [];

    init() {
        this.BASE_STORE = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    }

    encrypt(plainText: string, key: string): string {
        console.log("::: PlayFair Encrypt :::");

        if (!this.isValidKey(key)) {
            throw new Error("PlayFair: Invalid format string of key");
        }

        const keyTest = this.generateMatrixKey(key);
        console.log(keyTest);
        return plainText;
    }
    decrypt(cipherText: string, key: string): string {
        return cipherText;
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
                        (baseStr) => baseStr === charKey,
                    );
                    if (indexRemove === -1) {
                        ++indexKey;
                        continue;
                    } else if (["I", "J"].includes(charKey)) {
                        const indexI = base.findIndex(
                            (baseStr) => baseStr === "I",
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

    isValidKey(k: string): boolean {
        return /^[a-zA-Z]+$/.test(k);
    }
}

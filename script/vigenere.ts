import { toNumber } from "lodash";
import { BaseAlgorithm } from "./base";

export class Vigenere implements BaseAlgorithm {
    private BASE_STORE: any = [];
    private base = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    init() {
        this.BASE_STORE.push(["", ...this.base]);
        for (let i = 0; i < this.base.length; i++) {
            const newBase = [
                ...this.base.slice(i, 26),
                ...this.base.slice(0, i),
            ];
            this.BASE_STORE.push([this.base[i], ...newBase]);
        }
    }
    encrypt(plainText: string, key: string): string {
        const ptArr = plainText.split("");
        const keyArr = key.split("");
        const result = [];
        console.log("::: Vigenere Encrypt :::");

        if (!this.isValidKey(key)) {
            throw new Error("Vigenere: Invalid format string of key");
        }

        let iKey = -1;

        for (let i = 0; i < ptArr.length; i++) {
            ++iKey;
            const str = ptArr[i].toUpperCase();
            const strKey = keyArr[iKey].toUpperCase();
            const isUpper = str === ptArr[i];
            const indexKey =
                this.base.findIndex((baseStr) => baseStr === strKey) + 1;
            const indexStr =
                this.base.findIndex((baseStr) => baseStr === str) + 1;

            if (iKey === keyArr.length - 1) {
                iKey = -1;
            }
            if (indexStr === 0) {
                result.push(str);
                continue;
            }

            const newStr = this.BASE_STORE[indexStr][indexKey];
            result.push(isUpper ? newStr : newStr.toLowerCase());
        }

        return result.join("");
    }
    decrypt(cipherText: string, key: string): string {
        const ctArr = cipherText.split("");
        const keyArr = key.split("");
        const result = [];
        console.log("::: Vigenere Decrypt :::");

        if (!this.isValidKey(key)) {
            throw new Error("Vigenere: Invalid format string of key");
        }

        let iKey = -1;

        for (let i = 0; i < ctArr.length; i++) {
            ++iKey;
            const str = ctArr[i].toUpperCase();
            const strKey = keyArr[iKey].toUpperCase();
            const isUpper = str === ctArr[i];
            const indexKey =
                this.base.findIndex((baseStr) => baseStr === strKey) + 1;
            let indexStr = this.BASE_STORE[indexKey].findIndex(
                (baseStr: string) => baseStr === str
            );

            if (iKey === keyArr.length - 1) {
                iKey = -1;
            }
            if (indexStr === -1) {
                result.push(str);
                continue;
            } else if (indexStr === 0) {
                indexStr = 1;
            }

            const newStr = this.BASE_STORE[0][indexStr];
            result.push(isUpper ? newStr : newStr.toLowerCase());
        }
        return result.join("");
    }

    isValidKey(k: string): boolean {
        return /^[a-zA-Z]+$/.test(k);
    }
}

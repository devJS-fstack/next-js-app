import { BaseAlgorithm } from "./base";

export class Caesar implements BaseAlgorithm {
    private BASE_STORE: string[] = [];

    init() {
        this.BASE_STORE = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    }

    encrypt(plainText: string, key: number): string {
        if (!this.isValidKey(key)) {
            throw new Error("Caesar: Invalid format number of key");
        }
        const ptArr = plainText.split("");
        const result = ptArr
            .map((str) => {
                const index = this.BASE_STORE.findIndex(
                    (base) => base === str.toUpperCase(),
                );
                if (index === -1) {
                    return str;
                }

                let newIndex = index + key;
                while (newIndex > 25) {
                    newIndex -= 26;
                }

                return str.toUpperCase() === str
                    ? this.BASE_STORE[newIndex]
                    : this.BASE_STORE[newIndex].toLowerCase();
            })
            .join("");

        return result;
    }
    decrypt(cipherText: string, key: number): string {
        if (!this.isValidKey(key)) {
            throw new Error("Caesar: Invalid format number of key");
        }
        const ctArr = cipherText.split("");

        const result = ctArr
            .map((str) => {
                const index = this.BASE_STORE.findIndex(
                    (base) => base === str.toUpperCase(),
                );
                if (index === -1) {
                    return str;
                }

                let newIndex = index - key;
                while (newIndex < 0) {
                    newIndex += 26;
                }

                return str.toUpperCase() === str
                    ? this.BASE_STORE[newIndex]
                    : this.BASE_STORE[newIndex].toLowerCase();
            })
            .join("");

        return result;
    }

    isValidKey(k: number): boolean {
        return /^[\d]+$/.test(k.toString()) && k != 0;
    }
}

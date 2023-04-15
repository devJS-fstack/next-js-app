import { Caesar } from "./caesar";
import { Vigenere } from "./vigenere";
import { PlayFair } from "./playFair";
import { RailFence } from "./railFence";
import { toNumber } from "lodash";

export const algorithms = ["Rail Fence", "Play Fair", "Caesar", "Vigenere"];

export class Algorithm {
    static instance: Algorithm;
    static getInstance() {
        if (!Algorithm.instance) {
            Algorithm.instance = new Algorithm();
        }

        return Algorithm.instance;
    }

    private constructor(
        private caesar = new Caesar(),
        private vignere = new Vigenere(),
        private playFair = new PlayFair(),
        private railFence = new RailFence()
    ) {}

    init() {
        this.caesar.init();
        this.vignere.init();
    }

    encrypt(algorithm: string, input: string, key: string): string {
        switch (algorithm) {
            case "Caesar":
                return this.caesar.encrypt(input, toNumber(key));
            case "Vigenere":
                return this.vignere.encrypt(input, key);
            case "Play Fair":
                return this.playFair.encrypt(input, key);
            case "Rail Fence":
                return this.railFence.encrypt(input, toNumber(key));
            default:
                return input;
        }
    }

    decrypt(algorithm: string, input: string, key: string): string {
        switch (algorithm) {
            case "Caesar":
                return this.caesar.decrypt(input, toNumber(key));
            case "Vigenere":
                return this.vignere.decrypt(input, key);
            case "Play Fair":
                return this.playFair.decrypt(input, key);
            case "Rail Fence":
                return this.railFence.decrypt(input, toNumber(key));
            default:
                return input;
        }
    }
}

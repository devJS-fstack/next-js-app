export interface BaseAlgorithm {
    init(): void;
    encrypt(pt: string, k: string | number): string;
    decrypt(ct: string, k: string | number): string;
    isValidKey(k: string | number): boolean;
}

import crypto from 'crypto';
import {BinaryLike} from "node:crypto";

interface IsAlphaOptions {
    ignore?: RegExp | string;
}

const utilities = () => {
    const alphaRegex = /^[A-Z]+$/i;
    const numericRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const onlyChars = (str: string, regex: RegExp, options: IsAlphaOptions = {}): boolean => {
        const {ignore} = options;
        let filteredStr = str;
        if (ignore instanceof RegExp) {
            filteredStr = filteredStr.replace(ignore, '');
        } else if (typeof ignore === 'string') {
            filteredStr = filteredStr.replace(new RegExp(`[${ignore.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}]`, 'g'), '');
        } else if (ignore !== undefined) {
            throw new Error('ignore should be an instance of a String or RegExp');
        }
        return regex.test(filteredStr);
    };

    const onlyAlpha = (str: string, options: IsAlphaOptions = {}): boolean => {
        return onlyChars(str, alphaRegex, options);
    };

    const onlyNumeric = (str: string, options: IsAlphaOptions = {}): boolean => {
        return onlyChars(str, numericRegex, options);
    };

    const onlyAlphanumeric = (str: string, options: IsAlphaOptions = {}): boolean => {
        return onlyAlpha(str, options) || onlyNumeric(str, options);
    };

    const reverseStr = (str: string): string => {
        return str.split('').reverse().join('');
    };

    const capitalizeStr = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const isValidEmail = (email: string): boolean => {
        return emailRegex.test(email);
    };

    const isEmptyStr = (str: string): boolean => {
        return str.trim() === '';
    };

    const truncateStr = (str: string, maxLength: number): string => {
        if (str.length <= maxLength) {
            return str;
        }
        return str.slice(0, maxLength) + '...';
    };

    const slugify = (str: string): string => {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    };

    const isPalindrome = (str: string): boolean => {
        const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanStr === reverseStr(cleanStr);
    };

    const countWords = (str: string): number => {
        return str.trim().split(/\s+/).length;
    };

    const replaceStr = (source: string, find: string, replace: string): string => {
        return source.split(find).join(replace);
    };

    const isURL = (value: string): boolean => {
        try {
            new URL(value);
            return true;
        } catch {
            return false;
        }
    };

    const randomUUID = (): string => {
        return crypto.randomUUID();
    };

    const hashData = (data: BinaryLike, algorithm: string = 'sha256'): string => {
        const hash = crypto.createHash(algorithm);
        hash.update(data);
        return hash.digest('hex');
    };

    const isDate = (value: unknown): boolean => {
        return value instanceof Date && !isNaN((value as Date).getTime());
    };

    const isEqualArray = <T>(arr1: T[], arr2: T[]): boolean => {
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
            throw new TypeError('isEqualArray expects two arrays as arguments.');
        }

        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    };

    const isEqualObject = (obj1: any, obj2: any): boolean => {
        if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || Array.isArray(obj1) || Array.isArray(obj2)) {
            throw new TypeError('isEqualObject expects two non-array objects as arguments.');
        }
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!Object.prototype.hasOwnProperty.call(obj2, key) || obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    };

    const isEmpty = <T>(value: T): boolean => {
        if (value === null || value === undefined) {
            return true;
        }

        if (Array.isArray(value) || typeof value === 'string' || typeof value === 'object') {
            return Object.keys(value).length === 0;
        }

        return false;
    };

    const isAscii = (value: string): boolean => {
        return /^[\x00-\x7F]*$/.test(value);
    };

    const isDecimal = (value: string): boolean => {
        return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
    };

    const isDivisibleBy = (value: string, divisor: string): boolean => {
        if (!isDecimal(value) || !isDecimal(divisor) || parseFloat(divisor) === 0) {
            return false;
        }

        return parseFloat(value) % parseFloat(divisor) === 0;
    };

    const isHexadecimal = (value: string): boolean => {
        return /^[0-9A-F]+$/i.test(value);
    };

    const isHexColor = (value: string): boolean => {
        return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(value);
    };

    const isHSL = (value: string): boolean => {
        return /^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/i.test(value);
    };

    const isIMEI = (value: string): boolean => {
        return /^\d{15}$/.test(value);
    };

    const isISBN = (value: string): boolean => {
        const isbn = value.replace(/[- ]/g, '');
        if (isbn.length === 10) {
            let sum = 0;
            for (let i = 0; i < 9; i++) {
                sum += (10 - i) * parseInt(isbn.charAt(i));
            }
            const checksum = (11 - (sum % 11)) % 11;
            return checksum === parseInt(isbn.charAt(9)) || (checksum === 10 && isbn.charAt(9).toUpperCase() === 'X');
        } else if (isbn.length === 13) {
            let sum = 0;
            for (let i = 0; i < 12; i++) {
                sum += (i % 2 === 0 ? 1 : 3) * parseInt(isbn.charAt(i));
            }
            return sum % 10 === 0;
        }
        return false;
    };

    const isJSON = (value: string): boolean => {
        try {
            JSON.parse(value);
            return true;
        } catch {
            return false;
        }
    };

    const isJWT = (value: string): boolean => {
        const parts = value.split('.');
        if (parts.length !== 3) {
            return false;
        }
        try {
            const payload = JSON.parse(atob(parts[1]));
            return typeof payload === 'object';
        } catch {
            return false;
        }
    };

    const generateRandomBytes = (length: number): Buffer => {
        return crypto.randomBytes(length);
    };

    const generateRandomString = (length: number): string => {
        const randomBytes = generateRandomBytes(length);
        return randomBytes.toString('hex');
    };

    const compareHash = (data: BinaryLike, hash: string, algorithm: string = 'sha256'): boolean => {
        const hashedData = hashData(data, algorithm);
        return hashedData === hash;
    };

    const encryptData = (data: string, key: BinaryLike, algorithm: string = 'aes-256-cbc'): string => {
        const cipher = crypto.createCipher(algorithm, key);
        let encryptedData = cipher.update(data, 'utf8', 'hex');
        encryptedData += cipher.final('hex');
        return encryptedData;
    };

    const decryptData = (encryptedData: string, key: BinaryLike, algorithm: string = 'aes-256-cbc'): string => {
        const decipher = crypto.createDecipher(algorithm, key);
        let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');
        return decryptedData;
    };

    const encodeBase64 = (data: string | Buffer): string => {
        return Buffer.from(data).toString('base64');
    };

    const decodeBase64 = (encodedData: string): string => {
        return Buffer.from(encodedData, 'base64').toString('utf8');
    };

    const generateSecurePassword = (length: number = 12): string => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    };

    const generateSecureToken = (length: number = 32): string => {
        return generateRandomString(length);
    };

    const isValidURL = (url: string): boolean => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const isValidSSN = (value: string): boolean => {
        // Basic validation for Social Security Number (SSN) in XXX-XX-XXXX or XXXXXXXXX format
        const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
        return ssnRegex.test(value);
    };

    const isValidVIN = (value: string): boolean => {
        // Basic validation for Vehicle Identification Number (VIN) - 17 characters
        return /^[A-HJ-NPR-Z0-9]{17}$/i.test(value);
    };

    const isValidLatitude = (value: number): boolean => {
        // Basic latitude validation (-90 to 90)
        return value >= -90 && value <= 90;
    };

    const isValidLongitude = (value: number): boolean => {
        // Basic longitude validation (-180 to 180)
        return value >= -180 && value <= 180;
    };


    const shuffleArray = <T>(array: T[]): T[] => {
        if (!Array.isArray(array)) {
            throw new Error('Input must be an array.');
        }
        const shuffledArray = array.slice(); // Make a shallow copy of the original array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            // Swap elements between randomIndex and i
            [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }

        return shuffledArray;
    };

    const generateRandomColor = (): string => {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    };

    const reverseArray = <T>(array: T[]): T[] => {
        if (!Array.isArray(array)) {
            throw new Error('Input must be an array.');
        }
        return array.slice().reverse();
    };

    const formatCurrency = (amount: number, currencyCode: string = 'USD'): string => {
        if (isNaN(amount)) {
            throw new Error('Amount must be a number.');
        }
        try {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currencyCode.toUpperCase(),
            });
            return formatter.format(amount);
        } catch (error) {
            throw new Error(`Invalid currency code: ${currencyCode}`);
        }
    };

    const removeDuplicates = <T>(array: T[]): T[] => {
        return Array.from(new Set(array));
    };


    return {
        onlyAlpha,
        onlyNumeric,
        onlyAlphanumeric,
        reverseStr,
        capitalizeStr,
        isValidEmail,
        isEmptyStr,
        truncateStr,
        slugify,
        isPalindrome,
        countWords,
        replaceStr,
        isURL,
        isDate,
        isEmpty,
        isEqualArray,
        isEqualObject,
        isAscii,
        isDecimal,
        isDivisibleBy,
        isHexadecimal,
        isHexColor,
        isHSL,
        isIMEI,
        isISBN,
        isJSON,
        isJWT,
        randomUUID,
        hashData,
        generateRandomBytes,
        generateRandomString,
        compareHash,
        encryptData,
        decryptData,
        encodeBase64,
        decodeBase64,
        generateSecurePassword,
        generateSecureToken,
        isValidURL,
        isValidSSN,
        isValidVIN,
        isValidLatitude,
        isValidLongitude,
        formatCurrency,
        reverseArray,
        generateRandomColor,
        shuffleArray,
        removeDuplicates,
    };
};

export default utilities;
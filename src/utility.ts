import {BinaryLike} from "node:crypto";
import * as crypto from "crypto";

const utility = () => {
    // Remove all whitespace from a string
    const removeWhitespace = (str: string): string => str.replace(/\s/g, '');

    // Sanitize a string by removing non-alphanumeric characters and spaces
    const sanitizeAlphaNumericSpace = (str: string): string => str.replace(/[^a-zA-Z0-9 ]/g, '');

    // Sanitize a string by removing non-alphanumeric characters, spaces, and converting to lowercase
    const sanitizeAlphaNumericLower = (str: string): string => sanitizeAlphaNumericSpace(str).toLowerCase();

    // Sanitize a string by removing non-alphanumeric characters, spaces, and converting to uppercase
    const sanitizeAlphaNumericUpper = (str: string): string => sanitizeAlphaNumericSpace(str).toUpperCase();

    // Sanitize a string by removing non-numeric characters and converting to number
    const sanitizeNumericValue = (str: string): number => parseFloat(str.replace(/[^0-9.]/g, ''));

    // Sanitize a string by removing non-numeric characters and converting to integer
    const sanitizeIntegerValue = (str: string): number => parseInt(str.replace(/[^0-9]/g, ''));

    // Sanitize a string by removing non-alphabetic characters and converting to lowercase
    const sanitizeAlphaLower = (str: string): string => str.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Sanitize a string by removing non-alphabetic characters and converting to uppercase
    const sanitizeAlphaUpper = (str: string): string => str.replace(/[^a-zA-Z]/g, '').toUpperCase();

    // Sanitize a string by removing HTML tags
    const stripHTMLTags = (str: string): string => str.replace(/<[^>]*>/g, '');

    // Escape HTML entities in a string
    const escapeHTML = (str: string): string => {
        const htmlEntities: Record<string, string> = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        };
        return str.replace(/[&<>"']/g, (char) => htmlEntities[char]);
    };

    // Sanitize a string by removing non-printable ASCII characters
    const removeNonPrintableASCII = (str: string): string => str.replace(/[^ -~]/g, '');

    // Sanitize a string by removing control characters
    const removeControlCharacters = (str: string): string => str.replace(/[\x00-\x1F\x7F]/g, '');

    // Trim leading and trailing whitespace from a string
    const trimWhitespace = (str: string): string => str.trim();

    // Sanitize a string by removing consecutive duplicate characters
    const removeDuplicateChars = (str: string): string => str.replace(/(.)\1+/g, '$1');

    // Sanitize a string by replacing consecutive whitespace characters with a single space
    const removeExtraWhitespace = (str: string): string => str.replace(/\s+/g, ' ');

    // Convert HTML entities in a string to their corresponding characters
    const unescapeHTML = (str: string): string => {
        const htmlEntities: Record<string, string> = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'",
        };
        return str.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, (entity) => htmlEntities[entity]);
    };

    // Capitalize the first letter of a string
    const capitalizeStr = (str: string): string => {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
    };

    // Truncate a string to a specified length and append ellipsis if necessary
    const truncateStr = (str: string, maxLength: number): string => {
        return str && str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    };

    // Convert a string to a URL-friendly slug
    const slugify = (str: string): string => {
        return str ? str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : '';
    };

    // Count the number of words in a string
    const countWords = (str: string): number => {
        return str ? str.trim().split(/\s+/).length : 0;
    };

    // Replace occurrences of a substring within a string
    const replaceStr = (source: string, find: string, replace: string): string => {
        return source ? source.split(find).join(replace) : source;
    };

    // Convert a string to kebab case (e.g., "hello world" => "hello-world")
    const toKebabCase = (str: string): string => {
        return str ? str.trim().replace(/\s+/g, '-').toLowerCase() : '';
    };

    // Convert a string to snake case (e.g., "hello world" => "hello_world")
    const toSnakeCase = (str: string): string => {
        return str ? str.trim().replace(/\s+/g, '_').toLowerCase() : '';
    };

    // Convert a string to camel case (e.g., "hello world" => "helloWorld")
    const toCamelCase = (str: string): string => {
        return str ? str.trim().replace(/\s+(\w)/g, (_, c) => c.toUpperCase()) : '';
    };

    // Check if a string starts with a specified prefix
    const startsWith = (str: string, prefix: string): boolean => {
        return str && prefix ? str.startsWith(prefix) : false;
    };

    // Check if a string ends with a specified suffix
    const endsWith = (str: string, suffix: string): boolean => {
        return str && suffix ? str.endsWith(suffix) : false;
    };

    // Check if a string contains a specified substring
    const contains = (str: string, substring: string): boolean => {
        return str && substring ? str.includes(substring) : false;
    };

    // Split a string into an array of substrings using a specified separator
    const splitString = (str: string, separator: string | RegExp): string[] => {
        return str ? str.split(separator) : [];
    };

    // Generate a random UUID
    const generateRandomUUID = (): string => {
        return crypto.randomUUID();
    };

    // Encode data to Base64
    const encodeToBase64 = (data: string | Buffer): string => {
        return Buffer.from(data).toString('base64');
    };

    // Decode Base64 encoded data
    const decodeFromBase64 = (encodedData: string): string => {
        return Buffer.from(encodedData, 'base64').toString('utf8');
    };

    // Create a HMAC (hash-based message authentication code)
    const createHmac = (algorithm: string, key: BinaryLike): crypto.Hmac => {
        return crypto.createHmac(algorithm, key);
    };

    // Hash data using SHA-256 algorithm
    const hashWithSHA256 = (data: BinaryLike): string => {
        return crypto.createHash('sha256').update(data).digest('hex');
    };

    // Hash data using SHA-1 algorithm
    const hashWithSHA1 = (data: BinaryLike): string => {
        return crypto.createHash('sha1').update(data).digest('hex');
    };

    // Hash data using MD5 algorithm
    const hashWithMD5 = (data: BinaryLike): string => {
        return crypto.createHash('md5').update(data).digest('hex');
    };

    // Generate a random string
    const generateRandomString = (length: number): string => {
        const randomBytes = crypto.randomBytes(length);
        return randomBytes.toString('hex');
    };

    // Encrypt data using a specified algorithm and key
    const encryptData = (data: string, key: BinaryLike, algorithm: string = 'aes-256-cbc'): string => {
        const cipher = crypto.createCipher(algorithm, key);
        let encryptedData = cipher.update(data, 'utf8', 'hex');
        encryptedData += cipher.final('hex');
        return encryptedData;
    };

    // Decrypt encrypted data using a specified algorithm and key
    const decryptData = (encryptedData: string, key: BinaryLike, algorithm: string = 'aes-256-cbc'): string => {
        const decipher = crypto.createDecipheriv(algorithm, key, '');
        let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');
        return decryptedData;
    };

    // Get the current date in the format 'YYYY-MM-DD HH:mm:ss.SSS'
    const getCurrentLogDate = (): string => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    };

    // Get the current date in the format 'YYYY-MM-DD'
    const getCurrentYYYYMMDD = (): string => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Get the current date in the format 'YYYYMMDD'
    const getCurrentYYYYMMDDStr = (): string => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    };

    // Get the current date in the format 'YYYY-MM-DD HH:mm:ss.SSS'
    const getCurrentYYYYMMDDHHmmssSSS = (separator = '-'): string => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
        const sep = separator ? separator : '-';
        return `${year}${sep}${month}${sep}${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    };

    // Get the Unix timestamp
    const getUnixTimestamp = (date?: Date | number): number => {
        if (date instanceof Date) {
            return Math.floor(date.getTime() / 1000);
        } else if (typeof date === 'number') {
            return date;
        } else {
            return Math.floor(new Date().getTime() / 1000);
        }
    };

    // Convert a number string to a safe JavaScript Number
    const toSafeNumber = (numStr: string): number | string => {
        const num = Number(numStr);
        return isNaN(num) ? numStr : num;
    };

    // Generate a random integer between the inclusive `lower` and exclusive `upper` bounds.
    const randomIntInRange = (lower?: number, upper?: number): number => {
        if (typeof lower === 'undefined') return 0;
        if (typeof upper === 'undefined') {
            upper = lower;
            lower = 0;
        }
        return lower + Math.floor(Math.random() * (upper - lower));
    };

    const shuffleArray = <T>(array: T[]): T[] => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    // Hash data using SHA-512 algorithm
    const hashWithSHA512 = (data: BinaryLike): string => {
        return crypto.createHash('sha512').update(data).digest('hex');
    };

    // Hash password with SHA-512 algorithm and salt
    const hashPasswordWithSHA512 = (password: string, salt: string): string => {
        const saltedPassword = password + salt;
        return hashWithSHA512(saltedPassword);
    };

    // Hash password with SHA-256 algorithm and salt
    const hashPasswordWithSHA256 = (password: string, salt: string): string => {
        const saltedPassword = password + salt;
        return hashWithSHA256(saltedPassword);
    };

    // Generate a random salt
    const generateSalt = (length: number = 16): string => {
        return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
    };

    // Hash password with SHA-1 algorithm and salt (for compatibility, not recommended for new systems)
    const hashPasswordWithSHA1 = (password: string, salt: string): string => {
        const saltedPassword = password + salt;
        return hashWithSHA1(saltedPassword);
    };

    // Hash data using SHA-384 algorithm
    const hashWithSHA384 = (data: BinaryLike): string => {
        return crypto.createHash('sha384').update(data).digest('hex');
    };

    const hashPasswordSHA384 = (password: string, salt: string): string => {
        const saltedPassword = password + salt;
        return hashWithSHA384(saltedPassword);
    };


    // Reverse a string
    const reverseString = (str: string): string => {
        return str ? str.split('').reverse().join('') : '';
    };

    // Extract numbers from a string
    const extractNumbers = (str: string): number[] => {
        return str ? str.match(/\d+/g)?.map(Number) || [] : [];
    };

    // Remove non-numeric characters from a string
    const removeNonNumeric = (str: string): string => {
        return str ? str.replace(/\D/g, '') : '';
    };

    // Replace multiple spaces with a single space in a string
    const collapseSpaces = (str: string): string => {
        return str ? str.replace(/\s+/g, ' ') : '';
    };

    // Get the character count of a specific character in a string
    const countCharacter = (str: string, character: string): number => {
        return str ? str.split(character).length - 1 : 0;
    };

    return {
        removeWhitespace,
        sanitizeAlphaNumericSpace,
        sanitizeAlphaNumericLower,
        sanitizeAlphaNumericUpper,
        sanitizeNumericValue,
        sanitizeIntegerValue,
        sanitizeAlphaLower,
        sanitizeAlphaUpper,
        stripHTMLTags,
        escapeHTML,
        removeNonPrintableASCII,
        removeControlCharacters,
        trimWhitespace,
        removeDuplicateChars,
        removeExtraWhitespace,
        unescapeHTML,
        countCharacter,
        collapseSpaces,
        removeNonNumeric,
        extractNumbers,
        reverseString,
        capitalizeStr,
        truncateStr,
        slugify,
        countWords,
        replaceStr,
        toKebabCase,
        toSnakeCase,
        toCamelCase,
        startsWith,
        endsWith,
        contains,
        splitString,
        generateRandomUUID,
        encodeToBase64,
        decodeFromBase64,
        createHmac,
        hashWithSHA256,
        hashWithSHA1,
        hashWithMD5,
        generateRandomString,
        encryptData,
        decryptData,
        getCurrentLogDate,
        getCurrentYYYYMMDD,
        getCurrentYYYYMMDDStr,
        getCurrentYYYYMMDDHHmmssSSS,
        getUnixTimestamp,
        toSafeNumber,
        randomIntInRange,
        shuffleArray,
        hashWithSHA512,
        hashPasswordWithSHA512,
        hashPasswordWithSHA256,
        hashPasswordWithSHA1,
        generateSalt,
        hashWithSHA384,
        hashPasswordSHA384,
    };
};

export default utility;
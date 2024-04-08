import {JsonObject} from "./types";

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

    // Sanitize Email Addresses
    const sanitizeEmail = (input: string): string => {
        return input.replace(/[^\w@.-]/g, '');
    };

    // Sanitize URLs
    const sanitizeUrl = (input: string): string => {
        return input.replace(/[^\w:/._-]/g, '');
    };

    // Sanitize Phone Numbers
    const sanitizePhoneNumber = (input: string): string => {
        return input.replace(/[^\d+()-]/g, '');
    };

    // Sanitize Alphanumeric with Special Characters
    const sanitizeAlphaNumericSpecial = (input: string): string => {
        return input.replace(/[^\w!@#$%^&*()-]/g, '');
    };

    // Sanitize Alphanumeric with Accents
    const sanitizeAlphaNumericAccents = (input: string): string => {
        return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };

    // Sanitize HTML Tags
    const sanitizeHtmlTags = (input: string): string => {
        return input.replace(/<[^>]*>/g, '');
    };

    // Sanitize File Names
    const sanitizeFileName = (input: string): string => {
        return input.replace(/[^\w.-]/g, '');
    };

    // Sanitize JSON Data
    const sanitizeJson = (input: string): string => {
        try {
            return JSON.stringify(JSON.parse(input));
        } catch (error) {
            return '';
        }
    };

    // Sanitize Base64 Data
    const sanitizeBase64 = (input: string): string => {
        return input.replace(/[^\w+/=]/g, '');
    };

    // Sanitize Hexadecimal Values
    const sanitizeHexadecimal = (input: string): string => {
        return input.replace(/[^a-fA-F\d]/g, '');
    };

    // Sanitize IPv4 Addresses
    const sanitizeIPv4 = (input: string): string => {
        return input.replace(/[^\d.]/g, '');
    };

    // Sanitize IPv6 Addresses
    const sanitizeIPv6 = (input: string): string => {
        return input.replace(/[^a-fA-F\d:]/g, '');
    };

    // Sanitize Social Security Numbers
    const sanitizeSSN = (input: string): string => {
        return input.replace(/[^\d-]/g, '');
    };

    const sanitizeWithAllowedCharacters = (input: string, allowedCharacters: string): string => {
        const pattern = new RegExp(`[^${allowedCharacters}]`, 'g');
        return input.replace(pattern, '');
    };


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
    const decodeHTMLEntities = (str: string): string => {
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

    // Convert a string to pascal case
    const toPascalCase = (str: string): string => {
        return str.replace(/\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).replace(/\s+/g, '');
    };

    // Convert a string to constant case (uppercase with underscores)
    const toConstantCase = (str: string): string => {
        return str.replace(/\s+/g, '_').toUpperCase();
    };

    // Convert a string to Train-Case
    const toTrainCase = (str: string): string => {
        return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    };

    // Convert a string to MACRO_CASE
    const toMacroCase = (str: string): string => {
        return str.toUpperCase().replace(/[^A-Z0-9]+/g, '_');
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

    // Encode data to Base64
    const encodeToBase64 = (data: string | Buffer): string => {
        return Buffer.from(data).toString('base64');
    };

    // Decode Base64 encoded data
    const decodeFromBase64 = (encodedData: string): string => {
        return Buffer.from(encodedData, 'base64').toString('utf8');
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

    // Parse JSON string to object
    const parseJson = (jsonString: string): any | null => {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return null;
        }
    };

    // Format JSON string with indentation for better readability
    const formatJson = (jsonString: string, space: number = 2): string | null => {
        const parsedJson = parseJson(jsonString);
        if (parsedJson === null) return null;
        try {
            return JSON.stringify(parsedJson, null, space);
        } catch (error) {
            console.error('Error formatting JSON:', error);
            return null;
        }
    };

    // Stringify object to JSON string
    const stringifyJson = (obj: any): string | null => {
        try {
            return JSON.stringify(obj);
        } catch (error) {
            console.error('Error stringifying JSON:', error);
            return null;
        }
    };

    const mergeJson = (target: JsonObject, source: JsonObject): JsonObject => {
        const merged: Partial<JsonObject> = {...target};
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                const targetValue = target[key];
                const sourceValue = source[key];

                if (typeof targetValue === 'object' && typeof sourceValue === 'object') {
                    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                        merged[key] = [...targetValue, ...sourceValue];
                    } else if (!Array.isArray(targetValue) && !Array.isArray(sourceValue)) {
                        merged[key] = mergeJson(targetValue, sourceValue);
                    } else {
                        merged[key] = sourceValue;
                    }
                } else {
                    merged[key] = sourceValue;
                }
            }
        }
        return merged as JsonObject;
    };

    // Returns a new object with values mapped by a specified mapping function
    const mapValuesJson = <T extends Record<string, unknown>, U>(
        obj: T,
        mappingFunction: (value: T[keyof T]) => U
    ): Record<string, U> => {
        const result: Record<string, U> = {} as Record<string, U>;
        Object.entries(obj).forEach(([key, value]) => {
            result[key] = mappingFunction(value as T[keyof T]);
        });
        return result;
    };

    // Returns a new object with keys mapped by a specified mapping function
    const mapKeysJson = <T extends Record<string, unknown>>(
        obj: T,
        mappingFunction: (key: string) => string
    ): Record<string, unknown> => {
        const result: Record<string, unknown> = {};
        Object.keys(obj).forEach(key => {
            const newKey = mappingFunction(key);
            result[newKey] = obj[key];
        });
        return result;
    };

    // Returns a new object with omitted keys from the original JSON object
    const omitJson = <T extends Record<string, unknown>>(obj: T, keys: string[]): Record<string, unknown> => {
        const result: Record<string, unknown> = {...obj};
        keys.forEach(key => delete result[key]);
        return result;
    };


    // Removes falsy values from an array
    const removeFalsyValues = <T>(arr: (T | null | undefined | false | 0 | '' | {} | [])[]): T[] => {
        return arr.filter(Boolean) as T[];
    };

    // Groups the elements of an array of objects by a specified key
    const groupObjectsByKey = <T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> => {
        return arr.reduce((acc, obj) => {
            const keyValue = obj[key] as unknown as string;
            acc[keyValue] = acc[keyValue] || [];
            acc[keyValue].push(obj);
            return acc;
        }, {} as Record<string, T[]>);
    };

    // Calculate the total sum of numbers in an array
    const calculateTotalSum = (arr: number[]): number => {
        return arr.reduce((total, num) => total + num, 0);
    };

    // Calculate the average value of numbers in an array
    const calculateAverage = (arr: number[]): number => {
        if (arr.length === 0) return 0;
        return calculateTotalSum(arr) / arr.length;
    };

    // Find the maximum value in an array of numbers
    const findMaxValue = (arr: number[]): number => {
        return arr.reduce((maxValue, num) => Math.max(maxValue, num), Number.NEGATIVE_INFINITY);
    };

    // Find the minimum value in an array of numbers
    const findMinValue = (arr: number[]): number => {
        return arr.reduce((minValue, num) => Math.min(minValue, num), Number.POSITIVE_INFINITY);
    };

    // Calculate the median value of numbers in an array
    const calculateMedian = (arr: number[]): number => {
        const sortedArr = arr.slice().sort((a, b) => a - b);
        const length = sortedArr.length;
        if (length === 0) return 0;
        if (length % 2 === 0) {
            const midIndex = length / 2;
            return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2;
        } else {
            const midIndex = Math.floor(length / 2);
            return sortedArr[midIndex];
        }
    };

    // Calculate the variance of numbers in an array
    const calculateVariance = (arr: number[]): number => {
        const avg = calculateAverage(arr);
        const squaredDiffs = arr.map(num => Math.pow(num - avg, 2));
        return calculateAverage(squaredDiffs);
    };

    // Calculate the standard deviation of numbers in an array
    const calculateStandardDeviation = (arr: number[]): number => {
        return Math.sqrt(calculateVariance(arr));
    };

    // Deep clone an object
    const deepClone = <T>(obj: T): T => {
        return JSON.parse(JSON.stringify(obj));
    };

    // Get unique values from an array without using Set
    const distinctValues = <T>(arr: T[]): T[] => {
        const uniqueArr: T[] = [];
        arr.forEach(item => {
            if (!uniqueArr.includes(item)) {
                uniqueArr.push(item);
            }
        });
        return uniqueArr;
    };

    // Calculate the factorial of a number
    const calculateFactorial = (num: number): number => {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    };

    // Calculate the power of a number
    const calculatePower = (base: number, exponent: number): number => {
        return Math.pow(base, exponent);
    };

    // Round a number to a specified number of decimal places
    const roundToDecimalPlaces = (num: number, decimalPlaces: number = 0): number => {
        const factor = 10 ** decimalPlaces;
        return Math.round(num * factor) / factor;
    };

    // Generate an array of numbers within a specified range
    const generateRange = (start: number, end: number, step: number = 1): number[] => {
        const result = [];
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
        return result;
    };

    // Calculate the square root of a number
    const calculateSquareRoot = (num: number): number => {
        return Math.sqrt(num);
    };

    // Calculate the absolute value of a number
    const calculateAbsoluteValue = (num: number): number => {
        return Math.abs(num);
    };


    // Calculate the greatest common divisor (GCD) of two numbers
    const calculateGCD = (a: number, b: number): number => {
        return b === 0 ? a : calculateGCD(b, a % b);
    };

    // Calculate the least common multiple (LCM) of two numbers
    const calculateLCM = (a: number, b: number): number => {
        return (a * b) / calculateGCD(a, b);
    };

    // Convert a string to a binary representation
    const toBinary = (str: string): string => {
        return str.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
    };

    // Convert a binary string to a regular string
    const fromBinary = (binaryStr: string): string => {
        return binaryStr.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
    };

    // Convert a string to a Morse code representation
    const toMorseCode = (str: string): string => {
        const morseCodeMap: Record<string, string> = {
            'a': '.-',
            'b': '-...',
            'c': '-.-.',
            'd': '-..',
            'e': '.',
            'f': '..-.',
            'g': '--.',
            'h': '....',
            'i': '..',
            'j': '.---',
            'k': '-.-',
            'l': '.-..',
            'm': '--',
            'n': '-.',
            'o': '---',
            'p': '.--.',
            'q': '--.-',
            'r': '.-.',
            's': '...',
            't': '-',
            'u': '..-',
            'v': '...-',
            'w': '.--',
            'x': '-..-',
            'y': '-.--',
            'z': '--..',
            '0': '-----',
            '1': '.----',
            '2': '..---',
            '3': '...--',
            '4': '....-',
            '5': '.....',
            '6': '-....',
            '7': '--...',
            '8': '---..',
            '9': '----.',
            '.': '.-.-.-',
            ',': '--..--',
            '?': '..--..',
            "'": '.----.',
            '!': '-.-.--',
            '/': '-..-.',
            '(': '-.--.',
            ')': '-.--.-',
            '&': '.-...',
            ':': '---...',
            ';': '-.-.-.',
            '=': '-...-',
            '+': '.-.-.',
            '-': '-....-',
            '_': '..--.-',
            '"': '.-..-.',
            '$': '...-..-',
            '@': '.--.-.'
        };
        return str.toLowerCase().split('').map(char => morseCodeMap[char] || '').join(' ');
    };

    // Convert a Morse code string to a regular string
    const fromMorseCode = (morseCodeStr: string): string => {
        const morseCodeMap: Record<string, string> = {
            '.-': 'a',
            '-...': 'b',
            '-.-.': 'c',
            '-..': 'd',
            '.': 'e',
            '..-.': 'f',
            '--.': 'g',
            '....': 'h',
            '..': 'i',
            '.---': 'j',
            '-.-': 'k',
            '.-..': 'l',
            '--': 'm',
            '-.': 'n',
            '---': 'o',
            '.--.': 'p',
            '--.-': 'q',
            '.-.': 'r',
            '...': 's',
            '-': 't',
            '..-': 'u',
            '...-': 'v',
            '.--': 'w',
            '-..-': 'x',
            '-.--': 'y',
            '--..': 'z',
            '-----': '0',
            '.----': '1',
            '..---': '2',
            '...--': '3',
            '....-': '4',
            '.....': '5',
            '-....': '6',
            '--...': '7',
            '---..': '8',
            '----.': '9',
            '.-.-.-': '.',
            '--..--': ',',
            '..--..': '?',
            '.----.': "'",
            '-.-.--': '!',
            '-..-.': '/',
            '-.--.': '(',
            '-.--.-': ')',
            '.-...': '&',
            '---...': ':',
            '-.-.-.': ';',
            '-...-': '=',
            '.-.-.': '+',
            '-....-': '-',
            '..--.-': '_',
            '.-..-.': '"',
            '...-..-': '$',
            '.--.-.': '@'
        };
        return morseCodeStr.split(' ').map(code => morseCodeMap[code] || '').join('');
    };


    // Remove leading whitespace from a string
    const trimStart = (str: string): string => {
        return str.replace(/^\s+/, '');
    };

    // Remove trailing whitespace from a string
    const trimEnd = (str: string): string => {
        return str.replace(/\s+$/, '');
    };

    // Pad a string with a specified character until it reaches a desired length
    const padStart = (str: string, targetLength: number, padChar: string = ' '): string => {
        return str.padStart(targetLength, padChar);
    };

    // Pad a string with a specified character until it reaches a desired length from the end
    const padEnd = (str: string, targetLength: number, padChar: string = ' '): string => {
        return str.padEnd(targetLength, padChar);
    };

    // Get the substring of a string from a specified start index to an optional end index
    const substring = (str: string, start: number, end?: number): string => {
        return str.substring(start, end);
    };

    // Get the index of the first occurrence of a substring in a string
    const indexOf = (str: string, substring: string): number => {
        return str.indexOf(substring);
    };

    // Get the index of the last occurrence of a substring in a string
    const lastIndexOf = (str: string, substring: string): number => {
        return str.lastIndexOf(substring);
    };

    // Extract all URLs from a string
    const extractURLs = (str: string): string[] => {
        return str.match(/\bhttps?:\/\/\S+/gi) || [];
    };

    // Extract all email addresses from a string
    const extractEmails = (str: string): string[] => {
        return str.match(/\b[\w.-]+@[^\s@]+\.[^\s@]+\b/gi) || [];
    };

    // Extract all hashtags from a string
    const extractHashtags = (str: string): string[] => {
        return str.match(/#\w+/gi) || [];
    };

    // Extract all mentions (usernames) from a string
    const extractMentions = (str: string): string[] => {
        return str.match(/@\w+/gi) || [];
    };

    // Remove all HTML tags from a string
    const removeHTMLTags = (str: string): string => {
        return str.replace(/<[^>]*>/g, '');
    };

    // Remove specified HTML tags from a string
    const removeSpecificHTMLTags = (str: string, tagsToRemove: string[]): string => {
        const tagRegex = new RegExp(`<(${tagsToRemove.join('|')})(\\s[^>]*)?>(.*?)<\\/\\1>`, 'gi');
        return str.replace(tagRegex, '');
    };

    // Replace HTML entities with their corresponding characters
    const replaceHTMLEntities = (str: string): string => {
        const htmlEntityMap: Record<string, string> = {
            '&lt;': '<', '&gt;': '>', '&amp;': '&', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ',
            '&iexcl;': '¡', '&cent;': '¢', '&pound;': '£', '&curren;': '¤', '&yen;': '¥', '&brvbar;': '¦',
            '&sect;': '§', '&uml;': '¨', '&copy;': '©', '&ordf;': 'ª', '&laquo;': '«', '&not;': '¬',
            '&shy;': '­', '&reg;': '®', '&macr;': '¯', '&deg;': '°', '&plusmn;': '±', '&sup2;': '²',
            '&sup3;': '³', '&acute;': '´', '&micro;': 'µ', '&para;': '¶', '&middot;': '·', '&cedil;': '¸',
            '&sup1;': '¹', '&ordm;': 'º', '&raquo;': '»', '&frac14;': '¼', '&frac12;': '½', '&frac34;': '¾',
            '&iquest;': '¿', '&Agrave;': 'À', '&Aacute;': 'Á', '&Acirc;': 'Â', '&Atilde;': 'Ã', '&Auml;': 'Ä',
            '&Aring;': 'Å', '&AElig;': 'Æ', '&Ccedil;': 'Ç', '&Egrave;': 'È', '&Eacute;': 'É', '&Ecirc;': 'Ê',
            '&Euml;': 'Ë', '&Igrave;': 'Ì', '&Iacute;': 'Í', '&Icirc;': 'Î', '&Iuml;': 'Ï', '&ETH;': 'Ð',
            '&Ntilde;': 'Ñ', '&Ograve;': 'Ò', '&Oacute;': 'Ó', '&Ocirc;': 'Ô', '&Otilde;': 'Õ', '&Ouml;': 'Ö',
            '&times;': '×', '&Oslash;': 'Ø', '&Ugrave;': 'Ù', '&Uacute;': 'Ú', '&Ucirc;': 'Û', '&Uuml;': 'Ü',
            '&Yacute;': 'Ý', '&THORN;': 'Þ', '&szlig;': 'ß', '&agrave;': 'à', '&aacute;': 'á', '&acirc;': 'â',
            '&atilde;': 'ã', '&auml;': 'ä', '&aring;': 'å', '&aelig;': 'æ', '&ccedil;': 'ç', '&egrave;': 'è',
            '&eacute;': 'é', '&ecirc;': 'ê', '&euml;': 'ë', '&igrave;': 'ì', '&iacute;': 'í', '&icirc;': 'î',
            '&iuml;': 'ï', '&eth;': 'ð', '&ntilde;': 'ñ', '&ograve;': 'ò', '&oacute;': 'ó', '&ocirc;': 'ô',
            '&otilde;': 'õ', '&ouml;': 'ö', '&divide;': '÷', '&oslash;': 'ø', '&ugrave;': 'ù', '&uacute;': 'ú',
            '&ucirc;': 'û', '&uuml;': 'ü', '&yacute;': 'ý', '&thorn;': 'þ', '&yuml;': 'ÿ'
        };
        return str.replace(/&[^\s;]+;|&#\d+;/gi, match => htmlEntityMap[match] || match);
    };

    // Wrap a string with a prefix and suffix
    const encloseStringWith = (str: string, prefix: string, suffix: string): string => {
        return prefix + str + suffix;
    };

    // Remove whitespace from the beginning and end of each line in a multi-line string
    const trimMultiLineString = (str: string): string => {
        return str.split('\n').map(line => line.trim()).join('\n');
    };

    // Pad a string with a specified character until it reaches a desired length, alternating between characters
    const padWithAlternatingChars = (str: string, targetLength: number, padChars: string[]): string => {
        const padCharsCount = padChars.length;
        let paddedStr = '';
        for (let i = 0; i < targetLength; i++) {
            paddedStr += padChars[i % padCharsCount];
        }
        return str.substring(0, Math.min(str.length, targetLength)) + paddedStr.substring(str.length);
    };

    // Replace a substring with another substring, but only if it's surrounded by whitespace or matches exactly
    const replaceIfSurroundedByWhitespace = (str: string, find: string, replace: string): string => {
        return str.replace(new RegExp(`(?<=^|\\s)${find}(?=\\s|$)`, 'g'), replace);
    };

    // Convert a string to a specified length by truncating or repeating characters
    const toFixedLengthWithRepeat = (str: string, length: number, repeatChar: string, truncateFrom: 'start' | 'end' = 'end'): string => {
        if (str.length === length) {
            return str;
        } else if (str.length < length) {
            return truncateFrom === 'start' ? repeatChar.repeat(length - str.length) + str : str + repeatChar.repeat(length - str.length);
        } else {
            return truncateFrom === 'start' ? str.substring(str.length - length) : str.substring(0, length);
        }
    };

    // Convert a string to a specified length by truncating and adding an ellipsis (...) if necessary
    const toFixedLengthWithEllipsis = (str: string, length: number): string => {
        return str.length <= length ? str : str.substring(0, length - 3) + '...';
    };

    // Convert a string to a specified length by truncating and adding a specified filler string if necessary
    const toFixedLengthWithFiller = (str: string, length: number, filler: string = '...'): string => {
        return str.length <= length ? str : str.substring(0, length - filler.length) + filler;
    };

    // Convert a string to a title case (except for specified words)
    const toTitleCaseExcept = (str: string, exceptWords: string[]): string => {
        return str.toLowerCase().replace(/\b\w+/g, word => {
            return exceptWords.includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1);
        });
    };

    // Utility to generate Fibonacci sequence up to a given limit
    const generateFibonacciSequence = (limit: number): number[] => {
        const sequence: number[] = [0, 1];
        let i = 2;
        while (sequence[i - 1] + sequence[i - 2] <= limit) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
            i++;
        }
        return sequence;
    };

    // Utility to find the factorial of a number
    const factorial = (num: number): number => {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    };

    // Utility to calculate the area of a circle
    const calculateCircleArea = (radius: number): number => {
        return Math.PI * radius ** 2;
    };

    // Utility to convert degrees to radians
    const degreesToRadians = (degrees: number): number => {
        return degrees * (Math.PI / 180);
    };

    // Utility to convert radians to degrees
    const radiansToDegrees = (radians: number): number => {
        return radians * (180 / Math.PI);
    };

    // Utility to convert seconds to human-readable format (HH:MM:SS)
    const secondsToHHMMSS = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Utility to convert bytes to human-readable format (KB, MB, GB, etc.)
    const bytesToHumanReadable = (bytes: number): string => {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
        let unitIndex = 0;
        while (bytes >= 1024 && unitIndex < units.length - 1) {
            bytes /= 1024;
            unitIndex++;
        }
        return `${bytes.toFixed(2)} ${units[unitIndex]}`;
    };

    // Get current timestamp in seconds
    const getCurrentTimestampInSeconds = (): number => {
        return Math.floor(Date.now() / 1000);
    };

    // Convert milliseconds to seconds
    const millisecondsToSeconds = (milliseconds: number): number => {
        return milliseconds / 1000;
    };

    // Convert seconds to milliseconds
    const secondsToMilliseconds = (seconds: number): number => {
        return seconds * 1000;
    };

    // Format date to custom string format (e.g., DD/MM/YYYY)
    const formatDate = (date: Date, format: string): string => {
        if (isNaN(date.getTime())) {
            return '';
        }

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return format
            .replace('DD', day)
            .replace('MM', month)
            .replace('YYYY', year);
    };

    // get current time formatted based on the specified format
    const getCurrentTime = (format: '12-hour' | '24-hour' = '12-hour'): string => {
        // Returns the current time formatted based on the specified format
        const date = new Date();
        if (isNaN(date.getTime())) {
            return '';
        }
        if (format === '12-hour') {
            const hours12 = date.getHours() % 12 || 12;
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const meridian = date.getHours() < 12 ? 'AM' : 'PM';
            return `${hours12}:${minutes} ${meridian}`;
        } else {
            return date.toLocaleTimeString('en-US', {hour12: false});
        }
    };

    // Quick Sort algorithm implementation.
    const quickSort = <T>(arr: T[]): T[] => {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[Math.floor(arr.length / 2)];
        const left: T[] = [];
        const right: T[] = [];
        for (const element of arr) {
            if (element < pivot) {
                left.push(element);
            } else if (element > pivot) {
                right.push(element);
            }
        }

        // Recursively sort the sub-arrays and concatenate them
        return [...quickSort(left), pivot, ...quickSort(right)];
    };

    // Merge Sort algorithm implementation.
    const mergeSort = <T>(arr: T[]): T[] => {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const leftHalf = arr.slice(0, mid);
        const rightHalf = arr.slice(mid);

        const sortedLeft = mergeSort(leftHalf);
        const sortedRight = mergeSort(rightHalf);

        const mergedArr: T[] = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
            if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
                mergedArr.push(sortedLeft[leftIndex]);
                leftIndex++;
            } else {
                mergedArr.push(sortedRight[rightIndex]);
                rightIndex++;
            }
        }
        // Append remaining elements from both halves
        return mergedArr.concat(sortedLeft.slice(leftIndex), sortedRight.slice(rightIndex));
    };

    // Intro Sort algorithm implementation.
    const introSort = (arr: number[]): number[] => {
        const maxDepth = Math.floor(Math.log2(arr.length)) * 2;

        const partition = (left: number, right: number): number => {
            const pivot = arr[Math.floor((left + right) / 2)];
            let i = left - 1;
            let j = right + 1;
            while (true) {
                do {
                    i++;
                } while (arr[i] < pivot);
                do {
                    j--;
                } while (arr[j] > pivot);
                if (i >= j) {
                    return j;
                }
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        };

        const heapify = (root: number, size: number): void => {
            let largest = root;
            const leftChild = 2 * root + 1;
            const rightChild = 2 * root + 2;
            if (leftChild < size && arr[leftChild] > arr[largest]) {
                largest = leftChild;
            }
            if (rightChild < size && arr[rightChild] > arr[largest]) {
                largest = rightChild;
            }
            if (largest !== root) {
                [arr[root], arr[largest]] = [arr[largest], arr[root]];
                heapify(largest, size);
            }
        };

        const heapSort = (left: number, right: number): void => {
            const buildMaxHeap = (): void => {
                for (let i = Math.floor((right - left + 1) / 2) - 1; i >= left; i--) {
                    heapify(i, right - left + 1);
                }
            };

            buildMaxHeap();
            let end = right;
            while (end > left) {
                [arr[left], arr[end]] = [arr[end], arr[left]];
                end--;
                heapify(left, end - left + 1);
            }
        };

        const introSortHelper = (left: number, right: number, depth: number): void => {
            if (left < right) {
                if (depth === 0) {
                    heapSort(left, right);
                    return;
                }
                const partitionIndex = partition(left, right);
                introSortHelper(left, partitionIndex, depth - 1);
                introSortHelper(partitionIndex + 1, right, depth - 1);
            }
        };

        introSortHelper(0, arr.length - 1, maxDepth);
        return arr;
    };

    // Tim Sort algorithm implementation.
    const timSort = (arr: number[]): number[] => {
        const insertionSort = (arr: number[], left: number, right: number): void => {
            for (let i = left + 1; i <= right; i++) {
                const key = arr[i];
                let j = i - 1;
                while (j >= left && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
        };

        const merge = (arr: number[], l: number, m: number, r: number): void => {
            const len1 = m - l + 1;
            const len2 = r - m;
            const left = new Array(len1);
            const right = new Array(len2);

            for (let i = 0; i < len1; i++) {
                left[i] = arr[l + i];
            }
            for (let j = 0; j < len2; j++) {
                right[j] = arr[m + 1 + j];
            }

            let i = 0;
            let j = 0;
            let k = l;

            while (i < len1 && j < len2) {
                if (left[i] <= right[j]) {
                    arr[k] = left[i];
                    i++;
                } else {
                    arr[k] = right[j];
                    j++;
                }
                k++;
            }

            while (i < len1) {
                arr[k] = left[i];
                i++;
                k++;
            }

            while (j < len2) {
                arr[k] = right[j];
                j++;
                k++;
            }
        };

        const minRunLength = 32;

        const n = arr.length;

        for (let i = 0; i < n; i += minRunLength) {
            insertionSort(arr, i, Math.min(i + minRunLength - 1, n - 1));
        }

        for (let size = minRunLength; size < n; size *= 2) {
            for (let left = 0; left < n; left += 2 * size) {
                const mid = left + size - 1;
                const right = Math.min(left + 2 * size - 1, n - 1);
                merge(arr, left, mid, right);
            }
        }

        return arr;
    };

    const generateRandomString = (length: number): string => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        const poolLength = 256; // Adjust this value as needed for better randomness

        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * poolLength);
            result += characters.charAt(randomIndex % charactersLength);
        }
        return result;
    };

    return {
        generateRandomString,
        removeWhitespace,
        sanitizeAlphaNumericSpace,
        sanitizeAlphaNumericLower,
        sanitizeAlphaNumericUpper,
        sanitizeNumericValue,
        sanitizeIntegerValue,
        sanitizeAlphaLower,
        sanitizeAlphaUpper,
        escapeHTML,
        removeNonPrintableASCII,
        removeControlCharacters,
        trimWhitespace,
        removeDuplicateChars,
        removeExtraWhitespace,
        decodeHTMLEntities,
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
        encodeToBase64,
        decodeFromBase64,
        getCurrentLogDate,
        getCurrentYYYYMMDD,
        getCurrentYYYYMMDDStr,
        getCurrentYYYYMMDDHHmmssSSS,
        getUnixTimestamp,
        toSafeNumber,
        randomIntInRange,
        shuffleArray,
        sanitizeEmail,
        sanitizeUrl,
        sanitizePhoneNumber,
        sanitizeAlphaNumericSpecial,
        sanitizeAlphaNumericAccents,
        sanitizeHtmlTags,
        sanitizeFileName,
        sanitizeJson,
        sanitizeBase64,
        sanitizeHexadecimal,
        sanitizeIPv4,
        sanitizeIPv6,
        sanitizeSSN,
        sanitizeWithAllowedCharacters,
        toPascalCase,
        toConstantCase,
        toTrainCase,
        toMacroCase,
        stringifyJson,
        mapValuesJson,
        mapKeysJson,
        omitJson,
        removeFalsyValues,
        groupObjectsByKey,
        findMaxValue,
        findMinValue,
        calculateMedian,
        calculateStandardDeviation,
        deepClone,
        distinctValues,
        calculateFactorial,
        calculatePower,
        roundToDecimalPlaces,
        generateRange,
        calculateSquareRoot,
        calculateAbsoluteValue,
        calculateLCM,
        toBinary,
        fromBinary,
        toMorseCode,
        fromMorseCode,
        trimStart,
        trimEnd,
        padStart,
        padEnd,
        substring,
        indexOf,
        lastIndexOf,
        extractURLs,
        extractEmails,
        extractHashtags,
        extractMentions,
        removeHTMLTags,
        removeSpecificHTMLTags,
        replaceHTMLEntities,
        encloseStringWith,
        trimMultiLineString,
        padWithAlternatingChars,
        replaceIfSurroundedByWhitespace,
        toFixedLengthWithRepeat,
        formatJson,
        toFixedLengthWithEllipsis,
        toFixedLengthWithFiller,
        toTitleCaseExcept,
        generateFibonacciSequence,
        factorial,
        calculateCircleArea,
        degreesToRadians,
        radiansToDegrees,
        secondsToHHMMSS,
        bytesToHumanReadable,
        getCurrentTimestampInSeconds,
        millisecondsToSeconds,
        secondsToMilliseconds,
        formatDate,
        getCurrentTime,
        introSort,
        mergeSort,
        quickSort,
        timSort,
    };
};

export default utility;
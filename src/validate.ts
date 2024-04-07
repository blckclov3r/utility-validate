type AlphaOption = {
    ignore?: RegExp | string;
}

type LocaleRegex = { [key: string]: RegExp };

const alphaLocales: LocaleRegex = {
    'en-US': /^[A-Za-z]+$/,
    'az-AZ': /^[A-Za-vxyzÇƏĞİıÖŞÜçəğöşıü]+$/,
    'bg-BG': /^[А-Яа-я]+$/,
    'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽa-záčďéěíňóřšťúůýž]+$/,
    'da-DK': /^[A-ZÆØÅa-zæøå]+$/,
    'de-DE': /^[A-ZÄÖÜßa-zäöüß]+$/,
    'el-GR': /^[Α-ωα-ω]+$/,
    'es-ES': /^[A-ZÁÉÍÑÓÚÜa-záéíñóúü]+$/,
    'fa-IR': /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیa-z]+$/,
    'fi-FI': /^[A-ZÅÄÖa-zåäö]+$/,
    'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸa-zàâæçéèêëïîôœùûüÿ]+$/,
    'it-IT': /^[A-ZÀÉÈÌÎÓÒÙa-zàéèìîóòù]+$/,
    'ja-JP': /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/,
    'nb-NO': /^[A-ZÆØÅa-zæøå]+$/,
    'nl-NL': /^[A-ZÁÉËÏÓÖÜÚa-záéëïóöüú]+$/,
    'nn-NO': /^[A-ZÆØÅa-zæøå]+$/,
    'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű]+$/,
    'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹa-ząćęłńóśźż]+$/,
    'pt-PT': /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜa-zãáàâäçéêëíïõóôöúü]+$/,
    'ru-RU': /^[А-ЯЁа-яё]+$/,
    'kk-KZ': /^[А-ЯЁа-яёҘүқіғұұа-яәөіөғүңқұөә]+$/,
    'sl-SI': /^[A-ZČĆĐŠŽa-zčćđšž]+$/,
    'sk-SK': /^[A-ZÁČĎÉÍĽŇÓŠŤÚÝŽa-záčďéíľňóšťúýž]+$/,
    'sr-RS@latin': /^[A-ZČĆŽŠĐa-zčćžšđ]+$/,
    'sr-RS': /^[А-ЯЂЈЉЊЋЏа-яђјљњћџ]+$/,
    'sv-SE': /^[A-ZÅÄÖa-zåäö]+$/,
    'th-TH': /^[ก-๙\s]+$/,
    'tr-TR': /^[A-ZÇĞİıÖŞÜa-zçğıöşü]+$/,
    'uk-UA': /^[А-ЩЬЮЯЄIЇҐіа-щьюяєiїґі]+$/,
    'vi-VN': /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸa-zàáạảãâầấậẩẫăằắặẳẵđèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹ]+$/,
    'ko-KR': /^[가-힣ㄱ-ㅎㅏ-ㅣ]*$/,
    'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ0-9]+$/,
    'ar': /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ0-9]+$/,
    'he': /^[א-ת0-9]+$/,
    'fa': /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی0-9']+$/,
    'bn': /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻0-9']+$/,
    'hi-IN': /^[\u0900-\u0963]+[\u0966-\u097F0-9]*$/,
    'si-LK': /^[0-9\u0D80-\u0DFF]+$/,
};

const alphaNumericLocales: LocaleRegex = {
    ...alphaLocales,
    'ko-KR': /^[0-9가-힣]*$/,
    'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    'vi-VN': /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    'ar': /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    'he': /^[0-9א-ת]+$/,
    'fa': /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
    'bn': /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    'hi-IN': /^[\u0900-\u0963]+[\u0966-\u097F0-9]*$/,
    'si-LK': /^[0-9\u0D80-\u0DFF]+$/i
};

const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validates if the input value is a valid MAC address in the format "00:1A:2B:3C:4D:5E" or "00-1A-2B-3C-4D-5E"
    const isValidMACAddress = (value: string): boolean => {
        const macAddressRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        return macAddressRegex.test(value);
    };

    // Checks if the input value is an integer
    const isInteger = (value: any): boolean => {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };

    // Checks if a value is a number
    const isNumber = <T>(value: T): boolean => {
        return typeof value === 'number';
    };

    // Checks if a value is a boolean
    const isBoolean = <T>(value: T): boolean => {
        return typeof value === 'boolean';
    };

    // Checks if a value is a function
    const isFunction = <T>(value: T): boolean => {
        return typeof value === 'function';
    };

    // Checks if a value is a symbol
    const isSymbol = <T>(value: T): boolean => {
        return typeof value === 'symbol';
    };

    // Checks if a value is undefined
    const isUndefined = <T>(value: T): boolean => {
        return value === undefined;
    };

    // Checks if a value is null
    const isNull = <T>(value: T): boolean => {
        return value === null;
    };


    // Checks if the input value is a float (non-integer number)
    const isFloat = (value: any): boolean => {
        return typeof value === 'number' && isFinite(value) && !Number.isInteger(value);
    };

    // Checks if a value is an object
    const isObject = <T>(value: T): boolean => {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    };

    const isTruthy = <T, >(value: T): boolean => !!value;

    // Checks if a value is falsy
    const isFalsy = <T, >(value: T): boolean => !value;

    // Checks if a value is an error object
    const isError = <T>(value: T): boolean => {
        return value instanceof Error;
    };

    // Checks if a value is a regular expression
    const isRegExp = <T>(value: T): boolean => {
        return value instanceof RegExp;
    };

    // Checks if a value is a Promise
    const isPromise = <T>(value: T): boolean => {
        return value instanceof Promise;
    };

    // Checks if a value is a Blob object
    const isBlob = <T>(value: T): boolean => {
        return typeof Blob !== 'undefined' && value instanceof Blob;
    };

    // Checks if a value is a File object
    const isFile = <T>(value: T): boolean => {
        return typeof File !== 'undefined' && value instanceof File;
    };

    // Checks if a value is a BigInt object
    const isBigInt = <T>(value: T): boolean => {
        return typeof BigInt !== 'undefined' && value instanceof BigInt;
    };

    // Check if a string is a valid credit card number using Luhn algorithm
    const isValidCreditCard = (value: string): boolean => {
        const sanitizedValue = value.replace(/\D/g, '');
        let sum = 0;
        let doubleUp = false;
        // Loop through each digit from right to left
        for (let i = sanitizedValue.length - 1; i >= 0; i--) {
            let digit = parseInt(sanitizedValue.charAt(i));
            if (doubleUp) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            doubleUp = !doubleUp;
        }
        return sum % 10 === 0;
    };

    // Validate if a value is a Date object
    const isDate = (value: unknown): boolean => {
        return value instanceof Date && !isNaN((value as Date).getTime());
    };

    // Check if two arrays are deeply equal
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

    // Check if two objects have the same properties and values
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

    // Check if a value is empty (null, undefined, empty string, empty array, empty object)
    const isEmpty = <T>(value: T): boolean => {
        if (value === null || value === undefined) {
            return true;
        }

        if (Array.isArray(value) || typeof value === 'string' || typeof value === 'object') {
            return Object.keys(value).length === 0;
        }

        return false;
    };

    // Validate if a string contains only ASCII characters
    const isAscii = (value: string): boolean => {
        return /^[\x00-\x7F]*$/.test(value);
    };

    // Validate if a string is a decimal number
    const isDecimal = (value: string): boolean => {
        return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
    };

    // Validate if a string is divisible by another string representing a number
    const isDivisibleBy = (value: string, divisor: string): boolean => {
        if (!isDecimal(value) || !isDecimal(divisor) || parseFloat(divisor) === 0) {
            return false;
        }

        return parseFloat(value) % parseFloat(divisor) === 0;
    };

    // Validate if a string is a hexadecimal number
    const isHexadecimal = (value: string): boolean => {
        return /^[0-9A-F]+$/i.test(value);
    };

    // Validate if a string is a hexadecimal color code
    const isHexColor = (value: string): boolean => {
        return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(value);
    };

    // Validate if a string is in HSL (Hue, Saturation, Lightness) format
    const isHSL = (value: string): boolean => {
        return /^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/i.test(value);
    };

    // Validate if a string is a valid International Mobile Equipment Identity (IMEI) number
    const isIMEI = (value: string): boolean => {
        return /^\d{15}$/.test(value);
    };

    // Validate if a string is a valid International Standard Book Number (ISBN)
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

    // Validate if a string is a valid JSON
    const isJSON = (value: string): boolean => {
        try {
            JSON.parse(value);
            return true;
        } catch {
            return false;
        }
    };

    // Validate if a string is a valid JSON Web Token (JWT)
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

    // Validate a URL
    const isURL = (value: string): boolean => {
        try {
            new URL(value);
            return true;
        } catch {
            return false;
        }
    };

    // Check if a string contains only whitespace characters
    const isWhitespace = (str: string): boolean => {
        return /^\s*$/.test(str);
    };

    // Check if a string is a valid IP address (IPv4)
    const isValidIPAddress = (value: string): boolean => {
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ipRegex.test(value);
    };

    // Validate if a string is a valid URL
    const isValidURL = (url: string): boolean => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    // Validate if a string is a valid Social Security Number (SSN)
    const isValidSSN = (value: string): boolean => {
        // Basic validation for Social Security Number (SSN) in XXX-XX-XXXX or XXXXXXXXX format
        const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/;
        return ssnRegex.test(value);
    };

    // Validate if a string is a valid Vehicle Identification Number (VIN)
    const isValidVIN = (value: string): boolean => {
        // Basic validation for Vehicle Identification Number (VIN) - 17 characters
        return /^[A-HJ-NPR-Z0-9]{17}$/i.test(value);
    };

    // Validate if a number is a valid latitude value
    const isValidLatitude = (value: number): boolean => {
        // Basic latitude validation (-90 to 90)
        return value >= -90 && value <= 90;
    };

    // Validate if a number is a valid longitude value
    const isValidLongitude = (value: number): boolean => {
        // Basic longitude validation (-180 to 180)
        return value >= -180 && value <= 180;
    };

    // Check if a string is a palindrome
    const isPalindrome = (str: string): boolean => {
        const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    };

    // Validate an email address
    const isValidEmail = (email: string): boolean => {
        return emailRegex.test(email);
    };

    // Check if a string is empty or contains only whitespace
    const isEmptyStr = (str: string): boolean => {
        return str?.trim() === '';
    };

    // Regular expressions for validation
    const alphaRegex = /^[A-Z]+$/i;
    const numericRegex = /^[0-9]+$/;

    // Check if a string contains only characters allowed by a specified regex pattern
    const isOnlyChars = (str: string, regex: RegExp, options: AlphaOption = {}): boolean => {
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
    }

    // Check if a string contains only alphabetic characters
    const isOnlyAlpha = (str: string, options: AlphaOption = {}): boolean => {
        return isOnlyChars(str, alphaRegex, options);
    }

    // Check if a string contains only numeric characters
    const isOnlyNumeric = (str: string, options: AlphaOption = {}): boolean => {
        return isOnlyChars(str, numericRegex, options);
    }

    // Check if a string contains only alphanumeric characters
    const isOnlyAlphanumeric = (str: string, options: AlphaOption = {}): boolean => {
        return isOnlyAlpha(str, options) || isOnlyNumeric(str, options);
    };

    // Check if a number string can be safely converted to a JavaScript Number
    const isSafeNumberString = (numStr: string): boolean => {
        const num = Number(numStr);
        return !isNaN(num) && Number.isSafeInteger(num);
    };

    // Check if a string is empty or consists of whitespace characters only
    const isEmptyOrWhitespace = (str: string): boolean => {
        return !str || !str.trim();
    };

    const isObjectEmpty = (obj: Record<string, any>): boolean => {
        return Object.keys(obj).length === 0;
    };

    // Check if a string is a valid MIME type
    const isMimeType = (value: string): boolean => {
        const mimeTypeRegex = /^[a-z]+\/[a-z0-9-]+$/i;
        return mimeTypeRegex.test(value);
    };

    // Check if a string is a valid slug
    const isSlug = (value: string): boolean => {
        const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
        return slugRegex.test(value);
    };

    // Check if a string is a strong password (at least 8 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character)
    const isStrongPassword = (value: string): boolean => {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        return strongPasswordRegex.test(value);
    };

    // Function to check if a string contains only alpha characters for a specific locale
    const isAlpha = (str: string, locale: string = 'en-US'): boolean => {
        const regex = alphaLocales[locale];
        if (!regex) {
            throw new Error(`Locale ${locale} is not supported for alpha validation.`);
        }

        return regex.test(str);
    };

    // Function to check if a string contains only alphanumeric characters for a specific locale
    const isAlphaNumeric = (str: string, locale: string = 'en-US'): boolean => {
        const regex = alphaNumericLocales[locale];
        if (!regex) {
            throw new Error(`Locale ${locale} is not supported for alphanumeric validation.`);
        }

        return regex.test(str);
    };

    const hasSpecialCharacters = (str: string): boolean => {
        const regex = /[!@#$%^&*(),.?":{}|<>]/g;
        return regex.test(str);
    };

    const hasUppercase = (str: string): boolean => {
        const regex = /[A-Z]/;
        return regex.test(str);
    };

    const hasLowercase = (str: string): boolean => {
        const regex = /[a-z]/;
        return regex.test(str);
    };

    const hasNumeric = (str: string): boolean => {
        const regex = /[0-9]/;
        return regex.test(str);
    };

    const hasWhitespace = (str: string): boolean => {
        const regex = /\s/;
        return regex.test(str);
    };

    const isDivisible = (num: number, divisor: number): boolean => {
        return num % divisor === 0;
    };

    return {
        isDecimal,
        isDivisible,
        isValidMACAddress,
        isInteger,
        isFloat,
        isObject,
        isTruthy,
        isFalsy,
        isError,
        isRegExp,
        isPromise,
        isNumber,
        isBoolean,
        isFunction,
        isSymbol,
        isUndefined,
        isNull,
        isBlob,
        isFile,
        isBigInt,
        isValidCreditCard,
        isURL,
        isDate,
        isEmpty,
        isEqualArray,
        isEqualObject,
        isAscii,
        isDivisibleBy,
        isHexadecimal,
        isHexColor,
        isHSL,
        isIMEI,
        isISBN,
        isJSON,
        isJWT,
        isValidEmail,
        isEmptyStr,
        isPalindrome,
        isValidURL,
        isValidSSN,
        isValidVIN,
        isValidLatitude,
        isValidLongitude,
        isWhitespace,
        isValidIPAddress,
        isOnlyAlpha,
        isOnlyNumeric,
        isOnlyAlphanumeric,
        isSafeNumberString,
        isEmptyOrWhitespace,
        isObjectEmpty,
        isMimeType,
        isSlug,
        isStrongPassword,
        isAlpha,
        isAlphaNumeric,
        hasSpecialCharacters,
        hasUppercase,
        hasLowercase,
        hasNumeric,
        hasWhitespace,
    }
}
export default validate;
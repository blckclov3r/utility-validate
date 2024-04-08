import utility from "./utility";
import validate from "./validate";

const utilityValidate = () => {
    const {
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
    } = utility();
    const {
        isPositive,
        isNegative,
        isZero,
        isEmptyJson,
        isIPv4,
        isIPv6,
        isLeapYear,
        isPrime,
        isEven,
        isInRange,
        isOdd,
        isDecimal,
        isDivisible,
        isMACAddress,
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
        isCreditCard,
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
        isEmail,
        isPalindrome,
        isSSN,
        isVIN,
        isLatitude,
        isLongitude,
        isWhitespace,
        isIPAddress,
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
        isString,
    } = validate();
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
        isPositive,
        isNegative,
        isZero,
        isEmptyJson,
        isIPv4,
        isIPv6,
        isLeapYear,
        isPrime,
        isEven,
        isInRange,
        isOdd,
        isDecimal,
        isDivisible,
        isMACAddress,
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
        isCreditCard,
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
        isEmail,
        isPalindrome,
        isSSN,
        isVIN,
        isLatitude,
        isLongitude,
        isWhitespace,
        isIPAddress,
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
        isString,
    }
};

export default utilityValidate;
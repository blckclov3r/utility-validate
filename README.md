# utility-validate

A collection of validators, sanitizers, and utilities.

[![npm version](https://img.shields.io/npm/v/utility-validate?style=flat-square&alt=utility-validate)](https://www.npmjs.com/package/utility-validate)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/utility-validate)](https://bundlephobia.com/result?p=utility-validate)
[![Downloads](https://img.shields.io/npm/dt/utility-validate.svg?style=flat-square)](https://www.npmjs.com/package/utility-validate)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/blckclov3r)
[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/utility-validate)

## Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [License](#license)

## Installation

Install via NPM:

```bash
npm install utility-validate
```

Or via Yarn:

```bash
yarn add utility-validate
```

## Usage

First, import the `utility-validate` function:

```typescript
import utilityValidate from 'utility-validate';
```

You can now utilize the library's methods:

```typescript
const {isEmail, removeWhitespace, sanitizeAlphaNumericSpace} = utilityValidate();
const email = isEmail('blckclov3r@gmail.com')
console.log(email) // true
```

If you prefer not to install the package and want to include the entry point directly in your project, you can use the
following script tags:

- [https://cdn.jsdelivr.net/npm/utility-validate@1.0.6/dist/index.mjs](https://cdn.jsdelivr.net/npm/utility-validate@1.0.6/dist/index.mjs)
- [https://unpkg.com/utility-validate@1.0.6/dist/index.mjs](https://unpkg.com/utility-validate@1.0.6/dist/index.mjs)

```html

<script type="module">
    import {isEmail} from 'https://unpkg.com/utility-validate@1.0.6/dist/index.mjs';

    const email = isEmail('blckclov3r@gmail.com')
    console.log(email) // true
</script>
```

If you're using an IIFE, you can include the following script tag:

```html

<script src="https://cdn.jsdelivr.net/npm/utility-validate@1.0.6/dist/index.global.js"></script>
```

## Utility

| Function Name                   | Description                                                                              |
|---------------------------------|------------------------------------------------------------------------------------------|
| generateRandomString            | Generates a random string.                                                               |
| removeWhitespace                | Removes whitespace from a string.                                                        |
| sanitizeAlphaNumericSpace       | Sanitizes a string, keeping alphanumeric characters and spaces.                          |
| sanitizeAlphaNumericLower       | Sanitizes a string, keeping only lowercase alphanumeric characters.                      |
| sanitizeAlphaNumericUpper       | Sanitizes a string, keeping only uppercase alphanumeric characters.                      |
| sanitizeNumericValue            | Sanitizes a string, keeping only numeric characters.                                     |
| sanitizeIntegerValue            | Sanitizes a string, keeping only integer values.                                         |
| sanitizeAlphaLower              | Sanitizes a string, keeping only lowercase alphabetic characters.                        |
| sanitizeAlphaUpper              | Sanitizes a string, keeping only uppercase alphabetic characters.                        |
| escapeHTML                      | Escapes HTML special characters in a string.                                             |
| removeNonPrintableASCII         | Removes non-printable ASCII characters from a string.                                    |
| removeControlCharacters         | Removes control characters from a string.                                                |
| trimWhitespace                  | Trims whitespace from the beginning and end of a string.                                 |
| removeDuplicateChars            | Removes duplicate characters from a string.                                              |
| removeExtraWhitespace           | Removes extra whitespace from a string.                                                  |
| decodeHTMLEntities              | Decodes HTML entities in a string.                                                       |
| countCharacter                  | Counts occurrences of a character in a string.                                           |
| collapseSpaces                  | Collapses consecutive spaces in a string to a single space.                              |
| removeNonNumeric                | Removes non-numeric characters from a string.                                            |
| extractNumbers                  | Extracts numeric values from a string.                                                   |
| reverseString                   | Reverses a string.                                                                       |
| capitalizeStr                   | Capitalizes the first letter of each word in a string.                                   |
| truncateStr                     | Truncates a string to a specified length.                                                |
| slugify                         | Converts a string to a URL-friendly slug.                                                |
| countWords                      | Counts the number of words in a string.                                                  |
| replaceStr                      | Replaces occurrences of a substring in a string.                                         |
| toKebabCase                     | Converts a string to kebab case.                                                         |
| toSnakeCase                     | Converts a string to snake case.                                                         |
| toCamelCase                     | Converts a string to camel case.                                                         |
| startsWith                      | Checks if a string starts with a specified substring.                                    |
| endsWith                        | Checks if a string ends with a specified substring.                                      |
| contains                        | Checks if a string contains a specified substring.                                       |
| splitString                     | Splits a string into an array of substrings.                                             |
| encodeToBase64                  | Encodes a string to Base64.                                                              |
| decodeFromBase64                | Decodes a Base64 string.                                                                 |
| getCurrentLogDate               | Gets the current date formatted for logging.                                             |
| getCurrentYYYYMMDD              | Gets the current date in YYYYMMDD format.                                                |
| getCurrentYYYYMMDDStr           | Gets the current date as a string in YYYYMMDD format.                                    |
| getCurrentYYYYMMDDHHmmssSSS     | Gets the current date and time in YYYYMMDDHHmmssSSS format.                              |
| getUnixTimestamp                | Gets the current Unix timestamp.                                                         |
| toSafeNumber                    | Converts a value to a safe number.                                                       |
| randomIntInRange                | Generates a random integer within a specified range.                                     |
| shuffleArray                    | Shuffles the elements of an array.                                                       |
| sanitizeEmail                   | Sanitizes an email address.                                                              |
| sanitizeUrl                     | Sanitizes a URL.                                                                         |
| sanitizePhoneNumber             | Sanitizes a phone number.                                                                |
| sanitizeAlphaNumericSpecial     | Sanitizes a string, keeping alphanumeric characters and special characters.              |
| sanitizeAlphaNumericAccents     | Sanitizes a string, keeping alphanumeric characters and accents.                         |
| sanitizeHtmlTags                | Sanitizes HTML tags from a string.                                                       |
| sanitizeFileName                | Sanitizes a filename.                                                                    |
| sanitizeJson                    | Sanitizes JSON data.                                                                     |
| sanitizeBase64                  | Sanitizes a Base64 string.                                                               |
| sanitizeHexadecimal             | Sanitizes a hexadecimal string.                                                          |
| sanitizeIPv4                    | Sanitizes an IPv4 address.                                                               |
| sanitizeIPv6                    | Sanitizes an IPv6 address.                                                               |
| sanitizeSSN                     | Sanitizes a Social Security Number (SSN).                                                |
| sanitizeWithAllowedCharacters   | Sanitizes a string, keeping only specified allowed characters.                           |
| toPascalCase                    | Converts a string to Pascal case.                                                        |
| toConstantCase                  | Converts a string to constant case.                                                      |
| toTrainCase                     | Converts a string to train case.                                                         |
| toMacroCase                     | Converts a string to macro case.                                                         |
| stringifyJson                   | Converts JSON data to a string.                                                          |
| mapValuesJson                   | Maps values of a JSON object.                                                            |
| mapKeysJson                     | Maps keys of a JSON object.                                                              |
| omitJson                        | Omits specified keys from a JSON object.                                                 |
| removeFalsyValues               | Removes falsy values from an array.                                                      |
| groupObjectsByKey               | Groups objects in an array by a specified key.                                           |
| findMaxValue                    | Finds the maximum value in an array.                                                     |
| findMinValue                    | Finds the minimum value in an array.                                                     |
| calculateMedian                 | Calculates the median of an array of numbers.                                            |
| calculateStandardDeviation      | Calculates the standard deviation of an array of numbers.                                |
| deepClone                       | Creates a deep clone of an object.                                                       |
| distinctValues                  | Finds distinct values in an array.                                                       |
| calculateFactorial              | Calculates the factorial of a number.                                                    |
| calculatePower                  | Calculates the power of a number.                                                        |
| roundToDecimalPlaces            | Rounds a number to a specified number of decimal places.                                 |
| generateRange                   | Generates a range of numbers.                                                            |
| calculateSquareRoot             | Calculates the square root of a number.                                                  |
| calculateAbsoluteValue          | Calculates the absolute value of a number.                                               |
| calculateLCM                    | Calculates the least common multiple of two numbers.                                     |
| toBinary                        | Converts a number to binary.                                                             |
| fromBinary                      | Converts binary to a number.                                                             |
| toMorseCode                     | Converts a string to Morse code.                                                         |
| fromMorseCode                   | Converts Morse code to a string.                                                         |
| trimStart                       | Trims whitespace from the beginning of a string.                                         |
| trimEnd                         | Trims whitespace from the end of a string.                                               |
| padStart                        | Pads the start of a string with specified characters.                                    |
| padEnd                          | Pads the end of a string with specified characters.                                      |
| substring                       | Extracts a substring from a string.                                                      |
| indexOf                         | Returns the index of the first occurrence of a substring in a string.                    |
| lastIndexOf                     | Returns the index of the last occurrence of a substring in a string.                     |
| extractURLs                     | Extracts URLs from a string.                                                             |
| extractEmails                   | Extracts email addresses from a string.                                                  |
| extractHashtags                 | Extracts hashtags from a string.                                                         |
| extractMentions                 | Extracts mentions from a string.                                                         |
| removeHTMLTags                  | Removes HTML tags from a string.                                                         |
| removeSpecificHTMLTags          | Removes specific HTML tags from a string.                                                |
| replaceHTMLEntities             | Replaces HTML entities in a string.                                                      |
| encloseStringWith               | Encloses a string with specified characters.                                             |
| trimMultiLineString             | Trims whitespace from the beginning and end of each line in a multiline string.          |
| padWithAlternatingChars         | Pads a string with alternating characters.                                               |
| replaceIfSurroundedByWhitespace | Replaces a substring if it's surrounded by whitespace.                                   |
| toFixedLengthWithRepeat         | Truncates or pads a string to a fixed length, repeating characters if necessary.         |
| formatJson                      | Formats JSON data for readability.                                                       |
| toFixedLengthWithEllipsis       | Truncates or pads a string to a fixed length, adding an ellipsis if necessary.           |
| toFixedLengthWithFiller         | Truncates or pads a string to a fixed length, filling with a specified filler character. |
| toTitleCaseExcept               | Converts a string to title case, excluding specified words.                              |
| generateFibonacciSequence       | Generates a Fibonacci sequence up to a specified length.                                 |
| factorial                       | Calculates the factorial of a number.                                                    |
| calculateCircleArea             | Calculates the area of a circle.                                                         |
| degreesToRadians                | Converts degrees to radians.                                                             |
| radiansToDegrees                | Converts radians to degrees.                                                             |
| secondsToHHMMSS                 | Converts seconds to HH:MM:SS format.                                                     |
| bytesToHumanReadable            | Converts bytes to a human-readable format.                                               |
| getCurrentTimestampInSeconds    | Gets the current timestamp in seconds.                                                   |
| millisecondsToSeconds           | Converts milliseconds to seconds.                                                        |
| secondsToMilliseconds           | Converts seconds to milliseconds.                                                        |
| formatDate                      | Formats a date according to specified format.                                            |
| getCurrentTime                  | Gets the current time in HH:MM:SS format.                                                |
| introSort                       | Sorts an array using intro sort algorithm.                                               |
| mergeSort                       | Sorts an array using merge sort algorithm.                                               |
| quickSort                       | Sorts an array using quick sort algorithm.                                               |
| timSort                         | Sorts an array using Timsort algorithm.                                                  |

## Validate

| Function Name        | Description                                                         |
|----------------------|---------------------------------------------------------------------|
| isPositive           | Checks if a number is positive.                                     |
| isNegative           | Checks if a number is negative.                                     |
| isZero               | Checks if a number is zero.                                         |
| isEmptyJson          | Checks if a JSON object is empty.                                   |
| isIPv4               | Checks if a string is an IPv4 address.                              |
| isIPv6               | Checks if a string is an IPv6 address.                              |
| isLeapYear           | Checks if a year is a leap year.                                    |
| isPrime              | Checks if a number is a prime number.                               |
| isEven               | Checks if a number is even.                                         |
| isInRange            | Checks if a number is within a specified range.                     |
| isOdd                | Checks if a number is odd.                                          |
| isDecimal            | Checks if a number is a decimal.                                    |
| isDivisible          | Checks if a number is divisible by another.                         |
| isMACAddress         | Checks if a string is a MAC address.                                |
| isInteger            | Checks if a number is an integer.                                   |
| isFloat              | Checks if a number is a float.                                      |
| isObject             | Checks if a value is an object.                                     |
| isTruthy             | Checks if a value is truthy.                                        |
| isFalsy              | Checks if a value is falsy.                                         |
| isError              | Checks if a value is an error.                                      |
| isRegExp             | Checks if a value is a regular expression.                          |
| isPromise            | Checks if a value is a promise.                                     |
| isNumber             | Checks if a value is a number.                                      |
| isBoolean            | Checks if a value is a boolean.                                     |
| isFunction           | Checks if a value is a function.                                    |
| isSymbol             | Checks if a value is a symbol.                                      |
| isUndefined          | Checks if a value is undefined.                                     |
| isNull               | Checks if a value is null.                                          |
| isBlob               | Checks if a value is a Blob object.                                 |
| isFile               | Checks if a value is a File object.                                 |
| isBigInt             | Checks if a value is a BigInt.                                      |
| isCreditCard         | Checks if a string is a credit card number.                         |
| isURL                | Checks if a string is a URL.                                        |
| isDate               | Checks if a value is a Date object.                                 |
| isEmpty              | Checks if a value is empty.                                         |
| isEqualArray         | Checks if two arrays are equal.                                     |
| isEqualObject        | Checks if two objects are equal.                                    |
| isAscii              | Checks if a string contains only ASCII characters.                  |
| isDivisibleBy        | Checks if a number is divisible by a specified value.               |
| isHexadecimal        | Checks if a string is a hexadecimal number.                         |
| isHexColor           | Checks if a string is a hexadecimal color code.                     |
| isHSL                | Checks if a string is an HSL color code.                            |
| isIMEI               | Checks if a string is an IMEI number.                               |
| isISBN               | Checks if a string is an ISBN number.                               |
| isJSON               | Checks if a string is a valid JSON.                                 |
| isJWT                | Checks if a string is a JSON Web Token (JWT).                       |
| isEmail              | Checks if a string is an email address.                             |
| isPalindrome         | Checks if a string is a palindrome.                                 |
| isSSN                | Checks if a string is a Social Security Number (SSN).               |
| isVIN                | Checks if a string is a Vehicle Identification Number (VIN).        |
| isLatitude           | Checks if a string is a latitude coordinate.                        |
| isLongitude          | Checks if a string is a longitude coordinate.                       |
| isWhitespace         | Checks if a string contains only whitespace characters.             |
| isIPAddress          | Checks if a string is an IP address.                                |
| isOnlyAlpha          | Checks if a string contains only alphabetic characters.             |
| isOnlyNumeric        | Checks if a string contains only numeric characters.                |
| isOnlyAlphanumeric   | Checks if a string contains only alphanumeric characters.           |
| isSafeNumberString   | Checks if a string represents a safe number.                        |
| isEmptyOrWhitespace  | Checks if a string is empty or contains only whitespace characters. |
| isObjectEmpty        | Checks if an object is empty.                                       |
| isMimeType           | Checks if a string is a valid MIME type.                            |
| isSlug               | Checks if a string is a URL slug.                                   |
| isStrongPassword     | Checks if a string is a strong password.                            |
| isAlpha              | Checks if a string contains only alphabetic characters.             |
| isAlphaNumeric       | Checks if a string contains only alphanumeric characters.           |
| hasSpecialCharacters | Checks if a string contains special characters.                     |
| hasUppercase         | Checks if a string contains uppercase characters.                   |
| hasLowercase         | Checks if a string contains lowercase characters.                   |
| hasNumeric           | Checks if a string contains numeric characters.                     |
| hasWhitespace        | Checks if a string contains whitespace characters.                  |
| isString             | Checks if a value is a string.                                      |

## Contribution

Contributions are welcome! If you'd like to contribute to `utility-validate`, please follow these guidelines:

- Fork the repository on GitHub.
- Clone your forked repository (`git clone https://github.com/blckclov3r/utility-validate`).
- Create a new branch for your changes (`git checkout -b your-branch-name`).
- Make your changes.
- Commit your changes (`git commit -am 'Description of your changes'`).
- Push your changes to your branch (`git push origin your-branch-name`).
- Create a Pull Request on GitHub.

## License

MIT &copy; [blckclov3r](https://github.com/blckclov3r/utility-validate?tab=MIT-1-ov-file)
# utility-validate

A collection of validators, sanitizers, and utilities.

[![npm version](https://img.shields.io/npm/v/utility-validate?style=flat-square&alt=utility-validate)](https://www.npmjs.com/package/utility-validate)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/utility-validate)](https://bundlephobia.com/result?p=utility-validate)
[![Downloads](https://img.shields.io/npm/dt/utility-validate.svg?style=flat-square)](https://www.npmjs.com/package/utility-validate)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/blckclov3r)
[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/utility-validate)

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

You can now utilize the library's methods to retrieve postal code, municipality, location, and region information.

```typescript
const utility = utilityValidate();
const isValid = utility.isValidEmail('blckclov3r@gmail.com')
console.log(isValid) // true
```

## ESM Entry Point

If you prefer not to install the package and want to include the ECMAScript module (ESM) entry point directly in your
project, you can use the following script tag:

- [https://cdn.jsdelivr.net/npm/utility-validate@1.0.3/dist/index.mjs](https://cdn.jsdelivr.net/npm/utility-validate@1.0.3/dist/index.mjs)
- [https://unpkg.com/utility-validate@1.0.3/dist/index.mjs](https://unpkg.com/utility-validate@1.0.3/dist/index.mjs)

```
<script type="module">
    import usePostalPH from 'https://unpkg.com/utility-validate@1.0.3/dist/index.mjs';
</script>
```

# Utility

| Function Name               | Description                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------|
| removeWhitespace            | Remove all whitespace from a string                                                            |
| sanitizeAlphaNumericSpace   | Sanitize a string by removing non-alphanumeric characters and spaces                           |
| sanitizeAlphaNumericLower   | Sanitize a string by removing non-alphanumeric characters, spaces, and converting to lowercase |
| sanitizeAlphaNumericUpper   | Sanitize a string by removing non-alphanumeric characters, spaces, and converting to uppercase |
| sanitizeNumericValue        | Sanitize a string by removing non-numeric characters and converting to number                  |
| sanitizeIntegerValue        | Sanitize a string by removing non-numeric characters and converting to integer                 |
| sanitizeAlphaLower          | Sanitize a string by removing non-alphabetic characters and converting to lowercase            |
| sanitizeAlphaUpper          | Sanitize a string by removing non-alphabetic characters and converting to uppercase            |
| stripHTMLTags               | Sanitize a string by removing HTML tags                                                        |
| escapeHTML                  | Escape HTML entities in a string                                                               |
| removeNonPrintableASCII     | Sanitize a string by removing non-printable ASCII characters                                   |
| removeControlCharacters     | Sanitize a string by removing control characters                                               |
| trimWhitespace              | Trim leading and trailing whitespace from a string                                             |
| removeDuplicateChars        | Sanitize a string by removing consecutive duplicate characters                                 |
| removeExtraWhitespace       | Sanitize a string by replacing consecutive whitespace characters with a single space           |
| unescapeHTML                | Convert HTML entities in a string to their corresponding characters                            |
| countCharacter              | Get the character count of a specific character in a string                                    |
| collapseSpaces              | Replace multiple spaces with a single space in a string                                        |
| removeNonNumeric            | Remove non-numeric characters from a string                                                    |
| extractNumbers              | Extract numbers from a string                                                                  |
| reverseString               | Reverse a string                                                                               |
| capitalizeStr               | Capitalize the first letter of a string                                                        |
| truncateStr                 | Truncate a string to a specified length and append ellipsis if necessary                       |
| slugify                     | Convert a string to a URL-friendly slug                                                        |
| countWords                  | Count the number of words in a string                                                          |
| replaceStr                  | Replace occurrences of a substring within a string                                             |
| toKebabCase                 | Convert a string to kebab case (e.g., "hello world" => "hello-world")                          |
| toSnakeCase                 | Convert a string to snake case (e.g., "hello world" => "hello_world")                          |
| toCamelCase                 | Convert a string to camel case (e.g., "hello world" => "helloWorld")                           |
| startsWith                  | Check if a string starts with a specified prefix                                               |
| endsWith                    | Check if a string ends with a specified suffix                                                 |
| contains                    | Check if a string contains a specified substring                                               |
| splitString                 | Split a string into an array of substrings using a specified separator                         |
| generateRandomUUID          | Generate a random UUID                                                                         |
| encodeToBase64              | Encode data to Base64                                                                          |
| decodeFromBase64            | Decode Base64 encoded data                                                                     |
| createHmac                  | Create a HMAC (hash-based message authentication code)                                         |
| hashWithSHA256              | Hash data using SHA-256 algorithm                                                              |
| hashWithSHA1                | Hash data using SHA-1 algorithm                                                                |
| hashWithMD5                 | Hash data using MD5 algorithm                                                                  |
| generateRandomString        | Generate a random string                                                                       |
| encryptData                 | Encrypt data using a specified algorithm and key                                               |
| decryptData                 | Decrypt encrypted data using a specified algorithm and key                                     |
| getCurrentLogDate           | Get the current date in the format 'YYYY-MM-DD HH:mm:ss.SSS'                                   |
| getCurrentYYYYMMDD          | Get the current date in the format 'YYYY-MM-DD'                                                |
| getCurrentYYYYMMDDStr       | Get the current date in the format 'YYYYMMDD'                                                  |
| getCurrentYYYYMMDDHHmmssSSS | Get the current date in the format 'YYYY-MM-DD HH:mm:ss.SSS' with custom separator             |
| getUnixTimestamp            | Get the Unix timestamp                                                                         |
| toSafeNumber                | Convert a number string to a safe JavaScript Number                                            |
| randomIntInRange            | Generate a random integer between the inclusive `lower` and exclusive `upper` bounds           |
| shuffleArray                | Shuffle an array                                                                               |
| hashWithSHA512              | Hash data using SHA-512 algorithm                                                              |
| hashPasswordWithSHA512      | Hash password with SHA-512 algorithm and salt                                                  |
| hashPasswordWithSHA256      | Hash password with SHA-256 algorithm and salt                                                  |
| generateSalt                | Generate a random salt                                                                         |
| hashWithSHA384              | Hash data using SHA-384 algorithm                                                              |
| hashPasswordSHA384          | Hash password with SHA-384 algorithm and salt                                                  |

# Validate

| Function Name        | Description                                                                                                                                                    |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isDecimal            | Validates if a string is a decimal number.                                                                                                                     |
| isDivisible          | Checks if a number is divisible by another number.                                                                                                             |
| isValidMACAddress    | Validates if the input value is a valid MAC address.                                                                                                           |
| isInteger            | Checks if the input value is an integer.                                                                                                                       |
| isFloat              | Validates if the input value is a float (non-integer number).                                                                                                  |
| isObject             | Checks if a value is an object.                                                                                                                                |
| isTruthy             | Checks if a value is truthy.                                                                                                                                   |
| isFalsy              | Checks if a value is falsy.                                                                                                                                    |
| isError              | Checks if a value is an error object.                                                                                                                          |
| isRegExp             | Checks if a value is a regular expression.                                                                                                                     |
| isPromise            | Checks if a value is a Promise.                                                                                                                                |
| isNumber             | Checks if a value is a number.                                                                                                                                 |
| isBoolean            | Checks if a value is a boolean.                                                                                                                                |
| isFunction           | Checks if a value is a function.                                                                                                                               |
| isSymbol             | Checks if a value is a symbol.                                                                                                                                 |
| isUndefined          | Checks if a value is undefined.                                                                                                                                |
| isNull               | Checks if a value is null.                                                                                                                                     |
| isBlob               | Checks if a value is a Blob object.                                                                                                                            |
| isFile               | Checks if a value is a File object.                                                                                                                            |
| isBigInt             | Checks if a value is a BigInt object.                                                                                                                          |
| isValidCreditCard    | Validates if a credit card number is valid.                                                                                                                    |
| isURL                | Checks if a string is a valid URL.                                                                                                                             |
| isDate               | Checks if a value is a valid date.                                                                                                                             |
| isEmpty              | Checks if a value is empty (null, undefined, empty string, empty array, empty object).                                                                         |
| isEqualArray         | Checks if two arrays are deeply equal.                                                                                                                         |
| isEqualObject        | Checks if two objects are deeply equal.                                                                                                                        |
| isAscii              | Checks if a string contains only ASCII characters.                                                                                                             |
| isDivisibleBy        | Checks if a number is divisible by another number.                                                                                                             |
| isHexadecimal        | Checks if a string is a hexadecimal number.                                                                                                                    |
| isHexColor           | Checks if a string is a hexadecimal color.                                                                                                                     |
| isHSL                | Checks if a string is a valid HSL (hue, saturation, lightness) color.                                                                                          |
| isIMEI               | Checks if a string is a valid International Mobile Equipment Identity (IMEI) number.                                                                           |
| isISBN               | Checks if a string is a valid International Standard Book Number (ISBN).                                                                                       |
| isJSON               | Checks if a string is a valid JSON string.                                                                                                                     |
| isJWT                | Checks if a string is a valid JSON Web Token (JWT).                                                                                                            |
| isValidEmail         | Validates if a string is a valid email address.                                                                                                                |
| isEmptyStr           | Checks if a string is empty or contains only whitespace characters.                                                                                            |
| isPalindrome         | Checks if a string is a palindrome.                                                                                                                            |
| isValidURL           | Validates if a string is a valid URL.                                                                                                                          |
| isValidSSN           | Validates if a string is a valid Social Security Number (SSN).                                                                                                 |
| isValidVIN           | Validates if a string is a valid Vehicle Identification Number (VIN).                                                                                          |
| isValidLatitude      | Validates if a string is a valid latitude coordinate.                                                                                                          |
| isValidLongitude     | Validates if a string is a valid longitude coordinate.                                                                                                         |
| isWhitespace         | Checks if a string contains only whitespace characters.                                                                                                        |
| isValidIPAddress     | Validates if a string is a valid IP address.                                                                                                                   |
| isOnlyAlpha          | Checks if a string contains only alphabetic characters.                                                                                                        |
| isOnlyNumeric        | Checks if a string contains only numeric characters.                                                                                                           |
| isOnlyAlphanumeric   | Checks if a string contains only alphanumeric characters.                                                                                                      |
| isSafeNumberString   | Checks if a string is a safe number string, meaning it doesn't start with 0, or contain an exponent, leading or trailing whitespace, or a non-digit character. |
| isEmptyOrWhitespace  | Checks if a string is empty or contains only whitespace characters.                                                                                            |
| isObjectEmpty        | Checks if an object is empty (has no own properties).                                                                                                          |
| isMimeType           | Checks if a string is a valid MIME type.                                                                                                                       |
| isSlug               | Checks if a string is a valid slug (URL-friendly string).                                                                                                      |
| isStrongPassword     | Checks if a string is a strong password.                                                                                                                       |
| isAlpha              | Checks if a string contains only alphabetic characters.                                                                                                        |
| isAlphaNumeric       | Checks if a string contains only alphanumeric characters.                                                                                                      |
| hasSpecialCharacters | Checks if a string contains special characters.                                                                                                                |
| hasUppercase         | Checks if a string contains uppercase letters.                                                                                                                 |
| hasLowercase         | Checks if a string contains lowercase letters.                                                                                                                 |
| hasNumeric           | Checks if a string contains numeric characters.                                                                                                                |
| hasWhitespace        | Checks if a string contains whitespace characters.                                                                                                             |

## License

MIT &copy; [blckclov3r](https://github.com/blckclov3r/utility-validate?tab=MIT-1-ov-file)
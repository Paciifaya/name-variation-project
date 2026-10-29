

export function getNumberOfChars(name) {
    // number of characters in: name

    return name.length

}

export function getFirstChar(name) {
    // first character of: name

    return name[0];

}


export function getLastChar(name) {
    // last character of: name

    return name.at(-1)

}


export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase()
}


export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase()
}

export function getCapitalized(name) {
    // capitalized version of name (example: "donald" becomes "Donald")

    return name[0].toUpperCase() + name.substring(1).toLowerCase()

}

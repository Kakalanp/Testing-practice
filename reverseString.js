function reverseString(string) {
    const array = string.split('');
    array.reverse();
    const reversed = array.join('');

    return reversed;
}

module.exports = reverseString;
function  isPalindrome(str) {
    let rev = str.split('').reverse().join('');
    return str === rev;
}
// complete the given function
function isPalindrome(str) {
    str = str.replace(/[^\w\d]/g, '').toLowerCase();
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}



palindrome("eye");

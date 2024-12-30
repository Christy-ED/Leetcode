/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s;
    }

    let LPS = "";

    for (let i = 1; i < s.length; i++) {
        // Consider odd length
        let low = i;
        let high = i;
        while (low >= 0 && high < s.length && s.charAt(low) === s.charAt(high)) {
            low--;
            high++;
        }

        let palindrome = s.substring(low + 1, high);
        if (palindrome.length > LPS.length) {
            LPS = palindrome;
        }

        // Consider even length
        low = i - 1;
        high = i;
        while (low >= 0 && high < s.length && s.charAt(low) === s.charAt(high)) {
            low--;
            high++;
        }

        palindrome = s.substring(low + 1, high);
        if (palindrome.length > LPS.length) {
            LPS = palindrome;
        }
    }

    return LPS;
};

     

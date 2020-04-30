
function longestPalindrome (s) {
    if (s === null || s.length < 1) return ''
    let start = 0, end = 0
    for (let i = 0; i < s.length; i++) {
        let evenLen = expandAroundCenter(s, i, i)
        let oddLen = expandAroundCenter(s, i, i + 1)
        let maxLen = Math.max(evenLen, oddLen)
        if (maxLen > end - start) {
            /* 
            起始点位置有歧义
            maxLen为奇数时，start = i - (maxLen - 1) / 2; end = i + (maxLen - 1) / 2;
            maxLen为偶数时，start = i - maxLen / 2 + 1; end = i + maxLen / 2;
            */
            start = i - (maxLen - 1) / 2
            end = i + maxLen / 2
        }
    }
    return s.slice(start, end + 1)
}

function expandAroundCenter (s, left, right ) {
    let L = left, R = right
    while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
        L--
        R++
    }
    // (R - L + 1) - 2
    return R - L - 1
}

let testPalindromeString = 'accbacabcee'
let result = longestPalindrome(testPalindromeString)
console.log(result)
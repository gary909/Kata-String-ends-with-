function solution(str, ending) {
    str = str.slice(-ending.length);
    if (str == ending || ending == '') {
        return true;
    } else {
        return false;
    }
}

console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false
console.log(solution('abc', '')); // true

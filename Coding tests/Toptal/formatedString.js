function solution(S) {
    parsedStr = S.replace(/\s+/g, '')
    // parsedStr = S.split(' ').join('')

    // for (var i = 0; i<str.length; i++) {
    //     var strChar = str.charAt(i).toLowerCase();

    //     if ( letter.indexOf(strChar) >= 0 ) {
    //         newstr += "M";
    //     }
    // }
    return parsedStr
}

const S = '3264-567-   86757  --7559'

console.log(solution(S));
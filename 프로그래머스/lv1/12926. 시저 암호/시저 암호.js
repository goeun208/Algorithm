function solution(s = 'a', n) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let str = s.split('');
    let newStr = '';
    for(let i of str) {
        if(!i.includes(' ')) {
            // 소문자로 변환
            let lower = i.toLowerCase();
            let index = alphabet.indexOf(lower)
            if(index + n > 25){
                let upper = alphabet[index + n - 26]
                if(i === lower.toUpperCase()){
                    newStr += upper.toUpperCase();
                }
                else newStr += upper;
            } else {
                if(i === lower.toUpperCase()){
                    newStr += alphabet[index + n].toUpperCase()
                }
                else {
                    newStr += alphabet[index + n]
                }
            }
        } else
            newStr += i
    }
    return newStr;
}
function solution(word) {
    var answer = 0;
    let s = "AEIOU";
    let m = [781, 156, 31, 6, 1];
    
    for(let i =0; i < word.length; i++){
        answer += ( m[i] * s.indexOf(word.charAt(i))) + 1;
    }
    
    return answer;
}
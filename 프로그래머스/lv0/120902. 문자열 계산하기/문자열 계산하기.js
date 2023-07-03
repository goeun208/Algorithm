function solution(my_string) {
    let str = my_string.split(' ');
    var answer = Number(str[0]);
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '+') {
            answer += Number(str[i + 1])
        }
        else if(str[i] === '-') {
            answer -= Number(str[i + 1])
        }
    }
    return answer;
}
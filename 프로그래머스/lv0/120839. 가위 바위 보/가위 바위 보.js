//가위2 바위0 보5
function solution(rsp) {
    var answer = '';
    let gababo = rsp.split('')
    for(item of gababo) {
        if(item === '2') answer += '0'
        else if(item === '0') answer += '5'
        else answer += '2'
    }
    return answer;
}
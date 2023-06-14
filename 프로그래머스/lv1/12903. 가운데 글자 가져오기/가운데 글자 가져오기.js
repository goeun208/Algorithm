function solution(s) {
    var answer = s.split('');
    return s.length % 2 === 0 ? answer[parseInt(s.length / 2) - 1] + answer[parseInt(s.length / 2)] : answer[parseInt(s.length / 2)];
}
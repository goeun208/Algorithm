function solution(n) {
    var answer = 0;
    while(answer >= 0){
        if(n % answer === 1) break;
        answer++
    }
    return answer;
}
function solution(a, b) { 
    let answer = 0;
    if(a === b) return a;
    else if(a > b) { // b에 큰 수가 오게 하기
        let tmp = a;
        a = b;
        b = tmp;
    }
    for(let i = a; i <= b; i ++) {
        answer += i
    }
    return answer;
}
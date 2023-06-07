function solution(A,B){
    var answer = 0;
    let copiedA = A.sort((a, b) => a-b);
    let copiedB = B.sort((a, b) => b-a);
    for(let i = 0; i < A.length; i++) {
        answer += copiedA[i] * copiedB[i]
    }   

    return answer;
}
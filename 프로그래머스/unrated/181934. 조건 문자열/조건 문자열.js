function solution(ineq, eq, n, m) {
    var answer = 0;
    ineq === ">" ?
    // ! 와 = 판별
        (   
            eq === "=" ?
            n >= m ? answer = 1 : answer = 0
            : n > m ? answer = 1 : answer = 0
        )
    :
        (
            eq === "=" ?
            n <= m ? answer = 1 : answer = 0
            : n < m ? answer = 1 : answer = 0
        )
    return answer;
}
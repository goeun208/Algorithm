function solution(quiz) {
    var answer = [];
    for(let q of quiz) {
        let qs = q.split(' ')
        console.log(qs)
        if(qs[1] === "+") Number(qs[0]) + Number(qs[2]) === Number(qs[4]) ? answer.push("O") : answer.push("X")
        else Number(qs[0]) - Number(qs[2]) === Number(qs[4]) ? answer.push("O") : answer.push("X")
    }
    return answer;
}
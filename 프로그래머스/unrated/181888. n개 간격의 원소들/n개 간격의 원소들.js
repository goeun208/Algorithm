function solution(num_list, n) {
    var answer = []
    for(let i = 0; i < num_list.length; ){
        answer.push(num_list[i])
        i = i + n
    }
    return answer
}
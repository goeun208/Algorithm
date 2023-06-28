function solution(order) {
    let answer = order.toString().split('');
    let count = 0;
    let tsn = ['3', '6', '9']
    for(let i = 0; i < answer.length; i++) {
        tsn.includes(answer[i]) && count++;
    }
    return count;
}
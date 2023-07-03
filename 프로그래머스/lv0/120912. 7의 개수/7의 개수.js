function solution(array) {
    var answer = 0;
    let re;
    for(let item of array) {
        if(item < 10) re = item
        const result = item.toString();
        result.split('').map(v => v==='7' && answer++)
    }
    return answer;
}
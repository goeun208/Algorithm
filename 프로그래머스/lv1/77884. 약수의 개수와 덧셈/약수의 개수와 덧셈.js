const getDivisors = (num) => {
    const divisors = [];
    for(let i = 1 ; i <= num/2 ; i++){
        if(num % i === 0) divisors.push(i);
    }
    return [...divisors, num];
}

function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++) {
        let arr = getDivisors(i)
        arr.length % 2 === 0 ? answer += i : answer -= i
    }
    return answer;
}
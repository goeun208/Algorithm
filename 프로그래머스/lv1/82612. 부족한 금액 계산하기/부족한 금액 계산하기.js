function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i++) {
        answer += price * i
    }
    
    return money - answer > 0 ? 0 : Math.abs(money - answer );
}

//돈이 부족하지 않은 경우에는 남는 돈이 아닌 0을 출력해야하는데 그 경우를 안해주셔서 그런 것 아닐까 싶어요
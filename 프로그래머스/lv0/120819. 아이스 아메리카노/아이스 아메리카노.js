function solution(money) {
    let answer = [];
    let left_money = money;
    let cnt = 0;
    while(1) {
        if(left_money - 5500 >= 0) {
            cnt++;
            left_money -= 5500;
        } 
        else break;
    }
    answer.push(cnt)
    answer.push(left_money)
    return answer;
}
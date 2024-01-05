function solution(food) {
    var answer = '';
    for(i = 1; i < food.length; i++){
        if(parseInt(food[i] / 2) === 0) continue;
        for(j = 0; j < parseInt(food[i] / 2); j++)
            answer += i;
    }
    const reverse_arr = answer.split('').reverse().join('');
    answer = answer + 0 + reverse_arr;
    return answer;
}
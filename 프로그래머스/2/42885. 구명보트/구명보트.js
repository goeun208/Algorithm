function solution(people, limit) {
    var answer = 0;
    let array = people.sort((a, b) => a - b);
    while(array.length > 0){
        let end = array.length - 1;
        if(array[0] + array[end] <= limit){
            answer += 1;
            array.shift();
            array.pop();
        } else {
            answer += 1;
            array.pop();
        }
    }
    return answer;
}
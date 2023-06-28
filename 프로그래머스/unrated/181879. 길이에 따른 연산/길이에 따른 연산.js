function solution(num_list) {
    var answer = num_list.length > 10 ? 0 : 1;
    num_list.length > 10 ? num_list.map(item => answer += item) : num_list.map(item => answer *= item) 
    return answer;
}
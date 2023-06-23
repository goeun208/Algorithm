function solution(my_string, index_list) {
    var answer = '';
    index_list.map(item => answer += my_string.charAt(item))
    return answer;
}
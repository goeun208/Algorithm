function solution(my_string) {
    var answer = my_string.split('').map((item) => item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('');
    return answer;
}
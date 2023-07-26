function solution(str_list, ex) {
    var answer = str_list.filter(item => !item.includes(ex));
    return answer.join("");
}
function solution(strlist) {
    var answer = [];
    strlist.map((item, index) => answer[index] = item.length)
    return answer;
}
function solution(my_string) {
    const new_string = my_string.split(''); // 문자열 배열로 쪼개기
    const answer = new_string.reverse(); // 역순으로 변환
    return answer.join(''); // 다시 문자열로 붙이기
}
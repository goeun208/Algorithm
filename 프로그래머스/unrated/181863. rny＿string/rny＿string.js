function solution(rny_string) {
    var answer = [];
    rny_string.split("").map(item => item === "m" ? answer.push("rn") : answer.push(item));
    return answer.join("");
}
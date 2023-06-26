function solution(s1, s2) {
    let count = 0;
    if(!s1 || !s2) return 0;
    var answer = s2.filter((el)=>(s1.includes(el)))
    return answer.length;
}

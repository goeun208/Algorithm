function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => a - b);
    for(let i = 0; i < citations.length; i++) {
        let cit = citations[i];
        if (citations[i] >= citations.length - i)
            answer += 1;
    }
    return answer;
   
}
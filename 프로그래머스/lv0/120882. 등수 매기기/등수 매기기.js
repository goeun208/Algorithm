function solution(score) {
    let answer = new Array(score.length).fill(1)
    const total_score = score.map(e => (e[0]+e[1])/2); 
    for(let i = 0; i < total_score.length; i++){
        for(let j = 0; j < total_score.length; j++){
            if(total_score[i] < total_score[j]) answer[i]++;
        }
    }
    return answer;
}
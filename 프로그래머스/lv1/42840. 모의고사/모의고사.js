function solution(answers) {
    var answer = [];
    let supo1 = [ 1, 2, 3, 4, 5 ];
    let supo2 = [ 2, 1, 2, 3, 2, 4, 2, 5 ];
    let supo3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ];
    
    let cnt1 = 0, cnt2 = 0, cnt3 = 0;
    
    for(let i = 0; i < answers.length; i++) {
        if(supo1[i % 5] === answers[i]) cnt1++; 
        if(supo2[i % 8] === answers[i]) cnt2++; 
        if(supo3[i % 10] === answers[i]) cnt3++; 
    }
    
    let cntArr = [cnt1, cnt2, cnt3];
    
    Math.max(...cntArr) === cnt1 && answer.push(1)
    Math.max(...cntArr) === cnt2 && answer.push(2)
    Math.max(...cntArr) === cnt3 && answer.push(3)
       
    return answer;
}
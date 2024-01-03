function solution(s) {
    const sArr = s.split('');
    let answer = [];
    for(i = 0; i < sArr.length; i++){
        if(i === 0) answer.push(-1); // 첫번째 원소면 -1 push
        else { // 두번째부터
            for(j=i - 1; j >= 0; j--){
                if(sArr[i] === sArr[j]){ // 서로 같은 문자가 존재할 경우
                    answer.push(i - j);
                    break;
                }    
            }
            if(j === -1) answer.push(j)
        }
            
    }
    return answer;
}
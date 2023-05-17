function solution(str1, str2) {
    var answer = '';
    let firstStr = str1.split('');
    let secondStr = str2.split('');
    for(let i = 0; i < str1.length + str2.length; i++){
        i % 2 === 0 ? 
            answer += firstStr[parseInt(i/2)]
        :   
            answer += secondStr[parseInt(i/2)]
    }    
    return answer;
}
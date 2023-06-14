function solution(phone_number) {
    var answer = '';
    if(phone_number.length === 4) return phone_number;
    for(let i = 0; i < phone_number.length - 4; i++) {
        answer += '*';
    }
    return  answer + phone_number.slice(-4)
    
}
function solution(age) {
    let dict = ['a','b','c','d','e','f','g','h','i','j']
    let str = '';
    var answer = age.toString().split('');
    for(let i = 0; i < answer.length; i++) {
        str += dict[Number(answer[i])]
    }
    return str;
}
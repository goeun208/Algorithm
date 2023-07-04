function solution(spell, dic) {
    var answer = [];
    let arr = [];
    for(let i = 0; i < dic.length; i++) {
        arr = [];
        spell.map(item => dic[i].includes(item) && arr.push(item))
        if(spell.sort().toString() === arr.sort().toString()) answer.push(dic[i])   
    }
    return answer.length > 0 ? 1 : 2;
}
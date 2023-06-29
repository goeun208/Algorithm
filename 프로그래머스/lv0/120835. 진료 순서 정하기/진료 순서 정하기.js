function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a); // 내차순 정렬
    return emergency.map(v=>sorted.indexOf(v)+1);
}

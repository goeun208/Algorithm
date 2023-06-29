function solution(before, after) {
    let bf_str = before.split('').sort().join("");
    let af_str = after.split('').sort().join("");
    
    return bf_str === af_str ? 1 : 0;
}

//배열과 객체는 같은 요소를 가지고 있더라도 주소 값이 같지 않으면 같다고 판단하지 않는다. join("")을 붙여 문자열로 만들고 비교하기.
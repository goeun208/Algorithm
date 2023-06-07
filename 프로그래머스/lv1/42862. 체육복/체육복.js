function solution(n, lost, reserve) {
    let lostArr = lost.filter(v => !reserve.includes(v)).sort();
    let reserveArr = reserve.filter(v => !lost.includes(v)).sort();
    
    for(let i = 0; i < reserveArr.length; i++) { 
        if(lostArr.includes(reserveArr[i] - 1))
            lostArr = lostArr.filter(item => item !== reserveArr[i] - 1);
        else if(lostArr.includes(reserveArr[i] + 1))
            lostArr = lostArr.filter(item => item !== reserveArr[i] + 1);
        
    }
    return n - lostArr.length;
}
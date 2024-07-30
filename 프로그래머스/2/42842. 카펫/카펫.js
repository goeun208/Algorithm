function solution(brown, yellow) {
    var answer = [0, 0];
    // 가로 >= 세로
    let round = brown + yellow;
    for(let height = 3; height <= Math.sqrt(2000000); height++){
        const remainder = round % height;

        if (remainder !== 0) continue;
        
        let width = Math.floor(round / height);
        if((width - 2)*(height - 2) == yellow){
            return [width, height]
        }
    }
}
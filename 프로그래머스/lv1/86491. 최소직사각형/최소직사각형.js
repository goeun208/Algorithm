function solution(sizes) {
    var answer = 0;
    let newSizes = sizes;
    let maxWidth = 0;
    let maxHeight = 0;
    for(let i = 0; i < newSizes.length; i++) {
        if(newSizes[i][0] < newSizes[i][1]) {
            //세로가 더 길면 바꾸기 가로 > 세로이게
            let tmp = newSizes[i][0]
            newSizes[i][0] = newSizes[i][1]
            newSizes[i][1] = tmp
        }
        if(maxWidth < newSizes[i][0]) maxWidth = newSizes[i][0]
        if(maxHeight < newSizes[i][1]) maxHeight = newSizes[i][1]
    }
    return maxWidth * maxHeight;
}
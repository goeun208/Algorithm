function solution(arr) {
    let newArr = []
    arr.map((item) => {
        newArr.push(...Array(item).fill(item).map((item, idx) => item))
    })
    return newArr;
}
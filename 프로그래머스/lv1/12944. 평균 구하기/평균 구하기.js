function solution(arr) {
    let newArr = 0
    arr.map(item => newArr += item)
    return (newArr / arr.length);
}
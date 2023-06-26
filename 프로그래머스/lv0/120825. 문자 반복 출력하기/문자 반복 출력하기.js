function solution(my_string, n) {
    let newArr = []
    my_string.split('').map((item) => {
        newArr.push(...Array(n).fill(item))
    })
    return newArr.join('');
}
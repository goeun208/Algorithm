function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.map((item) => item % 2 === 0 ? odd += item.toString() : even += item.toString())
    return Number(odd) + Number(even);
}
function solution(my_string, overwrite_string, s) {
    let front = my_string.slice(0, s)
    let back = (my_string.length - (s + overwrite_string.length)) > 0 ? my_string.slice(-(my_string.length - (s + overwrite_string.length))) : ''
    return front + overwrite_string + back;
}
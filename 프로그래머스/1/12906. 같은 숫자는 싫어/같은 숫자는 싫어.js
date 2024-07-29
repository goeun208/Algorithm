function solution(arr){
    let stack = [];
    for(const el of arr){
        if(stack.length === 0 || stack[stack.length - 1] !== el){
            stack.push(el);
        }
    }
    return stack;
} 
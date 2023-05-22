function solution(array) {
   let map = new Map();
    
    if(array.length === 1) {
        return array[0];
    }
    
    for(let i = 0; i <= Math.max(...array); i++) {
        map.set(i, 0);
    }
    
    for(let i = 0; i < array.length; i++) {
        map.set(array[i], map.get(array[i]) + 1)
    }
        
        const arr = Array.from(map.values());
        const max = Math.max(...arr);
        
        if(arr.indexOf(max) !== arr.lastIndexOf(max)) {
            return -1;
        } else {
            return arr.indexOf(max);
        }
}


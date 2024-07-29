function solution(priorities, location) {
    var answer = 0;
    let idxQueue = [];
    let maxValue = Math.max(...priorities);
    
    for(let i = 0; i < priorities.length; i++){
        idxQueue.push(i);
    }
    
    while(priorities.length > 0){
        maxValue = Math.max(...priorities);
        
        if(priorities[0] < maxValue){
            priorities.push(priorities.shift());
            idxQueue.push(idxQueue.shift());
        }else {
            answer += 1;
            priorities.shift();
            if(idxQueue.shift() == location)
                return answer;
        }
    }
    
    return queue;
}
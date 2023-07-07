function solution(keyinput, board) {
    var answer = [Math.abs(Math.floor(board[0] / 2)),Math.abs(Math.floor(board[1] / 2))];
    let x = 0;
    let y = 0;
    
    for(let key of keyinput) {        
        if(key === "up"){
           y += 1;
        }
        else if(key === "down"){
            y -= 1; 
        }
        else if(key === "left"){
            x -= 1;
        }
        else if(key === "right"){
            x += 1;
        }
        
        if(Math.abs(x) > Math.abs(Math.floor(board[0] / 2))){
              x = x > 0 ? answer[0] : answer[0] * -1;
        } 
        if(Math.abs(y) > Math.abs(Math.floor(board[1] / 2))){
             y = y > 0 ? answer[1] : answer[1] * -1;
        }
        
    }
    return [x,y];
}
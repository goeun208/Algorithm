function solution(maps) {
    const yLen = maps.length; //행
    const xLen = maps[0].length; //열
    const goalX = xLen - 1;
    const goalY = yLen - 1;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];
    const dir = [[-1, 0], [1,0], [0, 1], [0, -1]];
    
    const bfs = () => {
        let queue = [[0, 0, 1]];
        maps[0][0] = 0;
    
        while(queue.length > 0) {
            const [curY, curX, move] = queue.shift();
            if(curY === goalY && curX === goalX) return move;
        
            for (let [r, c] of dir) {
                let newRow = curY + r;
                let newCol = curX + c;   //현재 위치에서 상하좌우로 이동한 새로운 위치

                // 새로운 위치가 맵 내에 있고 벽이 아닐 시 이동 가능
                if (newRow >= 0 && newRow < yLen && newCol >= 0 && newCol < xLen && maps[newRow][newCol] === 1) {
                    queue.push([newRow, newCol, move + 1]);
                    maps[newRow][newCol] = 0; // 방문한 위치를 0으로 표시
                }
            }
        }
        return -1;
    };
    
    return bfs();
}
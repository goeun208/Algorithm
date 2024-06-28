function solution(k, dungeons) {
    let answer = 0;
    let length = dungeons.length;
    let visited = Array(length).fill(false);
    
    const dfs = (hp, L) => {
        for(let i = 0; i < length; i++){
            //아직 방문하지 않았고 현재 피로도가 던전 최소 필요 피로도보다 크거나 같은 경우
            if(!visited[i] && hp >= dungeons[i][0]){
                visited[i] = true;
                //던전 방문 후 피로도 감소, 다음 단계로 이동
                dfs(hp - dungeons[i][1], L + 1)
                //또 방문해야 되니까 false로 바꿔준다
                visited[i] = false;
            }
        }
        answer = Math.max(answer, L);
    }
    
    dfs(k, 0);
    
    return answer;
}
// useful for RunnerGame
pos = 0;                // for the start
isGameOver = false;     // Game continue
obstaclePos = 3;        // Enemy or obstacle
endPos = 5;             // For the end of the game, victory condition

while (!isGameOver) {
    // Continue the game
    pos++;
    if(pos >= endPos || pos == enemyPos) {
        break;
    }
}
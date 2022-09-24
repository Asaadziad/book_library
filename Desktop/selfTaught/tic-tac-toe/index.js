const gameBoard = (() => {
  let board = [0, 0, 0, 0, 0, 0, 0, 0];
  const mark = (i, player) => {
    board[x] = player;
  };
  const winCondition = [
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const checkWin = () => {
    for (let j = 0; j < winCondition.length; j++) {
      if (
        board[winCondition[j][0]] == 0 ||
        board[winCondition[j][1]] == 0 ||
        board[winCondition[j][2]] == 0
      )
        continue;
      if (
        board[winCondition[j][0]] == board[winCondition[j][1]] &&
        board[winCondition[j][2]] == board[winCondition[j][1]]
      ) {
        return true;
      }
    }
  };
  return { mark, checkWin };
})();

const player = (name) => {};

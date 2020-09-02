
export const CLICK = 'CLICK';
export const RESET = 'RESET';

const size = 5

const getGrid = ()=>new Array(size).fill(1).map(() => new Array(size).fill(true))

export const defaultState = {
  grid: getGrid(),
  team: 'X',

}

// x y

export const ticTacToeReducer = (oldState, action) =>{
  let state = { ...oldState }
  switch (action.type) {
  case CLICK:
    const { x, y } = action;
    const team = state.team;
    state.grid[x][y] = team;

    if (state.team === 'X') {
      state.team = 'O';
    } else {
      state.team = 'X';
    }
    const grid = state.grid;
    let rowSolved = true;
    for (let i = 0; i < size; i++) {
      if (grid[x][i] !== team) {
        rowSolved = false;
      }
    }
    let colSolved = true;
    for (let i = 0; i < size; i++) {
      if (grid[i][y] !== team) {
        colSolved = false;
      }
    }
    let diagSolved = true;
    for (let i = 0; i < size; i++) {
      if (grid[i][i] !== team) {
        colSolved = false;
      }
    }
    let backDiagSolved = true;
    for (let i = 0; i < size; i++) {
      if (grid[i][size - i - 1] !== team) {
        colSolved = false;
      }
    }
    const solved = colSolved || rowSolved || diagSolved || backDiagSolved;
    const draw = !solved && !grid.find(row=>row.find(cell=>cell === true));


    return { ...state, draw, solved }
  case RESET:
    return { ...state, grid: getGrid() }
  default:
    break;
  }
  return state;


}

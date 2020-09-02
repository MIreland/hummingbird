import React, { useEffect, useState, useReducer } from 'react';
import logo from './logo.svg';
import styles from './sample.module.css';
import './App.css';
import { ticTacToeReducer, defaultState, CLICK, RESET } from './util';


function App() {

  const [state, dispatch] = useReducer(ticTacToeReducer,defaultState )

  return (
    <div className="App">
      {state.solved && `SOLVED BY TEAM ${state.solved}`}
      {state.draw && 'It was a draw!'}

      <button onClick={()=>dispatch({ type: RESET })}>
        RESET
      </button>
      <div className={styles.grid}>
        {state.grid.map((row, rowIndex)=>
          row.map((cellContent, columnIndex)=>(
            <div
              className={
                `${styles.cell  } ${  cellContent === 'X' ? styles.xCell : ''  }${(cellContent === 'O' ? styles.oCell : '')}`}

              disabled={
                state.grid[rowIndex][columnIndex] !== true ||
                state.solved ||
                state.draw
              }
              key={`${cellContent  } ${  columnIndex}`
              }
              onClick={()=> {
                dispatch({ type: CLICK, x:rowIndex, y: columnIndex })
              }}
            >
              {cellContent}
            </div>
          ))
        )}

      </div>


    </div>
  );
}

export default App;

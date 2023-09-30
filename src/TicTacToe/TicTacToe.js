import React,{useState} from 'react'
import "./TicTacToe.css"
import Square from './Square'
const TicTacToe = () => {
    const [state,setState]=useState(Array(9).fill(null))
    const [isTurnX,setIsTrunX]=useState(true);
    
    const handleValue=(index)=>{
        const prevState=[...state];
        if(prevState[index] !=null){
            return
        }
        prevState[index]=isTurnX?'X':'0';
        setState(prevState)
        setIsTrunX(!isTurnX)
    }
    
    const checkWinner=()=>{
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
          for(let i=0;i<winnerLogic.length;i++){
            const [a,b,c]=winnerLogic[i]
            if(state[a]!=null &&state[a]===state[b] && state[a]===state[c]){
                return state[a]
            }
          }
          return false
    }
    let isWinner=checkWinner();
    const handleReset=()=>{
        setState(Array(9).fill(null))
    }
  return (
    <div className='tictac-Container'>
        {isWinner ?(
        <><h1>{isWinner} won the game</h1>
        <button onClick={handleReset}>Play Again</button></>
        ):(
            <>
        <div className='board-row'>
            <Square value={state[0]} onClick={()=>handleValue(0)}/>
            <Square value={state[1]} onClick={()=>handleValue(1)}/>
            <Square value={state[2]} onClick={()=>handleValue(2)}/>
        </div>
        <div className='board-row'>
        <Square value={state[3]} onClick={()=>handleValue(3)}/>
        <Square value={state[4]} onClick={()=>handleValue(4)}/>
        <Square value={state[5]} onClick={()=>handleValue(5)}/>
        </div>
        <div className='board-row'>
        <Square value={state[6]} onClick={()=>handleValue(6)}/>
        <Square value={state[7]} onClick={()=>handleValue(7)}/>
        <Square value={state[8]} onClick={()=>handleValue(8)}/>
        </div>
            </>
        )}
    </div>
  )
}

export default TicTacToe
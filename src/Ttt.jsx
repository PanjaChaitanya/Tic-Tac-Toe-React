import React, { useState } from 'react'
import './ttt.css'

function Ttt() {

var gameOver;
function Checkwin(){
    let c0 = document.getElementById('cell0').innerHTML
    let c1 = document.getElementById('cell1').innerHTML
    let c2 = document.getElementById('cell2').innerHTML
    let c3 = document.getElementById('cell3').innerHTML
    let c4 = document.getElementById('cell4').innerHTML
    let c5 = document.getElementById('cell5').innerHTML
    let c6 = document.getElementById('cell6').innerHTML
    let c7 = document.getElementById('cell7').innerHTML
    let c8 = document.getElementById('cell8').innerHTML
    
    if((c0===player  && c1===player  && c2 === player)||
        (c3===player && c4===player && c5 === player)||
        (c6===player && c7===player && c8 === player)||
        (c0===player && c4===player && c8 === player)||
        (c0===player && c3===player && c6 === player)||
        (c1===player && c4===player && c7 === player)||
        (c2===player && c5===player && c8 === player)||
        (c2===player && c4===player && c6 === player)){
          document.getElementById('result').innerHTML = player +" is the winner"
          document.getElementById('playerTurn').innerHTML = ""
          gameOver = true;
          return true;
    }
    return false;
  }
  function CheckTie(){
    for(let i = 1 ; i<=8 ; i++){
        let cell = document.getElementById(`cell${i}`);
        if(cell.innerHTML === ""){
            return false;
        }
    }
    return true;
}
  
  const[player, setPlayer] = useState(null)

  function Add(index,value){
    if(gameOver){
      return;
    }
    let player1 = document.getElementById('player1').value;
    player1 = player1.toUpperCase()
    let player2 = document.getElementById('player2').value;
    player2 = player2.toUpperCase()
    let c = document.getElementById(index).innerHTML
    if(!c){
      if(player1 && player2){
        if(player===player2){
            value=player
            document.getElementById(index).innerHTML=player
            document.getElementById(index).setAttribute("class","cell red")
            if(Checkwin()){
              gameOver = true
              return;
            }
            else if(CheckTie()){
              document.getElementById('result').innerHTML = "It's Tie"
              document.getElementById('playerTurn').innerHTML = ""
              gameOver = true
              return;
            }
            setPlayer(player1)
          }
          else{
            document.getElementById(index).innerHTML=player
            document.getElementById(index).setAttribute("class","cell blue")
            if(Checkwin()){
              gameOver = true
              return;
            }
            else if(CheckTie()){
              document.getElementById('result').innerHTML = "It's Tie"
              document.getElementById('playerTurn').innerHTML = ""
              gameOver = true
              return;
            }
            setPlayer(player2)
          }
    }else{
        alert("Please enter both players names")
    }
    }
  }
  function Start(){
    let player1 = document.getElementById('player1').value;
    player1 = player1.toUpperCase()
    let player2 = document.getElementById('player2').value;
    player2 = player2.toUpperCase()
    if(player1 && player2 ){
        if(player1 !== player2){
            document.getElementById('gameBoard').style.display='block'
            document.getElementById('inputs').style.display='none'
            setPlayer(player1)
        }else{
            alert("Enter Different Names")
        }
    }else{
        alert("Please enter both players names")
    }
  }
  let noSpace = (event) =>{
    if(event.key === ' '){
        event.preventDefault();
    }
  }
  return (
    <div className="main">
      <h1 id='heading'>TIC - TAC - TOE</h1>
      <div id="inputs">

        <label htmlFor="player1">Player 1</label>
        <input type="text" maxLength='1' placeholder='Enter Your Symbol' id='player1'
        onKeyDown={noSpace}
        />

        <label htmlFor="player2" maxLength='1'>Player 2</label>
        <input type="text" maxLength='1' placeholder='Enter Your Symbol' id='player2'
        onKeyDown={noSpace}
        />

        <button onClick={Start}>Start Game</button>
      </div>
      <div id="gameBoard" style={{display:'none'}}>
        <div id="board">
          <div className="cell" id="cell0" onClick={() => Add('cell0', 'c0')}></div>
          <div className="cell" id="cell1" onClick={() => Add('cell1')}></div>
          <div className="cell" id="cell2" onClick={() => Add('cell2')}></div>
          <div className="cell" id="cell3" onClick={() => Add('cell3')}></div>
          <div className="cell" id="cell4" onClick={() => Add('cell4')}></div>
          <div className="cell" id="cell5" onClick={() => Add('cell5')}></div>
          <div className="cell" id="cell6" onClick={() => Add('cell6')}></div>
          <div className="cell" id="cell7" onClick={() => Add('cell7')}></div>
          <div className="cell" id="cell8" onClick={() => Add('cell8')}></div>
        </div>
        <h1 id='playerTurn'>Player {player}'s turn</h1>
        <button onClick={()=>{window.location="/"}}>Restart</button>
        <h1 id="result">
        </h1>
      </div>
    </div>
  )
}
export default Ttt;
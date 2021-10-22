import React, { Component } from 'react'
import Square from './components/Square'
import Button from './components/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Moda, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counter: 5,
      gameState: false,
    }
  }

  componentDidMount(){
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    while(bomb === treasure)
    {
      bomb = Math.floor(Math.random() * this.state.board.length)
    }
    this.setState({treasureLocation: treasure, bombLocation: bomb})
  }

  handleGamePlay = (index) => {
    const {board} = this.state
    var {counter} = this.state
    var {gameState} = this.state

    if(this.state.counter === 0){
      gameState = true
      this.setState({gameState: gameState})
      alert("You've ran out of turns, better luck next time!")
    }
    else if(index === this.state.treasureLocation){
        board[index] = '💰'
        gameState = true
        this.setState({board: board, gameState: gameState})
        alert("Congratulations, you found me tresure!")
    }
    else if(index === this.state.bombLocation){
        board[index] = '💣'
        gameState = true
        this.setState({board: board, gameState: gameState})
        alert("Shiver me timbers, you found the bomb, better luck next time!")
    }
    else{
      counter--
      console.log('counter' + counter)
      board[index] = '🌴'
      this.setState({board: board, counter: counter})
    }
    
  }
  resetGame = () => {
      var board = ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
      let treasure = Math.floor(Math.random() * this.state.board.length)
      let bomb = Math.floor(Math.random() * this.state.board.length)
      while(bomb === treasure)
      {
        bomb = Math.floor(Math.random() * this.state.board.length)
      }
      var counter =  5
      var gameState =  false
      this.setState({board: board, treasureLocation: treasure, bombLocation: bomb, counter: counter, gameState: gameState})
  }
  

  render(){
    console.log('tresure loc: ' , this.state.treasureLocation)
    console.log('bomb loc: ', this.state.bombLocation)
    console.log('counter: ' ,this.state.counter)
    console.log("------------------------------")
    return(
      <>
      <div className='top-content'>
        <h1>Treasure Hunt Game </h1>
        <h3>Turns Left: {this.state.counter} </h3>
        <h3> <Button resetGame={this.resetGame}/></h3>
      </div>
        
        <div id='gameboard'>
          {this.state.board.map((value, index) => {
            return <Square 
                      value={value}
                      key={index}
                      index={index}
                      handleGamePlay={this.handleGamePlay}
                      counter={this.state.counter}
                      gameState={this.state.gameState}
                  />
          })}
        </div>
        
        
        
      </>
    )
  }
}

export default App

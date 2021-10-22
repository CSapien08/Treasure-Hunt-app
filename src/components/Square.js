import React, { Component } from 'react'


class Square extends Component{

  handleClick = () => {
    if(this.props.gameState === false)
    {
      this.props.handleGamePlay(this.props.index)
    }
    
  }

  render(){
    return(
      <>
        
        <div id='grid' onClick={this.handleClick}>
            {this.props.value}
        </div>
      </>
    )
  }
}
export default Square

import React, { Component } from 'react'
import { Button } from 'react-bootstrap';


class MyButton extends Component{

    handleClick = () => {
        this.props.resetGame()
    }

    render(){
        return(
          <>
            <Button variant='danger' onClick={this.handleClick}>
                Reset Game
            </Button>
          </>
        )
    }
}
export default MyButton
import React, { Component } from 'react';
import './App.css';

class Lottery extends Component {
  state = {
    oldNumbers: [],
    newNumbers: [],
    message: ""
  }
  m = 1
  randomNumbers = () => {
    if (this.m != 0) {
      this.state.newNumbers =  [];
      for (let i = 0; i < 5; i++) {
        let number = Math.floor(5 - 0.5 + Math.random() * (36 - 5 + 1));
        console.log(number)
        if (this.state.oldNumbers.includes(number)) {
          this.m++
          i--
        } else if (this.m >= 10) {
          this.m = 0
        } else {
          this.state.oldNumbers.push(number);
          this.state.newNumbers.push(number);
          this.setState(this)
        }
      }
      console.log(this.state.oldNumbers)
      console.log(this.state.newNumbers)
    } else {
      this.setState({
        newNumbers: "",
        message: "числа в лоттерее закончились!"
      })
    }
  }
  render() {
    return (
      <div className="lottery">
        <div className="lottery__button">
          <button onClick={() => this.randomNumbers()}>REFRESH</button>
        </div>
        <div className="lottery__lots">
          <div className="lottery__lot">{this.state.newNumbers[0]}</div>
          <div className="lottery__lot">{this.state.newNumbers[1]}</div>
          <div className="lottery__lot">{this.state.newNumbers[2]}</div>
          <div className="lottery__lot">{this.state.newNumbers[3]}</div>
          <div className="lottery__lot">{this.state.newNumbers[4]}</div>
        </div>
        <div className='lottery__message'>{this.state.message}</div>
      </div>
    )
  }
}
export default Lottery;
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Lottery extends Component {
  state = {
    oldNumbers: [],
    newNumbers: [],
    randomNumbers: () => {
      this.state.oldNumbers = this.state.newNumbers;
      this.state.newNumbers =  [];
      for (let i = 0; i < 5; i++) {
        let number = Math.floor(5 - 0.5 + Math.random() * (36 - 5 + 1));
        console.log(number)
        if (this.state.oldNumbers.includes(number)) {
          i--
        } else {
          this.state.newNumbers.push(number)
        }
      }
    }
  }
}
const lot = new Lottery;
lot.state.randomNumbers();
console.log(lot.state.newNumbers)
console.log(lot.state.oldNumbers)
lot.state.randomNumbers();
console.log(lot.state.newNumbers)
console.log(lot.state.oldNumbers)
reportWebVitals();

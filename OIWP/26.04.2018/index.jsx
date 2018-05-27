import React, { Component as C } from 'react';
import { render as r } from 'react-dom';

class Counter extends C {
  
  constructor(props) {
    super();
    const { stars } = props;
    this.state = { stars };
  }

  plus() {
    const stars = +this.state.stars + 1;
    this.setState({ stars });
  }
  
  minus() {
    const stars = +this.state.stars - 1;
    this.setState({ stars });
  }

  render() {
    return (
      <div>

        <button onClick={() => this.plus()}>
        <span role="img" aria-label="add">➕</span>
        </button> 

        <button onClick={() => this.minus()}>
        <span role="img" aria-label="add">➖</span>
        </button> 

        <Stars length={this.state.stars} />

      </div>);
  }
}

const URL = 'https://kodaktor.ru/j/react5b_6cbf2';

const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => '⭐️').join('')}</span>;


r(
  <div>
  Лайкер - Дизлайкер

  <div>Angular</div>
  <Counter stars="0" />

  <div>React</div>
  <Counter stars="3" />
  
  <div>Vue</div>
  <Counter stars="2" />
  </div>,
  document.querySelector('.cont'),
);
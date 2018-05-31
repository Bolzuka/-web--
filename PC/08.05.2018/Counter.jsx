import React, { Component as C } from 'react';

class Counter extends C {
  constructor(props) {
    super();
    const { stars } = props;
    this.state = { stars };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ stars: nextProps.stars });
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
      <div>Лайкер-Дизлайкер <hr />

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

const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => '⭐️').join('')}</span>;

export default Counter;
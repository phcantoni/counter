import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

const Conteiner = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: lightgray;

    h1 {
      height: 15vh;
      font-size: 3em;
    }

    section {
      width: 25vw;
      height: 50vh;
      background-color: darkgray;
      border-radius: 15px;
    }
`;
const Counter = styled.h2 `
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 12,5vw;
  height: 25vh;
  font-size: 7em;
  color: darkblue;
`;
const BoxButtons = styled.div `
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  width: 12,5vw;
  height: 25vh;

    button {
      width: 4.5vw;
      height: 10vh;
      font-size: 1em;
      font-weight: 900;
      font-family: verdana, "sans-serif";
      color: white;
      background-color: orangered;
      border-radius: 10px;
      border: white solid 2px;
        &:hover {
          cursor: pointer;
          opacity: 0.7;
          transform: scale(1.1);
          transition: 300ms;
        }
    }
`;

export default class App extends Component {
  state = {
    contador: 0
  }

  More = () => {
    if (this.state.contador < 10) {
      this.setState ({ contador: this.state.contador + 1})
    }
  }
  Less = () => {
    if (this.state.contador > 0) {
      this.setState ({contador: this.state.contador - 1})
    }
  }
  Reset = () => {
    this.setState ({contador: 0})
  }
  Counter = () => {
    const Counting = setInterval (() => {
      this.setState ({contador: this.state.contador + 1})
    }, 1000)

    this.Counting = () => {
      clearInterval (Counting)
    };
  }


render () {
  return (
    <>
      <Conteiner>
        <h1>CONTADOR</h1>
        <section>
            <Counter>{this.state.contador}</Counter>
          <BoxButtons>
            <button onClick={this.More}>+</button>
            <button onClick={this.Less}>-</button>
            <button onClick={this.Reset}>O</button>
            <button onClick={this.Counter}>!</button>
            <button onClick={this.Counting}>X</button>
          </BoxButtons>
        </section>
      </Conteiner>
    </>
  )
}

}
// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = null

type State = {
  pandas: Array<Panda>
}

type Panda = {
  id: number,
  name: string,
  age: number,
  hobby: string
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {pandas: [
      {id: 0, name: "Peter", age: 7, hobby: "race car driving"},
      {id: 1, name: "Paulina", age: 14, hobby: "VR simulations"},
      {id: 2, name: "Patrick", age: 5, hobby: "fighting crime"}
    ]}
  }
  render() {
    const pandaComponents = []

    for (let i=0; i<this.state.pandas.length; i++)
      pandaComponents.push(<p>test</p>)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Panda Factory</h1>
        </header>
        <div className="App-intro">
          {pandaComponents}
        </div>
      </div>
    );
  }
}

export default App;

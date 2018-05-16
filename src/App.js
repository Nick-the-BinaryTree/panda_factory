// @flow
import React, { Component } from 'react';
import logo from './imgs/logo.svg';
import './App.css';
import Panda, { type PandaType } from './components/Panda.js'

type Props = any // none actually

type State = {
  pandas: Array<PandaType>,
  count: number
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {pandas: [
        {id: 0, name: "Peter the Panda", age: 7, hobby: "race car driving", img: "1"},
        {id: 1, name: "Paulina the Panda", age: 14, hobby: "VR simulations", img: "2"},
        {id: 2, name: "Patrick the Panda", age: 5, hobby: "fighting crime", img: "3"}
      ],
      count: 0
    }
    this.getUpdatedCount = this.getUpdatedCount.bind(this)
  }
  getUpdatedCount = () => {
    const newCount = this.state.count++

    this.setState({count: newCount})
    return newCount
  }
  render() {
    const pandaComponents = []

    for (let i=0; i<this.state.pandas.length; i++)
      pandaComponents.push(<Panda id={this.state.pandas[i].id}
        name={this.state.pandas[i].name} age={this.state.pandas[i].age}
        hobby={this.state.pandas[i].hobby} img={this.state.pandas[i].img} />)

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

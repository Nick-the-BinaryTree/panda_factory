// @flow
import React, { Component } from 'react'
import logo from './imgs/logo.svg'
import './App.css'
import Panda, { type PandaType } from './components/Panda.js'
import PandaCreateForm from './components/PandaCreateForm.js'
import PandaList from './components/PandaList.js'

type Props = {||}

type State = {
  pandas: Array<PandaType>,
  count: number
}

class App extends Component<?Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {pandas: [], count: 0}
    this.getUpdatedCount = this.getUpdatedCount.bind(this)
    this.addNewPanda = this.addNewPanda.bind(this)
  }
  getUpdatedCount = (): number => {
    const newCount = this.state.count + 1

    this.setState({count: newCount})
    return newCount
  }

  addNewPanda = (panda: PandaType) => {
    const newPandas = [...this.state.pandas, panda]

    this.setState({pandas: newPandas})
  }

  render() {
    const pandaComponents = []

    for (let i=0; i<this.state.pandas.length; i++)
      pandaComponents.push(<Panda key={i} id={this.state.pandas[i].id}
        name={this.state.pandas[i].name} age={this.state.pandas[i].age}
        hobby={this.state.pandas[i].hobby} img={this.state.pandas[i].img} />)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Panda Factory</h1>
        </header>
        <br />
        <PandaCreateForm getUpdatedCount={this.getUpdatedCount} addNewPanda={this.addNewPanda} />
        <PandaList className="App-intro">
          {pandaComponents}
        </PandaList>
      </div>
    )
  }
}

export default App

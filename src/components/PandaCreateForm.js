// @flow
import React, { Component } from 'react'
import { type PandaType } from './Panda.js'

type Props = {
  addNewPanda: (panda: PandaType) => void,
  getUpdatedCount: () => number
}

type State = {
  name: string
}

const hobbies = ["Being a panda", "Eating bamboo", "Growling quietly", "Fighting crime",
  "Building a tree house", "Rolling around a bit", "Race car driving", "Full-stack development"]

class PandaCreateForm extends Component<Props, State> {
  textInput: ?HTMLInputElement

  constructor(props: Props) {
    super(props)
    this.state = {name: ''}

    this.getRandAge = this.getRandAge.bind(this)
    this.getRandHobby = this.getRandHobby.bind(this)
    this.getRandImg = this.getRandImg.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getRandAge = (): number => Math.floor(Math.random()*20+1)

  getRandHobby = (): string => hobbies[Math.floor(Math.random()*(hobbies.length))]

  getRandImg = (): string => "" + Math.floor(Math.random()*3+1) // hard coded to three imgs available

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (!this.state.name) {
      alert("This panda has no name.")
      return
    }
    this.props.addNewPanda({
      id: this.props.getUpdatedCount(),
      name: this.state.name,
      age: this.getRandAge(),
      hobby: this.getRandHobby(),
      img: this.getRandImg()
    })
    this.setState({name: ''})
    if (this.textInput && this.textInput.value)
      this.textInput.value = ''
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({name: event.currentTarget.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Desired Panda Name: </label>
        <input ref={textInput => (this.textInput = textInput)} onChange = {this.handleChange} type="text" name="name" />
        <input type="submit" value="Generate" />
      </form>
    )
  }
}

export default PandaCreateForm

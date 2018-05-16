// @flow
import React, { Component } from 'react'
import type PandaType from './Panda.js'

type Props = {
  addNewPanda: (panda: PandaType) => null,
  getUpdatedCount: () => number
}

type State = {
  name: string
}

const hobbies = ["Being a panda", "Eating bamboo", "Growling quietly", "Fighting crime",
  "Building a tree house", "Rolling around a bit", "Race car driving", "Full-stack development"]

class PandaCreateForm extends Component<Props, State> {
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

  getRandHobby = (): string => hobbies[Math.floor(Math.random()*(hobbies.length-1))]

  getRandImg = (): string => "" + Math.floor(Math.random()*3) // hard coded to three imgs available

  handleSubmit = () => {
    this.props.addNewPanda({
      id: this.props.getUpdatedCount(),
      name: this.state.name,
      age: 5, //this.getRandAge(),
      hobby: "porcupine bowling", //this.getRandHobby(),
      img: "1" //this.getRandImg()
    })
  }

  handleChange = (event: any) => { // workaround
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Desired Panda Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Generate" />
      </form>
    )
  }
}

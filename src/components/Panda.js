// @flow
import React from 'react'

type Props = {
  id: number,
  name: string,
  age: number,
  hobby: string,
  img: string
}

const Panda = (props: Props) => (
  <div>
    <p>Name: {props.name} | Age: {props.age} | Hobby: {props.hobby}</p>
    <img src={require("../imgs/panda"+props.img+".jpg")} alt="most likely a panda" />
  </div>
)

export type { Props as PandaType }
export default Panda

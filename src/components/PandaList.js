// @flow
import React, { type ChildrenArray, type Element } from 'react'
import Panda from './Panda.js'

type Props = {
  children: ChildrenArray<Element<typeof Panda>>
}

const PandaList = (props: Props) => (
  <div className="App-intro">
    {props.children}
  </div>
)

export default PandaList

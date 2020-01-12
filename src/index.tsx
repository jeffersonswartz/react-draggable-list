import { render } from 'react-dom'
import React from 'react'
import DraggableList from './DraggableList'

render(<DraggableList items={'Lorem ipsum dolor sit'.split(' ')} />, document.getElementById('root'))

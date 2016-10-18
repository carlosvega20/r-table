import React, { Component } from 'react'
import Table from './Table.js'

const source = [
    {'a': 1, 'b': 2, 'c': 3},
    {'a': 4, 'b': 5, 'c': 6},
    {'a': 7, 'b': 8}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table data={source} />
      </div>
    )
  }
}

export default App

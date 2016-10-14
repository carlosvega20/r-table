import React, { Component } from 'react'
import './App.css'
import Table from './Table.js'

const source = [
    {'Fruit': <div><img src='./mango.png' alt='mango' /> Mango</div>, 'Calories': 201, 'Protein': '2.8g'},
    {'Fruit': <div><img src='./apple.png' alt='apple' /> Apple</div>, 'Calories': 95, 'Protein': '0.5g'},
    {'Fruit': <div><img src='./Orange.png' alt='orange' /> Orange</div>, 'Calories': 45, 'Protein': '0.9g'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table data={source} className="cool-skin"/>
      </div>
    )
  }
}

export default App

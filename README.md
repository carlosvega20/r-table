# r-table
[![npm package](https://img.shields.io/badge/npm-0.3.0-brightgreen.svg)](https://www.npmjs.com/package/r-table)

ReactJS Table Component
Create HTML Table from a list of key and value objects

##Demo
http://r-table.surge.sh/

##Get Started
1. `npm start`

##Usage
npm install r-table

then in your code:

`import Table from "r-table"`

`<Table data={[`
 `   {'a': 1, 'b': 2, 'c': 3},`
  `  {'a': 4, 'b': 5, 'c': 6},`
  `  {'a': 7, 'b': 8}`
`]} />`

<table><thead><tr><th>a</th><th>b</th><th>c</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>4</td><td>5</td><td>6</td></tr><tr><td>7</td><td>8</td></tr></tbody></table>

##TODO
1. Unit test

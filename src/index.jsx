import React from 'react'
import ReactDom from 'react-dom'

const App = () =>
  <h1>Minimal React App booted!</h1>

ReactDom.render(<App />, document.getElementById('app'))

module.hot.accept()

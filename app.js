import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Page1 from './page1'

const App = () => (
  <div>
    <Page1 />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Page1 from './page1'
import Page2 from './page2'

const App = () => (
  <Fragment>
    <Page1 />
    <Page2 />
  </Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))

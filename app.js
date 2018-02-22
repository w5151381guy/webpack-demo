import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import smallImg from './assets/small.png'
import bigImg from './assets/big.png'

import Page1 from './page1'
import Page2 from './page2'

const App = () => (
  <Fragment>
    <Page1 />
    <Page2 />
    <img src={smallImg} alt="small image" />
    <img src={bigImg} alt="big image" />
  </Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))

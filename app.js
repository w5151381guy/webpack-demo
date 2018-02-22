import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { asyncComponent } from 'react-async-component'

// import Page1 from './page1' // sync
const Page1 = asyncComponent({
  // async
  resolve: () => import('./page1'),
})

import Page2 from './page2'

const App = () => (
  <Router>
    <div>
      <Link to="/">Go To Home Page</Link>
      <br />
      <Link to="/page1">Go To Page1</Link>
      <br />
      <Link to="/page2">Go To Page2</Link>
      <br />
      <hr />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))

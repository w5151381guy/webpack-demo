import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import style from './style.css'
import smallImgSrc from './assets/small.png'
import bigImgSrc from './assets/big.png'

// live reload

const Page1 = ({ match }) => {
  return (
    <div className={style.big}>
      I am page1
      <Route
        path={`${match.url}/:itemId`}
        component={({ match }) => (
          <div>I am item{match.params.itemId} in page1</div>
        )}
      />
    </div>
  )
}

export default Page1

import React, {Suspense} from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './Home.css'

const ColorGame = React.lazy(() =>
  import(
    /* webpackChunkName: "color-game" */
    /* webpackPrefetch: 2 */
    '../ColorGame/ColorGame'
  ),
)

const TypographyGame = React.lazy(() =>
  import(
    /* webpackChunkName: "typography-game" */
    /* webpackPrefetch: 1 */
    '../TypographyGame/TypographyGame'
  ),
)

/* How to stop Flash of Loading Content with Code-Splitting ?
 *  - Should we set a delay before showing loader ?
 *  - Or should we always wait a set amount of time ?
 *
 *  see how dynamic imports work
 *  maybe its better to now use .lazy and Suspense ?
 *  use .hydrate and really cut off a section of the app ?
 */

function Home() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <div className="home">
              <h1>Lets play some games!</h1>
              <ul>
                <li>
                  <Link to="color-game">Color Game</Link>
                </li>
                <li>
                  <Link to="typography-game">Typography Game</Link>
                </li>
                <li>
                  <Link to="about-page">About page</Link>
                </li>
              </ul>
            </div>
          </Route>
          <Route path="/color-game">
            <ColorGame />
          </Route>
          <Route path="/typography-game">
            <TypographyGame />
          </Route>
          <Route path="/about-page">
            <h1>About page</h1>
            <p>work in progress</p>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Home

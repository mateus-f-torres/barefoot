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

/* TODO: create Typography Game
const TypographyGame = React.lazy(() =>
  import(
    /* webpackChunkName: "typography-game" /
    /* webpackPrefetch: 1 /
    '../TypographyGame/TypographyGame'
  ),
)
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
              </ul>
            </div>
          </Route>
          <Route path="/color-game">
            <ColorGame />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Home

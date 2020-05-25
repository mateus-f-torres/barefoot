import React, {Suspense} from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

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

function Home() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <h1 className="header">Lets play some games!</h1>
            <Link to="color-game">Color Game</Link>
            <Link to="typography-game">Typography Game</Link>
          </Route>
          <Route path="/color-game">
            <ColorGame />
          </Route>
          <Route path="/typography-game">
            <TypographyGame />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Home

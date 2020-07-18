import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './Home.css'

async function getColorGame() {
  const {default: ColorGame} = await import(
    /* webpackChunkName: "color-game" */
    /* webpackPrefetch: 2 */
    '../ColorGame/ColorGame'
  )

  return ColorGame
}

async function getTypographyGame() {
  const {default: TypographyGame} = await import(
    /* webpackChunkName: "typography-game" */
    /* webpackPrefetch: 1 */
    '../TypographyGame/TypographyGame'
  )

  return TypographyGame
}

function Loader(props) {
  const ComponentRef = React.useRef()
  const [timeout, setTimeout] = React.useState(false)

  React.useEffect(() => {
    window.setTimeout(removeTimer, 3000)
    props.lazy().then(setComponentRef, console.error)
  }, [])

  function removeTimer() {
    setTimeout(true)
  }

  function setComponentRef(component) {
    ComponentRef.current = component
  }

  return timeout && ComponentRef.current ? (
    <ComponentRef.current />
  ) : (
    <div>loading...</div>
  )
}

function Home() {
  return (
    <BrowserRouter>
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
          <Loader lazy={getColorGame} />
        </Route>
        <Route path="/typography-game">
          <Loader lazy={getTypographyGame} />
        </Route>
        <Route path="/about-page">
          <h1>About page</h1>
          <p>work in progress</p>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Home

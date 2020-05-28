function createGame(container) {
  return {
    start: createStart(container.childNodes),
    guess: createGuess(),
    continue: createContinue(),
    finish: createFinish(container.childNodes),
  }
}

function createStart(nodes) {
  return function () {
    const randomIndex = Math.floor(Math.random() * nodes.length)

    nodes.forEach((n) =>
      n.style.setProperty('background-color', getRandomHexColor()),
    )

    return nodes[randomIndex].style.getPropertyValue('background-color')
  }
}

function createGuess() {
  return function (node, color) {
    return node.style.getPropertyValue('background-color') == color
  }
}

function createContinue() {
  return function (node) {
    node.style.setProperty('background-color', 'transparent')
  }
}

function createFinish(nodes) {
  return function (color) {
    nodes.forEach((n) => n.style.setProperty('background-color', color))
  }
}

function getRandomHexColor() {
  return '#' + Math.random().toString(16).slice(2, 8).padStart(6, '0')
}

export default createGame

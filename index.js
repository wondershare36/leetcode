
let number2 = 0

function add2() {
  number2++
  render()
}
function minus2() {
  number2--
  render()
}
function App() {
  return (
    <div>
      <Box1 />
      <Box2 />
    </div>
  )
}

function Box1() {
  let number1 = 0
  function add1() {
    number1++
    render()
  }
  function minus1() {
    number1--
    render()
  }
  return <div>
    <span className="red">{number1}</span>
    <button onClick={add1}>+</button>
    <button onClick={minus1}>-</button>
  </div>
}

function Box2() {
  return <div>
    <span className="red">{number2}</span>
    <button onClick={add2}>+</button>
    <button onClick={minus2}>-</button>
  </div>
}

render()

function render() {
  ReactDOM.render(
    <App />,
    document.querySelector("#root")
  )
}
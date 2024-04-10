import Bagde from "./Components/Badges"


export default function App() {
  return (
    <div className="container">
      <div className="bagde-container">
        <h1>Bagde Components</h1>
        <Bagde size="sm" variant="pill" color="red">Button</Bagde>
        <Bagde size="sm" variant="square" color="green">Button</Bagde>
      </div>


    </div>
  )
}
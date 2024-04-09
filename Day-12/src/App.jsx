import Badges from "./Components/Badges"
export default function App() {

  return (
    <div className="container">
        <div className="badge-container">
            <h1>Badge</h1>
            <p>This is the Bagde Components that support size, varient, color.</p>
            <pre>
               size = "sm / lg", varient = "pill / square" <br/>
               color = "red / green / yellow / blue / indigo / pirple / pink "
            </pre>
            <div className="badge">
                <Badges size="sm" varient="pill" color="green" >Pill</Badges>
                <Badges size="sm" varient="square" color="red">Square</Badges>
                <Badges size="lg" varient="" color="blue" >Pill</Badges>
                <Badges size="lg" varient="square" color="pink">Square</Badges>
            </div>
        </div>
    </div>
  )
}
import Star from "./Components/Star"


export default function App() {
  return (
    <div>
        <Star onChange={() => console.log('Star CLicked')} />
    </div>
  )
}
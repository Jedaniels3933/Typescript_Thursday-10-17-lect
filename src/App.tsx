import { useState } from 'react'
import UserComponent from './components/UserComponent'

type Person = {
  name: string,
  age: number
}

function App() {
  // to manually type our state we use <TYPE> like so:
  // but it's not required because typescript can infer the state's type from our default value
  const [count, setCount] = useState<number>(0)
  const [person, setPerson] = useState<Person>({ name: "", age: 0})

  return (
    <>
      <UserComponent />
    </>
  )
}

export default App
import React from 'react'
import Sample1 from './Components/Sample1'
import Sample2 from './Components/Sample2'

const arr= ["hello","World"]
const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Sample1 name = "Nikith Mint" age = {56} />
      <Sample2 array = {arr}/>
    </>
  )
}
export default App

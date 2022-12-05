import React, {useState} from 'react'
import ong from '@/assets/imgs/large.png'
import './app.less'

function App() {
  const [count, setCount] = useState('')
  const onChange = (e: any) => {
    setCount(e.target.value)
  }
  return (
    <>
      <h2>webpack5+react+ts</h2>
      <p>受控组件</p>
      <input type="text" value={count} onChange={onChange}/>
      <br/>
      <p>非受控组件</p>
      <input type="text"/>
      <img src={ong}/>
    </>
  )
}

export default App

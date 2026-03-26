import React from 'react'
import Button from './components/Button';

function App() {
  return (
    <div>

      <Button text={"Primary"} variant='primary' />
      <Button text={"Danger"} variant='danger' />
      <Button text={"Warning"} variant='warning' />
      <Button text={"Success"} variant='success' />
    </div>
  )
}

export default App
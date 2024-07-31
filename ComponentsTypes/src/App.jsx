import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ControlledComponent, ParentComponent, UnControlledComponent } from './Components'

function App() {

  return (
    <>
    {/* <UnControlledComponent/>
    <ControlledComponent /> */}
      <h1>Controlled and Uncontrolled Components</h1>
    <ParentComponent />
    
    </>
  )
}

export default App

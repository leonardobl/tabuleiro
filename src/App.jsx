import { useState } from 'react'
import { Tabuleiro } from './components/tabuleiro'
import { GlobalStyles } from './GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Tabuleiro />
     <GlobalStyles />
    </div>
  )
}

export default App

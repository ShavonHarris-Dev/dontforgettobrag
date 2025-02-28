import './App.css'
import { Header } from './components/Header'
import { WinForm } from './components/WinForm'
import { WinList } from './components/WinsList'
import { useState } from 'react'

function App() {
  const [wins, setWins] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)
  console.log(wins)

function addWin(newWin){
  setWins([...wins, newWin])
  setShowConfetti(true)
  

  setTimeout(()=> {
    setShowConfetti(false)
  }, 3000)
}

  return (
    <div className='wins-tracker confetti-container' aria-hidden="true">
        <>
          <Header />
          <WinForm addWin={addWin}/>
          <WinList wins={wins}/>

          {showConfetti && <div className="confetti-container"></div>}
        </>
    </div>
  )
}

export default App

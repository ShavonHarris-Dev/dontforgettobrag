import './App.css'
import { Header } from './components/Header'
import { WinForm } from './components/WinForm'
import { WinList } from './components/WinsList'

function App() {


  return (
    <div className='wins-tracker class="confetti-container" aria-hidden="true"'>
        <Header />
        <WinForm />
        <WinList />
    </div>
  )
}

export default App

import './App.css'
import { Features } from './components/Features'
import { Header } from './components/Header'
import { Princing } from './components/Pricing'

function App() {

  return (
    <div className='App'>
      <Header/>
      <Princing/>
      <Features/>
    </div>
  )
}

export default App

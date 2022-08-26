import CurrencyConverter from './components/CurrencyConverter'
import Header from './components/Header'
import About from './components/About'
import History from './components/History'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="app">
        <Header />
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CurrencyConverter />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/history' element={<History />}/>
            </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
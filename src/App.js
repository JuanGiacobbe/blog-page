// importing react router
import { BrowserRouter, Routes, Route} from 'react-router-dom'


// importing pages
import Home from './pages/home/Home'
import Landing from './pages/landing/Landing'



// importing styles
import './App.css';

function App() {
  return (
    <div className="App">
      <main className='main'>

        <BrowserRouter>
          <Routes>

          <Route path='/' element={ <Home />} />
          <Route path='/account-register' element={ <Landing />} />

          
          </Routes>
        </BrowserRouter>

      </main>
    </div>
  );
}

export default App;

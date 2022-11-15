import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'

// pages components
import Home from './pages/Home'
import Places from './pages/Places'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/places' element={<Places/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

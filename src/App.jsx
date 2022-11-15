import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'

// pages components
import Home from './pages/Home'
import Places from './pages/Places'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/places">Places</NavLink>
        </nav> */}

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/places' element={<Places/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

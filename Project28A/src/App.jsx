import { use, useState } from 'react'
import { useParams } from 'react-router-dom'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import RecipebyID from './components/RecipeByID'
import Login from './components/Login'
import Register from './components/Register'
import Favorites from './components/Favorites'
import Authenticated from './components/Authenticated'

function App() {
  const [token, setToken] = useState(null)
  const [favorites, setFavorites] = useState([])
  
  
  

  return (
    <>
     <nav id="navBar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {token && <Link to="/favorites">Favorites</Link>}
        
      </nav>
    
    <div>
     
      <div>
        <Routes>
          <Route path="/" element={<Home token={token} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path= "/recipe/:id" element={<RecipebyID/>}/>
          <Route path="/login" element={<Login setToken={setToken}/>}/>
          <Route path="/register" element={<Register/>}/>

          {/* only if authenticated */}
          <Route path="/favorites" 
            element={
            <Authenticated token={token}>
              <Favorites favorites={favorites} setFavorites={setFavorites}/>
              </Authenticated>
              }
              />
        </Routes>
      </div>
    </div>
    
    



    </>
  )
}

export default App

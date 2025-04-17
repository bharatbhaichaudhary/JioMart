
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ProductList from './pages/Products'
import UserProfile from './pages/UserProfile'
import Product from './pages/Product'
import ProtectdRout from './pages/ProtectdRout'
import AuthProtedRoute from './pages/AuthProtedRoute'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<ProtectdRout><ProductList/></ProtectdRout>}/>
      <Route path='/product/:id' element={<ProtectdRout><Product/></ProtectdRout>}/>
      <Route path='/user' element={<ProtectdRout><UserProfile/></ProtectdRout>}/>
      <Route path='/login' element={<AuthProtedRoute><Login/></AuthProtedRoute>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

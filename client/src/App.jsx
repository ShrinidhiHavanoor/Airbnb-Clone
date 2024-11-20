import './App.css'
import { Routes, Route } from 'react-router-dom'
import IndexPage from './Pages/IndexPage'
import LoginPage from './Pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './Pages/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage/>}/> 
      <Route path='/login' index element={<LoginPage/>}/>
      <Route path='/register' index element={<RegisterPage/>}/>
      </Route>
    </Routes>
  )
}

export default App

import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation'
import SignIn from './routes/sign-in/sign-in'

const Shop = () => {
  return
  <h1>Shop</h1>
}

function App() {
  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home/>}/>
      <Route path='shop' element={<Shop/>}></Route>
      <Route path='signIn' element={<SignIn/>}></Route>
    </Route>
  </Routes>
  )
}

export default App

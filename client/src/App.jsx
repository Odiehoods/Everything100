import React from 'react'
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute';
import userReducer from './redux/user/userSlice';
import { useSelector } from 'react-redux'
import CreatePost from './pages/CreatePost'


export default function App() {

  const { currentUser } = useSelector((state) => state.user);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
          <Route path='/dashboard' element={currentUser ? <Dashboard /> : <Navigate to="/signin"/>} />
          <Route path='/create-post' element={currentUser && currentUser.isAdmin ? <CreatePost /> : <Navigate to="/signin"/>} />
        
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}




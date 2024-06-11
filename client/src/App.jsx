import React from 'react'
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'
import Search from './pages/Search'
import Archive from './pages/Archive'



export default function App() {

  const { currentUser } = useSelector((state) => state.user);


  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:postSlug' element={<PostPage/>} />
        
          <Route path='/dashboard' element={currentUser ? <Dashboard /> : <Navigate to="/signin"/>} />
          <Route path='/create-post' element={currentUser && currentUser.isAdmin ? <CreatePost /> : <Navigate to="/signin"/>} />
          <Route path='/update-post/:postId' element={currentUser && currentUser.isAdmin ? <UpdatePost /> : <Navigate to="/signin"/>} />
        
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search' element={<Search />} />
        <Route path='/archive' element={<Archive />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}




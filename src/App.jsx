import './App.css'
import NavBar from './shared/NavBar'
import Footer from './shared/Footer'
import Home from './components/Home'
import Search from './components/Search'
import Upload from './components/Upload'
import ViewMy from './components/ViewMy'
import ViewAll from './components/ViewAll'
import Contact from './components/Contact'
import Authenticate from './components/Authenticate'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/view_my" element={<ViewMy />} />
        <Route path="/view_all" element={<ViewAll />} />
        <Route path="/contact_us" element={<Contact/>} />
        <Route path='/sign_up_login' element={<Authenticate/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

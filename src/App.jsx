import './App.css'
import NavBar from './shared/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import Submit from './components/Submit'
import ViewMy from './components/ViewMy'
import ViewAll from './components/ViewAll'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/view_my" element={<ViewMy />} />
        <Route path="/view_all" element={<ViewAll />} />
      </Routes>
    </>
  )
}

export default App


import './App.css'
import { Routes,Route } from 'react-router'
import { HomePage } from './pages/HomePage'
function App() {

  return (
    <>
    <Routes>
      <Route index path="9+/" element={<HomePage />} />
      <Route path="checkout" element={<div>Test checkout page</div>} />
    </Routes>
   
    </>
  )
}

export default App

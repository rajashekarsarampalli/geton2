
import './App.css'
import { Routes,Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'

function App() {

  return (
    <>
    <Routes>
      <Route index path="/" element={<HomePage/>} />
      <Route path="checkout" element={<CheckoutPage/>} />
      <Route path="orders" element={<OrdersPage></OrdersPage>}></Route>
      <Route path="tracking" element={<TrackingPage></TrackingPage>}></Route>
    </Routes>
   
    </>
  )
}

export default App

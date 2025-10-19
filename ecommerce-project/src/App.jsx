import { HomePage } from "./pages/HomePage/HomePage"
import { Routes,Route } from "react-router"
import { CheckoutPage } from "./pages/Checkout/CheckoutPage"
import { OrdersPage } from "./pages/Orders/OrdersPage"
import { TrackingPage} from "./pages/Tracking/TrackingPage" 

function App() {

  return (
    
    <Routes>
      <Route index element={<HomePage /> } />
      <Route path="checkout" element={<CheckoutPage /> } />
      <Route path="orders" element={<OrdersPage /> } />
      <Route path="tracking" element={<TrackingPage /> } />

    </Routes>

  )
}

export default App

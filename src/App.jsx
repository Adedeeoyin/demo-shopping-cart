import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductListing from "./pages/Product/ProductListing"
import Shopping_cart from "./pages/Product/Shopping_cart"
import { Provider } from "react-redux"
import store from "./redux/store"
function App() {

  return (
    <div className="font-mont w-screen">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product-list' element={<ProductListing/>} />
          <Route path='/shopping-cart' element={<Shopping_cart/>} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App

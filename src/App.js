import Header from "./Componets/Header"
import Main from "./Componets/Main"
import Footer from "./Componets/Footer"
import {BrowserRouter} from "react-router-dom"
import { CartProvider } from "./Componets/CartContext"

const App = () => {

  return(
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
};

export default App
import Header from "./Componets/Header"
import Main from "./Componets/Main"
import Footer from "./Componets/Footer"
import {BrowserRouter} from "react-router-dom"


const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
};

export default App
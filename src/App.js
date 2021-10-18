import Header from "./Componets/Header"
import Main from "./Componets/Main"
import Footer from "./Componets/Footer"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./Componets/CustomProvider"

const App = () => {

  return(
      <BrowserRouter>
        <CustomProvider>
          <Header />
          <Main />
        </CustomProvider>
        <Footer />
      </BrowserRouter>
  )
};

export default App
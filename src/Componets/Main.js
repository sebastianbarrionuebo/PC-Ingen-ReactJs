import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ItemDetailContainer from "./ItemDetailContainer";
import StoreContainer from "./StoreContainer";
import FormularioCompra from "./FormularioCompra";

const Main = () => {
    return (
        <main>
            <Switch >
                <Route path="/" component={Home} exact />
                <Route path="/Store" component={StoreContainer} exact />
                <Route path="/Item/:id" component={ItemDetailContainer} exact />
                <Route path="/Cart" component={Cart} exact />
            </Switch>
        </main>
    );
}

export default Main;
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ItemDetailContainer from "./ItemDetailContainer";
import StoreContainer from "./StoreContainer";
import Coming from "./Coming"
import ReciboContainer from "./ReciboContainer";

const Main = () => {
    return (
        <main>
            <Switch >
                <Route path="/" component={Home} exact />
                <Route path="/Store" component={StoreContainer} exact />
                <Route path="/Item/:id" component={ItemDetailContainer} exact />
                <Route path="/Cart" component={Cart} exact />
                <Route path="/Armado" component={Coming} exact />
                <Route path="/Recibo" component={ReciboContainer} exact />
            </Switch>
        </main>
    );
}

export default Main;
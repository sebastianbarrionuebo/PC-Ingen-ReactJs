import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./CartContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import StoreContainer from "./StoreContainer";
import Coming from "./Coming"

const Main = () => {
    return (
        <main>
            <h2>Esto es el main</h2>
            <Switch >
                <Route path="/" component={Home} exact />
                <Route path="/Store" component={StoreContainer} exact />
                <Route path="/Item/:id" component={ItemDetailContainer} exact />
                <Route path="/Cart" component={Cart} exact />
                <Route path="/Armado" component={Coming} exact />
            </Switch>
        </main>
    );
}

export default Main;
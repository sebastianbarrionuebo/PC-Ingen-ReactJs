import { Route, Switch } from "react-router-dom";
import StoreContainer from "./StoreContainer";
import Coming from "./Coming"
import Home from "./Home";
import Cart from "./CartContainer";

const Main = () => {
    return (
        <main>
            <Switch >
                <Route path="/" component={Home} exact />
                <Route path="/Store" component={StoreContainer} exact />
                <Route path="/Armado" component={Coming} exact />
                <Route path="/Cart" component={Cart} exact />
            </Switch>
        </main>
    );
}

export default Main;
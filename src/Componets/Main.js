import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import StoreContainer from "./StoreContainer";
import Coming from "./Coming"

const Main = () => {
    return (
        <main>
            <Switch >
                <Route path="/" component={Home} exact />
                <Route path="/Store" component={StoreContainer} exact />
                <Route path="/Armado" component={Coming} exact />
            </Switch>
        </main>
    );
}

export default Main;
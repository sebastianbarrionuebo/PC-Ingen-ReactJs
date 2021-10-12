import Home from "./Home";
import Cart from "./Cart";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Switch } from "react-router-dom";

const Main = () => {
    return (
        <>
            <main>
                <Switch >
                    <Route path="/" component={Home} exact />
                    <Route path="/Category/:id" component={ItemListContainer} exact />
                    <Route path="/Item/:id" component={ItemDetailContainer} exact />
                    <Route path="/Cart" component={Cart} exact />
                </Switch>
            </main>
        </>
    );
}

export default Main;
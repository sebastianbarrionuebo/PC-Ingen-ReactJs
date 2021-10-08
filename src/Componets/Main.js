import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

const Main = () => {
    return (
        <>
            <main>
                <Switch >
                    <Route path="/" component={Home} exact />
                    <Route path="/Category/:id" component={ItemListContainer} exact />
                    <Route path="/Item/:id" component={ItemDetailContainer} exact />
                </Switch>
            </main>
        </>
    );
}

export default Main;
import { Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Coming from "./Coming"
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
    return (
        <>
            <main>
                <Container className="pt-4">
                    <Row>
                        <Switch >
                            <Route path="/" component={Home} exact />
                            <Route path="/Store" component={ItemListContainer} exact />
                            <Route path="/Item/:id" component={ItemDetailContainer} exact />
                            <Route path="/catalogo/:id" component={ItemListContainer} exact />
                            <Route path="/Cart" component={Cart} exact />
                        </Switch>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Main;
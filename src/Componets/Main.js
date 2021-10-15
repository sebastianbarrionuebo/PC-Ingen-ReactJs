import Home from "./Home";
import Cart from "./Cart";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

const Main = () => {
    return (
        <>
            <main>
                <Container className="pt-4">
                    <Row>
                        <Switch >
                            <Route path="/" component={Home} exact />
                            <Route path="/Category/:id" component={ItemListContainer} exact />
                            <Route path="/Item/:id" component={ItemDetailContainer} exact />
                            <Route path="/Cart" component={Cart} exact />
                        </Switch>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Main;
import { Route, Switch, useRouteMatch, BrowserRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import NavStore from "./NavStore"
import Cart from "./CartContainer";
import "../CSS/store.css"

const Store = () => {
    let { path } = useRouteMatch();

    return (
        <BrowserRouter>
            <Container fluid={true}>
                <Row>
                    <NavStore/>
                </Row>
                <Row className="container--items__padding">
                    <Switch >
                        <Route path="/Store" component={ItemListContainer} exact />
                        <Route path="/Productos/:id" component={ItemListContainer} ></Route>
                        <Route path="/Item/:id" component={ItemDetailContainer} exact />
                        <Route path="/Cart" component={Cart} exact />
                    </Switch>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default Store;
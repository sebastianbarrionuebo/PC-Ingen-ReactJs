import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import NavStore from "./NavStore"
import Cart from "./CartContainer";
import "../CSS/store.css"

const Store = () => {
    return (
        <BrowserRouter>
            <Container fluid={true}>
                <Row>
                    <NavStore/>
                </Row>
                <Row className="container--items__padding">
                    <Switch >
                        <Route path="/Store" component={ItemListContainer} exact />
                        <Route path="/Store/Productos/:id" component={ItemListContainer} ></Route>
                        <Route path="/Store/Item/:id" component={ItemDetailContainer} exact />
                        <Route path="/Store/Cart" component={Cart} exact />
                    </Switch>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default Store;
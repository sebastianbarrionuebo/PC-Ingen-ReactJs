import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer"
import NavStore from "./NavStore"
import Cart from "./CartContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import "../CSS/store.css"

const Store = () => {
    return (
        <Router>
            <Container fluid={true}>
                <Row>
                    <NavStore/>
                </Row>
                <Row className="container--items__padding">
                    <Switch >
                        <Route path="/Store" component={ItemListContainer} exact />
                        <Route path="/Productos/:id" component={ItemListContainer} />
                        <Route path="/Item/:id" component={ItemDetailContainer} exact />
                        <Route path="/Store/Cart" component={Cart} exact />
                    </Switch>
                </Row>
            </Container>
        </Router>
    );
}

export default Store;
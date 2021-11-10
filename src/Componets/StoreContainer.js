import { Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer"
import NavStore from "./NavStore"
import "../CSS/store.css"

const Store = () => {
    return (
        <Container fluid={true}>
            <Row>
                <NavStore/>
            </Row>
            <Row className="container--items__padding">
                <Switch >
                    <Route path="/Store" component={ItemListContainer} exact />
                    <Route path="/productos/:id" component={ItemListContainer} exact />
                </Switch>
            </Row>
        </Container>
    );
}

export default Store;
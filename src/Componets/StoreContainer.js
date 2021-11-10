import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer"
import NavStore from "./NavStore"
import "../CSS/store.css"

const Store = () => {
    let { path } = useRouteMatch();

    return (
        <Container fluid={true}>
            <Row>
                <NavStore/>
            </Row>
            <Row className="container--items__padding">
                <Switch >
                    <Route path="/Store" component={ItemListContainer} exact />
                    <Route path={`${path}/:id`} component={ItemListContainer} exact><ItemListContainer /></Route>
                </Switch>
            </Row>
        </Container>
    );
}

export default Store;
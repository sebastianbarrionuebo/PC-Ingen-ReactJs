import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer"
import NavStore from "./NavStore"
import "../CSS/store.css"

const Store = () => {
    let { path } = useRouteMatch();

    return (
        <Container fluid={true}>
            <h2>Esto es la Store</h2>
            <Row>
                <NavStore/>
            </Row>
            <Row className="container--items__padding">
                <Switch >
                    <Route path={path} component={ItemListContainer} exact />
                    <Route path={`${path}/:id`} ><ItemListContainer /></Route>
                </Switch>
            </Row>
        </Container>
    );
}

export default Store;
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemListContainer from "./ItemListContainer"
import NavStore from "./NavStore"
import "../CSS/store.css"

const Store = () => {
    let { path } = useRouteMatch();

    return (
        <Container fluid={true}>
<<<<<<< HEAD
            <h2>Esto es la Store</h2>
=======
>>>>>>> 4d47c6e7fcf6d05b73033587e11aa80083f688e8
            <Row>
                <NavStore/>
            </Row>
            <Row className="container--items__padding">
                <Switch >
<<<<<<< HEAD
                    <Route path={path} component={ItemListContainer} exact />
                    <Route path={`${path}/:id`} ><ItemListContainer /></Route>
=======
                    <Route path="/Store" component={ItemListContainer} exact />
                    <Route path="/productos/:id" component={ItemListContainer} exact />
>>>>>>> 4d47c6e7fcf6d05b73033587e11aa80083f688e8
                </Switch>
            </Row>
        </Container>
    );
}

export default Store;
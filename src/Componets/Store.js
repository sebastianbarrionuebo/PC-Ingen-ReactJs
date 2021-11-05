import ItemListContainer from "./ItemListContainer"
import NavStore from "./NavStore"
import { Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import WhereListContainer from "./WhereListContainer"


const Store = () => {
    return (
        <>
            <Container>
                <Row>
                    <NavStore/>
                </Row>
                <Row>
                    <Switch >
                        <Route path="/Store" component={ItemListContainer} exact />
                        <Route path="/productos/:id" component={WhereListContainer} exact />
                    </Switch>
                </Row>
            </Container>
        </>
    );
}

export default Store;
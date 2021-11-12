import { Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Home from "./Home";
import StoreContainer from "./StoreContainer";
import Coming from "./Coming"
import Cart from "./CartContainer";
import "../CSS/store.css"

const Main = () => {
    return (
        <main>
            <Switch >
                <Route path="/" component={Home} exact />
                <Route path="/Store" component={StoreContainer} exact />
                <Route path="/Armado" component={Coming} exact />
                <Container fluid={true}>
                    <Row className="container--items__padding">
                        <Route path="/Cart" component={Cart} exact />
                    </Row>
                </Container>
            </Switch>
        </main>
    );
}

export default Main;
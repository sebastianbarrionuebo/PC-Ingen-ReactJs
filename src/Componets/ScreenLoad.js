import { Container, Row, Col } from "react-bootstrap"

const ScreenLoad = () => {
    return (
        <>
            <Container className="cargando-style">
                <Row>
                    <Col sm={3} md={3} ></Col>
                    <Col sm={3} md={4} >
                        <p>Cargando!</p>
                        <p>Un momento por favor</p>
                    </Col>
                    <Col sm={3} md={2} >
                        <span className="material-icons material-icons_size">autorenew</span>
                    </Col>
                    <Col sm={3} md={3} ></Col>
                </Row>
            </Container>
        </>
    );
}

export default ScreenLoad;
import { useState } from "react"
import Button from  "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"


const ItemCount = ({ stock, initial}) => {
    const [contador, setContador] = useState(initial);
    
    
    const sumar = () => {
        if ((contador >= 0) && (contador < stock)) {
            setContador(contador + 1)
        }
    };
    const restar = () => {
        if ((contador > 0) && (contador <= stock)) {
            setContador(contador - 1)
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p className="text-center">El contador va: {contador}</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center p-2" sm={6}>
                        <Button variant="success" onClick={sumar}>Sumar</Button>
                    </Col>
                    <Col className="text-center p-2" sm={6}>
                        <Button variant="danger" onClick={restar}>Restar</Button>
                    </Col>
                </Row>
                <Row className="p-2">
                    <Col className="text-center">
                        <Button variant="dark" src="http://..." value={contador}>onAdd</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemCount;
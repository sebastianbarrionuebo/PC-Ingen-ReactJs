import { Container, Row, Col, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { useState } from "react"

const ItemCount = ({ stock, initial, add}) => {
    const [contador, setContador] = useState(initial);
    const [select, setSelect] = useState(true)
    
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

    const addCarrito = () => {
        add(contador)
        setSelect(false)
    }

    return (
        <> 
            { select ?
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
                <Row>
                    <Col className="text-center pb-2">
                        <Button variant="dark" onClick={addCarrito}>onAdd</Button>
                    </Col>
                </Row>
            </Container>
            :
            <Container>
                <Row>
                    <Col className="text-center" >
                        <Link className="btn btn-dark" to="/Category/1" >Seguir comprando</Link>
                    </Col>
                    <Col className="text-center" >
                        <Link className="btn btn-dark" to="/Cart" >Ir al carrto</Link>
                    </Col>
                </Row>
            </Container>
            }
        </>
    );
}

export default ItemCount;
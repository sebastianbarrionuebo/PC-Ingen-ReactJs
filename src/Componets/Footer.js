import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                    <Container fluid={true} >
                        <Row className="separator-top">
                            <div ></div>
                        </Row>
                        <Row className="footer-style pt-3 pb-3" >
                            <Col className="text-center" >
                                <h4>PC Ingen</h4>
                                <hr />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vitae quidem dolores tempore. Nostrum porro, laboriosam cupiditate consectetur, totam accusantium numquam adipisci ullam doloremque iure, exercitationem quam sapiente autem eaque?</p>
                            </Col>
                            <Col className="text-center" >
                                <h4>Contacto</h4>
                                <hr />
                                <p>Argentina,Buenos Aires,Mar del Plata</p>
                                <p>Administracion@PCIngen.com</p>
                                <p>+ 54 9 223 5816034</p>
                                <p>+ 54 9 223 6298347</p>
                            </Col>
                            <Col className="text-center" >
                                <h4>Links</h4>
                                <hr />
                                <Container>
                                    <Row className="pt-2 pb-2" ><Link to="/" >Home</Link></Row>
                                    <Row className="pt-2 pb-2" ><Link to="/" >Armado</Link></Row>
                                    <Row className="pt-2 pb-2" ><Link to="/Category/1" >Store</Link></Row>
                                </Container>
                            </Col>
                            <Col className="text-center" >
                                <h4>Ubicacion</h4>
                                <hr />
                                
                            </Col>
                        </Row>
                        <Row className="separator-botton">
                            <p className="text-center" >Copyrigth 2021 - Barrionuebo Sebastian</p>
                        </Row>
                    </Container>
            </footer>
        </>
    );
}

export default Footer;
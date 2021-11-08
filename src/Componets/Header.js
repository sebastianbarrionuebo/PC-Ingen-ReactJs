import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import NavItems from './NavItems'
import "../CSS/header.css"


const {Brand,Collapse,Toggle} = Navbar

const Header = () => {
    return(
        <Container fluid={true} fixed="top">
                <Row>
                    <Navbar as="header" expand="md" bg="dark" variant='dark'>
                        <Brand className="header--brand__padding" >
                            <Link className="header--brand__style" to="/" >
                                <h1>PC-Ingen</h1>
                            </Link>
                        </Brand>
                        <Toggle/>
                        <Collapse>
                            <NavItems/>
                        </Collapse>
                    </Navbar>
                </Row>
        </Container>
    )
}

export default Header;
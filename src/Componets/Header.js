import Navbar from "react-bootstrap/Navbar"
import NavItems from './NavItems'
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import NavStore from "./NavStore"
import "../CSS/header.css"


const {Brand,Collapse,Toggle} = Navbar

const Header = () => {
    return(
        <Container fluid={true} fixed="top">
                <Row>
                    <Navbar as="header" expand="md" bg="dark" variant='dark'>
                        <Container >
                            <Brand>
                                <Link to="/" >
                                    <h1>PC-Ingen</h1>
                                </Link>
                            </Brand>
                            <Toggle/>
                            <Collapse>
                                <NavItems/>
                            </Collapse>
                        </Container>
                    </Navbar>
                </Row>
                <Row>
                    {/*<NavStore/>*/}
                </Row>
        </Container>
    )
}

export default Header;
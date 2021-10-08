import Navbar from "react-bootstrap/Navbar"
import NavItems from './NavItems'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"

const {Brand,Collapse,Toggle} = Navbar

const Header = () => {
    return(
        <Navbar as="header" expand="md" bg="dark" variant='dark' fixed="top">
            <Container fluid={true}>
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
    )
}

export default Header;
import Navbar from "react-bootstrap/Navbar"
import NavItems from './NavItems'
import Container from "react-bootstrap/Container"


const {Brand,Collapse,Toggle} = Navbar

const Header = () => {
    return(
        <Navbar as="header" expand="md" bg="dark" variant='dark' fixed="top">
            <Container fluid={true}>
                <Brand>
                    <h1>PC-Ingen</h1>
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
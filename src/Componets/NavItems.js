import { Container, Nav } from 'react-bootstrap'
import { Link, } from 'react-router-dom';
import CartWidget from './CartWidget';
import "../CSS/header.css"

const {Item} = Nav

const NavItems = () => {

    return (
        <Container>
            <Nav className="justify-content-end">
                <Item className="p-1">
                    <Link className="nav--link__style" to="/">Home</Link>
                </Item>
                <Item className="p-1">
                    <Link className="nav--link__style" to="/Armado">Armado</Link>
                </Item>
                <Item className="p-1">
                    <Link className="nav--link__style" to="/Store">Store</Link>
                </Item>
                <Item className="p-1">
                    <Link className="nav--link__style" to="/Cart"><CartWidget/></Link>
                </Item>
            </Nav>
        </Container>
    );
}

export default NavItems;
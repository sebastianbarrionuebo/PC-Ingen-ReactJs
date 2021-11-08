import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const {Item} = Nav

const NavItems = () => {
    return (
        <>
            <Container>
                <Nav className="justify-content-end">
                    <Item className="p-1">
                        <Link to="/">Home</Link>
                    </Item>
                    <Item className="p-1">
                        <Link to="/Armado">Armado</Link>
                    </Item>
                    <Item className="p-1">
                        <Link to="/Store">Store</Link>
                    </Item>
                    <Item className="p-1">
                        <Link to="/Cart"><CartWidget/></Link>
                    </Item>
                </Nav>
            </Container>
        </>
    );
}

export default NavItems;
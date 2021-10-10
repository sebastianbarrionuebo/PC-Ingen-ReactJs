import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

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
                        <Link to="/Category/1">Store</Link>
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
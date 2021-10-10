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
<<<<<<< HEAD
                        <Link to="/Category/1">Store</Link>
=======
                        <Link to="/Category/2">Store</Link>
>>>>>>> 7ef43625ba8508cccca1f615223b996ffc8674e1
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
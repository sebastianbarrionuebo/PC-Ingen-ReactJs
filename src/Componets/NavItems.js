import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget';


const {Link,Item} = Nav

const NavItems = () => {
    return (
        <>
            <Container>
                <Nav className="justify-content-end">
                    <Item>
                        <Link href="/">Index</Link>
                    </Item>
                    <Item>
                        <Link href="/">Armado</Link>
                    </Item>
                    <Item>
                        <Link href="/">Contacto</Link>
                    </Item>
                    <Item>
                        <CartWidget/>
                    </Item>
                </Nav>
            </Container>
        </>
    );
}

export default NavItems;
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import "../CSS/navStore.css"

const {Item} = Nav

const NavStore = () => {
    return ( 
            <Nav className = "justify-content-center bg-dark" variant="tabs">
                <Item className="item-style" ><Link to="/catalogo/Productos"> Procesadores </Link></Item>
                <Item className="item-style" ><Link to="/catalogo/motherboards"> Motherboards </Link></Item>
                <Item className="item-style" ><Link to="/catalogo/graficas"> Targetas Graficas </Link></Item>
                <Item className="item-style" ><Link to="/catalogo/ram"> Memoria RAM </Link></Item>
                <Item className="item-style" ><Link to="/catalogo/fuentes"> Fuentes </Link></Item>
                <Item className="item-style" ><Link to="/catalogo/discorigidos"> Discos Rigidos </Link></Item>
                <Item className="item-style" ><Link to="/catalogo/coolers"> Coolers </Link></Item>
                <Item className="item-style" ><Link to="/catalogo/gabnetes"> Gabinetes </Link></Item>
            </Nav>
    );
}

export default NavStore;
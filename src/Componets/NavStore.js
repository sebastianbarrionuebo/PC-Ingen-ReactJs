import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import "../CSS/navStore.css"

const {Item} = Nav

const NavStore = () => {
    return ( 
            <Nav className = "justify-content-center bg-dark" variant="tabs">
                <Item className="item-style" ><Link to="/productos/procesadores"> Procesadores </Link></Item>
                <Item className="item-style" ><Link to="/productos/mothers"> Motherboards </Link></Item>
                <Item className="item-style" ><Link to="/productos/graficas"> Targetas Graficas </Link></Item>
                <Item className="item-style" ><Link to="/productos/ram"> Memoria RAM </Link></Item>
                <Item className="item-style" ><Link to="/productos/fuentes"> Fuentes </Link></Item>
                <Item className="item-style" ><Link to="/productos/rigidos"> Discos Rigidos </Link></Item>
                <Item className="item-style" ><Link to="/productos/coolers"> Coolers </Link></Item>
                <Item className="item-style" ><Link to="/productos/gabinetes"> Gabinetes </Link></Item>
            </Nav>
    );
}

export default NavStore;
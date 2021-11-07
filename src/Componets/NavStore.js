import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../CSS/navStore.css"

const {Item} = Nav

const NavStore = () => {
    return ( 
        <Nav className = "justify-content-center bg-dark" variant="tabs">
            <Item className="item-style" ><Link to="/Store/procesadores"> Procesadores </Link></Item>
            <Item className="item-style" ><Link to="/Store/mothers"> Motherboards </Link></Item>
            <Item className="item-style" ><Link to="/Store/graficas"> Targetas Graficas </Link></Item>
            <Item className="item-style" ><Link to="/Store/ram"> Memoria RAM </Link></Item>
            <Item className="item-style" ><Link to="/Store/fuentes"> Fuentes </Link></Item>
            <Item className="item-style" ><Link to="/Store/rigidos"> Discos Rigidos </Link></Item>
            <Item className="item-style" ><Link to="/Store/coolers"> Coolers </Link></Item>
            <Item className="item-style" ><Link to="/Store/gabinetes"> Gabinetes </Link></Item>
        </Nav>
    );
}

export default NavStore;
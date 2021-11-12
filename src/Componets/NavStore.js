import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "../CSS/navStore.css"

const {Item} = Nav

const NavStore = () => {
    return ( 
        <Nav className = "justify-content-center bg-dark" variant="tabs">
            <Item className="item-style" ><Link to="/Store"> TODOS </Link></Item>
            <Item className="item-style" ><Link to="/Store/Productos/procesadores"> Procesadores </Link></Item>
            <Item className="item-style" ><Link to="/Store/Productos/mothers"> Motherboards </Link></Item>
            <Item className="item-style" ><Link to="/Store/Productos/graficas"> Targetas Graficas </Link></Item>
            <Item className="item-style" ><Link to="/Store/Productos/ram"> Memoria RAM </Link></Item>
            <Item className="item-style" ><Link to="/Store/Productos/fuentes"> Fuentes </Link></Item>
            <Item className="item-style" ><Link to="/Store/Productos/rigidos"> Discos Rigidos </Link></Item>
            <Item className="item-style" ><Link to="/Store/Productos/coolers"> Coolers </Link></Item>
            <Item className="item-style" ><Link to="/Store/Productos/gabinetes"> Gabinetes </Link></Item>
        </Nav>
    );
}

export default NavStore;
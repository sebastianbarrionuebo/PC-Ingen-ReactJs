import { Link, useRouteMatch } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "../CSS/navStore.css"

const {Item} = Nav

const NavStore = () => {
    let { url } = useRouteMatch();

    return ( 
        <Nav className = "justify-content-center bg-dark" variant="tabs">
            <Item className="item-style" ><Link to="/Store"> TODOS </Link></Item>
            <Item className="item-style" ><Link to="/Productos/procesadores"> Procesadores </Link></Item>
            <Item className="item-style" ><Link to="/Productos/mothers"> Motherboards </Link></Item>
            <Item className="item-style" ><Link to="/Productos/graficas"> Targetas Graficas </Link></Item>
            <Item className="item-style" ><Link to="/Productos/ram"> Memoria RAM </Link></Item>
            <Item className="item-style" ><Link to="/Productos/fuentes"> Fuentes </Link></Item>
            <Item className="item-style" ><Link to="/Productos/rigidos"> Discos Rigidos </Link></Item>
            <Item className="item-style" ><Link to="/Productos/coolers"> Coolers </Link></Item>
            <Item className="item-style" ><Link to="/Productos/gabinetes"> Gabinetes </Link></Item>
        </Nav>
    );
}

export default NavStore;
import { Link, useRouteMatch } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "../CSS/navStore.css"

const {Item} = Nav

const NavStore = () => {
    let { url } = useRouteMatch();

    return ( 
        <Nav className = "justify-content-center bg-dark" variant="tabs">
<<<<<<< HEAD
            <Item className="item-style" ><Link to={`${url}/procesadores`}> Procesadores </Link></Item>
            <Item className="item-style" ><Link to={`${url}/mothers`}> Motherboards </Link></Item>
            <Item className="item-style" ><Link to={`${url}/graficas`}> Targetas Graficas </Link></Item>
            <Item className="item-style" ><Link to={`${url}/ram`}> Memoria RAM </Link></Item>
            <Item className="item-style" ><Link to={`${url}/fuentes`}> Fuentes </Link></Item>
            <Item className="item-style" ><Link to={`${url}/rigidos`}> Discos Rigidos </Link></Item>
            <Item className="item-style" ><Link to={`${url}/coolers`}> Coolers </Link></Item>
            <Item className="item-style" ><Link to={`${url}/gabinetes`}> Gabinetes </Link></Item>
=======
            <Item className="item-style" ><Link to="/productos/procesadores"> Procesadores </Link></Item>
            <Item className="item-style" ><Link to="/productos/mothers"> Motherboards </Link></Item>
            <Item className="item-style" ><Link to="/productos/graficas"> Targetas Graficas </Link></Item>
            <Item className="item-style" ><Link to="/productos/ram"> Memoria RAM </Link></Item>
            <Item className="item-style" ><Link to="/productos/fuentes"> Fuentes </Link></Item>
            <Item className="item-style" ><Link to="/productos/rigidos"> Discos Rigidos </Link></Item>
            <Item className="item-style" ><Link to="/productos/coolers"> Coolers </Link></Item>
            <Item className="item-style" ><Link to="/productos/gabinetes"> Gabinetes </Link></Item>
>>>>>>> 4d47c6e7fcf6d05b73033587e11aa80083f688e8
        </Nav>
    );
}

export default NavStore;
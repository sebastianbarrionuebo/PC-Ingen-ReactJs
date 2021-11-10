import { Nav } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import "../CSS/navStore.css"

const {Item} = Nav

const NavStore = () => {
    let { url } = useRouteMatch();

    return ( 
        <Nav className = "justify-content-center bg-dark" variant="tabs">
            <Item className="item-style" ><Link to={`${url}/procesadores`}> Procesadores </Link></Item>
            <Item className="item-style" ><Link to={`${url}/mothers`}> Motherboards </Link></Item>
            <Item className="item-style" ><Link to={`${url}/graficas`}> Targetas Graficas </Link></Item>
            <Item className="item-style" ><Link to={`${url}/ram`}> Memoria RAM </Link></Item>
            <Item className="item-style" ><Link to={`${url}/fuentes`}> Fuentes </Link></Item>
            <Item className="item-style" ><Link to={`${url}/rigidos`}> Discos Rigidos </Link></Item>
            <Item className="item-style" ><Link to={`${url}/coolers`}> Coolers </Link></Item>
            <Item className="item-style" ><Link to={`${url}/gabinetes`}> Gabinetes </Link></Item>
        </Nav>
    );
}

export default NavStore;
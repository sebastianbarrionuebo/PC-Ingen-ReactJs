import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="Sections/Armado.html">Armado</a></li>
                    <li><a href="Sections/Contact.html">Contacto</a></li>
                </ul>
                <CartWidget />
            </nav>
        </>
    );
}

export default NavBar;
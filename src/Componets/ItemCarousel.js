import { Carousel } from 'react-bootstrap';

const ItemCarousel = ({props}) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://localhost:3000/Logo512.png"
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ItemCarousel;
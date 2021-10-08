import Card from "react-bootstrap/Card"
import ItemCount from "./ItemCount"
import "../CSS/Item.css"

const {Body,Img,Footer,Text,Title,} = Card

const Item = (props) => {
    return (
        <>
            <Card key={props.infoProducto.id} className="bg-secondary" >
                <Body className="card-body_background" >
                    <Img src={props.infoProducto.pictureUrl} />
                    <Title>{props.infoProducto.title} </Title>
                    <Text>{props.infoProducto.description} </Text>
                    <Text>Precio: {props.infoProducto.price} </Text>
                </Body>
                <Footer className="card-footer_background">
                    <ItemCount stock={5} initial={1} />
                </Footer>
            </Card>
        </>
    );
}

export default Item;
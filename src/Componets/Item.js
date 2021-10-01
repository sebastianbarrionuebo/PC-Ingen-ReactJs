import Card from "react-bootstrap/Card"
import ItemCount from "./ItemCount"

const {Body,Img,Footer,Text,Title,} = Card

const Item = ({title, description, price, pictureUrl}) => {
    return (
        <>
            <Card>
                <Img src={pictureUrl} />
                <Body>
                    <Title>{title}</Title>
                    <Text>{description}</Text>
                    <Text>Precio: {price}</Text>
                </Body>
                <Footer>
                    <ItemCount stock={5} initial={1} />
                </Footer>
            </Card>
        </>
    );
}

export default Item;
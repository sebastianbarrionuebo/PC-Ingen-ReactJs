import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ItemCount from "./ItemCount"

const {Body,Img,Footer,Text,Title,} = Card

const Main = () => {
    return (
        <>
            <main>
                <h2>Tienda</h2>
                <Row>
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Card>
                            <Img src="http://placehold.it/300x200" />
                            <Body>
                                <Title>Producto 1</Title>
                                <Text>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eaque dignissimos nobis provident voluptate architecto fugiat placeat nostrum dolore consequuntur non quos ipsam possimus, molestiae tempora est ratione illum temporibus!
                                </Text>
                            </Body>
                            <Footer>
                                <ItemCount stock={5} initial={1} />
                            </Footer>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Card>
                            <Img src="http://placehold.it/300x200" />
                            <Body>
                                <Title>Producto 2</Title>
                                <Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum veniam, enim magnam cum in sint beatae amet optio tempore dolor consequatur architecto possimus sapiente impedit iste laudantium odit rem.
                                </Text>
                            </Body>
                            <Footer>
                                <ItemCount stock={5} initial={1} />
                            </Footer>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Card>
                            <Img src="http://placehold.it/300x200" />
                            <Body>
                                <Title>Producto 3</Title>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptates, error odio nisi nihil hic, dignissimos maxime beatae asperiores blanditiis doloremque itaque delectus non accusamus vel voluptatem excepturi sit. Vitae!
                                </Text>
                            </Body>
                            <Footer>
                                <ItemCount stock={5} initial={1} />
                            </Footer>
                        </Card>
                    </Col>
                    <Col sm={6} md={4} lg={3} className="pt-3">
                        <Card>
                            <Img src="http://placehold.it/300x200" />
                            <Body>
                                <Title>Producto 4</Title>
                                <Text>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptates, error odio nisi nihil hic, dignissimos maxime beatae asperiores blanditiis doloremque itaque delectus non accusamus vel voluptatem excepturi sit. Vitae!
                                </Text>
                            </Body>
                            <Footer>
                                <ItemCount stock={5} initial={1} />
                            </Footer>
                        </Card>
                    </Col>
                </Row>
            </main>
        </>
    );
}

export default Main;
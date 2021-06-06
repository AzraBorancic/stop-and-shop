import React from 'react';
import {Button, Card, Icon, Image} from "semantic-ui-react";

const ItemCard = ({ item }) => {
    return (
        <Card style={{ cursor: "pointer" }}>
            <Image src={item.image} size={"large"} />
            <Card.Content>
                <Card.Header textAlign={"right"}>{ item.name }</Card.Header>
                <Card.Meta style={{ fontSize: '18px', fontWeight: "900" }} textAlign={"right"}>{ item.price }KM</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button fluid color='green'>
                    <Icon name={"shopping cart"}/>
                    Add to Cart
                </Button>
            </Card.Content>
        </Card>
    );
};

export default ItemCard;

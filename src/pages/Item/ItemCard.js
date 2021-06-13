import React from 'react';
import {Button, Card, Icon, Image} from "semantic-ui-react";
import {useHistory} from "react-router-dom";
import {toast} from 'react-semantic-toasts';
import {manageCart} from "../../util/local_storage_util";

const ItemCard = ({categoryName, item}) => {
    let history = useHistory();

    return (
        <Card style={{cursor: "pointer"}}>
            <Image src={item.image} size={"large"}
                   onClick={() => {
                       history.push(`/categories/${categoryName}/${item.id}`);
                   }}
            />
            <Card.Content onClick={() => {
                history.push(`/categories/${categoryName}/${item.id}`);
            }}>
                <Card.Header textAlign={"right"}>{item.name}</Card.Header>
                <Card.Meta style={{fontSize: '18px', fontWeight: "900"}} textAlign={"right"}>{item.price}KM</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button fluid color='green'
                        onClick={() => {
                            manageCart(item, "add");
                            toast({
                                type: 'success',
                                icon: 'cart plus',
                                title: 'Added item to cart!',
                                time: 5000
                            });
                        }}>
                    <Icon name={"shopping cart"}/>
                    Add to Cart
                </Button>
            </Card.Content>
        </Card>
    );
};

export default ItemCard;

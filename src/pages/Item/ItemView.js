import React, {useState} from 'react';
import {Button, Grid, Header, Icon, Image, Input} from "semantic-ui-react";
import {manageCart} from "../../util/local_storage_util";
import {toast} from "react-semantic-toasts";

const ItemView = ({item}) => {
    let localItem = JSON.parse(JSON.stringify(item));
    const [quantity, setQuantity] = useState(1);

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Image src={localItem.image} size={"medium"}/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header as={"h3"}>{ localItem.name }</Header>
                    <Input
                        fluid
                        value={quantity}
                        action={() => {
                            return <Button.Group>
                                <Button icon={"plus"} positive onClick={() => {
                                    setQuantity(quantity + 1);
                                }}/>
                                <Button.Or/>
                                <Button icon={"minus"} negative disabled={quantity === 1}
                                        onClick={() => {
                                            setQuantity(quantity - 1);
                                        }}/>
                            </Button.Group>
                        }}/>
                    <br/>
                    <Button color={"teal"} animated='vertical' fluid
                            onClick={() => {
                                localItem.quantity = quantity;
                                manageCart(localItem, "add");
                                toast({
                                    type: 'success',
                                    icon: 'cart plus',
                                    title: 'Added item(s) to cart!',
                                    time: 5000
                                });
                            }}>
                        <Button.Content hidden>Add to Cart</Button.Content>
                        <Button.Content visible>
                            <Icon name='shop' />
                        </Button.Content>
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default ItemView;

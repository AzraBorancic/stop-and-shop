import React, {useState} from 'react';
import {Button, Grid, Icon, Image, Input, Table} from "semantic-ui-react";
import {manageQuantity} from "../../util/local_storage_util";

const calculateSubtotal = (items) => {
    let subtotal = 0;
    items.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    return subtotal;
}

const ShoppingCartView = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const [localCart, setLocalCart] = useState(cart);

    return (
        <Grid>
            <Grid.Row>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell/>
                            <Table.HeaderCell>Product Name</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Cost</Table.HeaderCell>
                            <Table.HeaderCell/>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            localCart.map((item) => {
                                return <Table.Row key={item.id}>
                                    <Table.Cell textAlign={"center"}>
                                        <Image src={item.image} size={"tiny"}/>
                                    </Table.Cell>
                                    <Table.Cell singleLine>{item.name}</Table.Cell>
                                    <Table.Cell>
                                        <Input
                                            fluid
                                            key={item.id}
                                            value={item.quantity}
                                            action={() => {
                                                return <Button.Group>
                                                    <Button icon={"plus"} positive onClick={() => {
                                                        manageQuantity(item, "increase");
                                                        cart = JSON.parse(localStorage.getItem("cart"));
                                                        setLocalCart(cart);
                                                    }}/>
                                                    <Button.Or/>
                                                    <Button icon={"minus"} negative disabled={item.quantity === 1}
                                                            onClick={() => {
                                                                manageQuantity(item, "decrease");
                                                                cart = JSON.parse(localStorage.getItem("cart"));
                                                                setLocalCart(cart);
                                                            }}/>
                                                </Button.Group>
                                            }}/>
                                    </Table.Cell>
                                    <Table.Cell textAlign={"right"}>
                                        <b>{item.price * item.quantity}KM</b>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button animated negative fluid>
                                            <Button.Content hidden>Remove item?</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='trash alternate'/>
                                            </Button.Content>
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            })
                        }
                    </Table.Body>
                </Table>
            </Grid.Row>
            <Grid.Row>
                <div style={{width: "100%"}}>
                    <p style={{float: "right"}}>Subtotal:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b
                        style={{fontSize: "18px"}}>{
                        calculateSubtotal(localCart)
                    }KM</b></p>
                </div>
            </Grid.Row>
        </Grid>
    );
};

export default ShoppingCartView;

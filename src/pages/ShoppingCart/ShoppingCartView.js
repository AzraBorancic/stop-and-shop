import React, {useState} from 'react';
import {Button, Confirm, Grid, Header, Icon, Image, Input, Table} from "semantic-ui-react";
import {manageCart, manageQuantity} from "../../util/local_storage_util";
import {toast} from "react-semantic-toasts";
import {useHistory} from "react-router-dom";

const calculateSubtotal = (items) => {
    let subtotal = 0;
    items.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    return subtotal;
}

const ShoppingCartView = () => {
    let history = useHistory();
    let cart = JSON.parse(localStorage.getItem("cart"));
    const [localCart, setLocalCart] = useState(cart);
    const [confirm, setConfirm] = useState(false);

    return (
        <Grid textAlign={"center"}>
            <Header as={"h3"}>Shopping Cart</Header>
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
                                        <Button animated negative fluid onClick={() => {
                                            setConfirm(true);
                                        }}>
                                            <Button.Content hidden>Remove item?</Button.Content>
                                            <Button.Content visible>
                                                <Icon name='trash alternate'/>
                                            </Button.Content>
                                        </Button>
                                        <Confirm
                                            open={confirm}
                                            onConfirm={() => {
                                                manageCart(item, "delete");
                                                cart = JSON.parse(localStorage.getItem("cart"));
                                                setLocalCart(cart);
                                                setConfirm(false);
                                                toast({
                                                    type: 'info',
                                                    icon: 'cart arrow down',
                                                    title: 'Removed item from cart.',
                                                    time: 5000
                                                })
                                            }}
                                            onCancel={() => {
                                                setConfirm(false);
                                            }}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            })
                        }
                        {
                            !localCart.length &&
                            <Table.Row>
                                <Table.Cell colSpan='5' textAlign={"center"}>
                                    <Header as={"h5"}>
                                        No items in cart, feel free to add more!
                                    </Header>
                                </Table.Cell>
                            </Table.Row>
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
                <br/>
                <br/>
                <div style={{width: "100%"}}>
                    <Button color={"teal"} style={{float: "left"}} onClick={() => {
                        history.goBack();
                    }}>
                        <Icon name={"arrow left"}/> Continue Shopping
                    </Button>
                    <Button color={"teal"} style={{float: "right"}} onClick={() => {
                        history.push("/checkout");
                    }}>
                        <Icon name={"credit card outline"}/> Proceed to Checkout
                    </Button>
                </div>
            </Grid.Row>
        </Grid>
    );
};

export default ShoppingCartView;

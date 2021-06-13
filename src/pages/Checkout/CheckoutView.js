import React, {useState} from 'react';
import {Button, Checkbox, Form, Grid, Table} from "semantic-ui-react";

const calculateSubtotal = (items) => {
    let subtotal = 0;
    items.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    return subtotal;
}

const CheckoutView = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const [localCart, setLocalCart] = useState(cart);
    const [form, setForm] = useState({
        cardHolderName: "",
        cardNumber: "",
        expiryDate: "",
        cvc: "",
        saveData: false
    });

    return (
        <Grid>
            <Grid.Column width={8}>
                <Table celled striped>
                    <Table.Header>
                        <Table.Row textAlign={"center"}>
                            <Table.HeaderCell colSpan='3'>Shopping Cart</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            localCart.map(item => {
                                return <Table.Row>
                                    <Table.Cell collapsing>
                                        {item.name}
                                    </Table.Cell>
                                    <Table.Cell>{item.quantity}</Table.Cell>
                                    <Table.Cell collapsing textAlign='right'>
                                        <b>{item.price * item.quantity}KM</b>
                                    </Table.Cell>
                                </Table.Row>
                            })
                        }
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row textAlign={"right"}>
                            <Table.HeaderCell
                                colSpan='3'>Total: <b>{calculateSubtotal(localCart)}KM</b></Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </Grid.Column>
            <Grid.Column width={8}>
                <Form>
                    <Form.Field>
                        <label>Cardholder Name</label>
                        <input value={form.cardHolderName}
                               onChange={e => setForm({...form, cardHolderName: e.target.value})}
                               placeholder='John Doe'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Credit Card Number</label>
                        <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number"
                               maxLength="19" placeholder="XXXX XXXX XXXX XXXX" required value={form.cardNumber}
                               onChange={e => setForm({...form, cardNumber: e.target.value})}/>
                    </Form.Field>
                    <Form.Group widths={"equal"}>
                        <Form.Field>
                            <label>Expiry Date</label>
                            <input id="expiry" type="text" maxLength="5" placeholder="XX/XX" required
                                   value={form.expiryDate}
                                   onChange={e => setForm({...form, expiryDate: e.target.value})}/>
                        </Form.Field>
                        <Form.Field>
                            <label>CVC/CVV</label>
                            <input id="cvc" type="text"maxLength="3" placeholder="XXX" required
                                   value={form.cvc} onChange={e => setForm({...form, cvc: e.target.value})}/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths={"equal"}>
                        <Form.Field>
                            <Checkbox label='Save Card Details?' checked={form.saveData}
                                      onChange={e => setForm({...form, saveData: e.target.value})}/>
                        </Form.Field>
                        <Form.Field>
                            <Button fluid color={"teal"} type='submit'>Pay Now</Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default CheckoutView;

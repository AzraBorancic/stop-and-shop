import React, {useState} from 'react';
import {Button, Checkbox, Form, Grid, Header, Table} from "semantic-ui-react";
import {toast} from "react-semantic-toasts";
import {useHistory} from "react-router-dom";

const calculateSubtotal = (items) => {
    let subtotal = 0;
    items.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    return subtotal;
}

const CheckoutView = () => {
    let history = useHistory();
    let cart = JSON.parse(localStorage.getItem("cart"));
    let userData = JSON.parse(localStorage.getItem("user_data"));
    if (!userData) {
        userData = {
            fullName: "",
            email: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            cardHolderName: "",
            cardNumber: "",
            expiryDate: "",
            cvc: "",
            saveData: false
        }
    }

    const handlePayment = () => {
        if (form.saveData) {
            localStorage.setItem("user_data", JSON.stringify(form));
        } else {
            localStorage.setItem("user_data", JSON.stringify({
                fullName: "",
                email: "",
                address: "",
                city: "",
                state: "",
                zip: "",
                cardHolderName: "",
                cardNumber: "",
                expiryDate: "",
                cvc: "",
                saveData: false
            }));
        }
        toast({
            type: 'success',
            icon: 'credit card outline',
            title: 'Successfully completed the order!',
            description: 'Delivery will be performed in the next 5 to 7 business days',
            time: 5000
        });
        localStorage.setItem("cart", JSON.stringify([]));
        history.push("/");
    }

    const [localCart, setLocalCart] = useState(cart);
    const [form, setForm] = useState(userData);

    return (
        <Grid>
            <Grid.Column width={10}>
                <Form>
                    <Header as={"h3"}>Billing Address</Header>
                    <Form.Field>
                        <label>Full Name</label>
                        <input type="text" name="firstname" placeholder="John Doe"
                               value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input type="text" name="email" placeholder="john@example.com"
                               value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        />
                    </Form.Field>
                    <Form.Group widths={"equal"}>
                        <Form.Field>
                            <label>Address</label>
                            <input type="text" name="address" placeholder="542 W. 15th Street"
                                   value={form.address} onChange={e => setForm({...form, address: e.target.value})}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label> City</label>
                            <input type="text" name="city" placeholder="New York"
                                   value={form.city} onChange={e => setForm({...form, city: e.target.value})}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths={"equal"}>
                        <Form.Field>
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" placeholder="NY"
                                   value={form.state} onChange={e => setForm({...form, state: e.target.value})}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Zip</label>
                            <input type="text" id="zip" placeholder="10001"
                                   value={form.zip} onChange={e => setForm({...form, zip: e.target.value})}
                            />
                        </Form.Field>
                    </Form.Group>
                    <br/>
                    <Header as={"h3"}>Payment Information</Header>
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
                            <input id="cvc" type="text" maxLength="3" placeholder="XXX" required
                                   value={form.cvc} onChange={e => setForm({...form, cvc: e.target.value})}/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths={"equal"}>
                        <Form.Field>
                            <Checkbox toggle label='Save User Details?' checked={form.saveData}
                                      onChange={(e, data) => setForm({...form, saveData: data.checked})}/>
                        </Form.Field>
                        <Form.Field>
                            <Button fluid color={"teal"} type='submit' onClick={() => {
                                handlePayment();
                            }}>Pay Now</Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Grid.Column>
            <Grid.Column width={6}>
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
        </Grid>
    );
};

export default CheckoutView;

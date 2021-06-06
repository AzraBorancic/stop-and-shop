import React from 'react'
import {
    Container,
    Icon,
    Menu,
} from 'semantic-ui-react'
import Logo from "../pages/Logo/Logo";
import ItemSearch from "./ItemSearch";
import {useHistory} from "react-router-dom";

const Navbar = () => {
    let history = useHistory();

    return (
        <div>
            <Menu style={{backgroundColor: '#FBF27C'}} fixed='top' stackable>
                <Container>
                    <Menu.Item as='a' header style={{color: '#586E72'}}
                               onClick={() => {
                                   history.push("/");
                               }}>
                        <Logo isSvg={true}/>
                        &nbsp;
                        &nbsp;
                        Stop&Shop
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            history.push("/");
                        }}
                        style={{color: '#586E72'}} as='a'>Home</Menu.Item>
                    <Menu.Item>
                        <ItemSearch/>
                    </Menu.Item>
                    <Menu.Item as='a' position={"right"}
                               onClick={() => {
                                   history.push("/shopping_cart");
                               }}
                    >
                        <Icon size="large" name="shopping cart"/>
                    </Menu.Item>
                    <Menu.Item as='a' style={{marginRight: "-10px"}}
                               onClick={() => {
                                   history.push("/sign_in");
                               }}
                    >
                        <Icon size="large" name="sign in"/>
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}

export default Navbar
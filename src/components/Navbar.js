import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import Logo from "../pages/Logo/Logo";
import ItemSearch from "./ItemSearch";

const Navbar = ({ Slot }) => (
  <div>
    <Menu style={{ backgroundColor: '#FBF27C' }} fixed='top' stackable>
      <Container>
        <Menu.Item as='a' header style={{ color: '#586E72' }}>
          <Logo isSvg={true} />
          &nbsp;
          &nbsp;
          Stop&Shop
        </Menu.Item>
        <Menu.Item style={{ color: '#586E72' }} as='a'>Home</Menu.Item>
        <Menu.Item>
          <ItemSearch/>
        </Menu.Item>
        <Menu.Item as='a' position={"right"}>
          <Icon size="large" name="shopping cart" />
        </Menu.Item>
        <Menu.Item as='a' style={{ marginRight: "-10px" }}>
          <Icon size="large" name="sign in" />
        </Menu.Item>
      </Container>
    </Menu>

    <Container style={{ height: "auto", minHeight: "51vh", marginTop: '7em' }}>
      <Slot/>
    </Container>

    <Segment vertical style={{ backgroundColor: '#FBF27C', margin: '5em 0em 0em', padding: '5em 0em', bottom: '0px' }}>
      <Container textAlign='center'>
        <Grid divided stackable>
          <Grid.Column width={3}>
            <Header as='h4' content='Group 1' />
            <List link>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as='h4' content='Group 2' />
            <List link>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as='h4' content='Group 3' />
            <List link>
              <List.Item as='a'>Link One</List.Item>
              <List.Item as='a'>Link Two</List.Item>
              <List.Item as='a'>Link Three</List.Item>
              <List.Item as='a'>Link Four</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' content='Footer Header' />
            <p>
              Extra space for a call to action inside the footer that could help re-engage users.
            </p>
          </Grid.Column>
        </Grid>

        <Divider section />
        <Logo centered={true} transparent={true} size="small"/>
        <List horizontal divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)

export default Navbar
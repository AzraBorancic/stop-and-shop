import React from 'react';
import {Grid, Card, List, Header} from "semantic-ui-react";
import shoppingItems from "../../util/shopping_items.json";
import ItemCard from "../Item/ItemCard";
import categories from "../../util/categories.json";

import {
    Link,
    useParams
} from "react-router-dom";


const CategoryView = () => {
    let {category_name} = useParams();
    let categoryItem = categories.filter(item => item.value === category_name)[0];

    return (
        <Grid>
            <Grid.Column width={4}>
                <Header as={"h5"}>{categoryItem.name}</Header>
                <List>
                    {
                        categories.map((item, index) => {
                            return <List.Item key={index}>
                                <Link to={`/categories/${item.value}`}>
                                    &emsp;{item.name}
                                </Link>
                            </List.Item>
                        })
                    }
                </List>
            </Grid.Column>
            <Grid.Column width={12}>
                {
                    shoppingItems[categoryItem.value].length === 0 &&
                    <Header
                        style={{
                            margin: 0,
                            position: "absolute",
                            top: "50%",
                            left: "25%",
                            msTransform: "translateY(-50%, -50%)",
                            transform: "translateY(-50%, -50%)"
                        }}
                        as={"h3"}>There are no items available in this category.</Header>
                }
                <Card.Group stackable itemsPerRow={4}>
                    {
                        shoppingItems[categoryItem.value].map((item, index) => {
                            return <ItemCard item={item} key={index}/>;
                        })
                    }
                </Card.Group>
            </Grid.Column>
        </Grid>
    );
};

export default CategoryView;

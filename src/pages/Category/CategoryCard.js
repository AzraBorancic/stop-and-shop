import React from 'react';
import {Card} from "semantic-ui-react";
import {useHistory} from "react-router-dom";

const CategoryCard = ({category}) => {
    let history = useHistory();

    return (
        <Card style={{ cursor: "pointer" }} onClick={() => {
            history.push(`/categories/${String(category.name).toLowerCase().replace(/ /g, "_")}`);
        }}>
            {category.image}
            <Card.Content>
                <Card.Header textAlign={"center"}>{category.name}</Card.Header>
            </Card.Content>
        </Card>
    );
};

export default CategoryCard;
